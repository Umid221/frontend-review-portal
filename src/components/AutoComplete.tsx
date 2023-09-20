import React from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    useToast,
} from "@chakra-ui/react";
import { useCreateTagMutation } from "src/features/tags/tagsApiSlice";
import { useTranslation } from "react-i18next";

export interface Item {
    label: string;
    value: string;
}

interface AutoCompleteProps {
    error: string | undefined;
    label: string;
    items: Item[] | undefined;
    placeholder: string;
    id: string;
}

export default function AutoComplete({
    label,
    error,
    items,
    placeholder,
    id,
}: AutoCompleteProps) {
    const toast = useToast();
    const { t } = useTranslation();
    const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);

    const [createTag] = useCreateTagMutation();

    const handleCreateItem = (item: Item) => {
        createTag({ name: item.label })
            .unwrap()
            .then((res) => toast({ title: t(res.message) }));

        setSelectedItems((curr) => [...curr, item]);
    };

    const handleSelectedItemsChange = (selectedItems?: Item[]) => {
        if (selectedItems) {
            setSelectedItems(selectedItems);
        }
    };

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <CUIAutoComplete
                label={label}
                placeholder={placeholder}
                onCreateItem={handleCreateItem}
                items={items ?? []}
                hideToggleButton
                selectedItems={selectedItems}
                onSelectedItemsChange={(changes) =>
                    handleSelectedItemsChange(changes.selectedItems)
                }
            />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
}
