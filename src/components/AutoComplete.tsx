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
import { Autocomplete, Option } from "chakra-ui-simple-autocomplete";

export interface Item {
    label: string;
    value: string;
}

interface AutoCompleteProps {
    error: string | undefined;
    label: string;
    items: Option[] | undefined;
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
    const [selectedItems, setSelectedItems] = React.useState<Option[]>([]);

    const [createTag] = useCreateTagMutation();

    const handleCreateItem = (item: Option) => {
        createTag({ name: item.label })
            .unwrap()
            .then((res) => toast({ title: t(res.message) }));

        setSelectedItems((curr) => [...curr, item]);
    };

    const handleSelectedItemsChange = (selectedItems?: Option[]) => {
        if (selectedItems) {
            setSelectedItems(selectedItems);
        }
    };

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            {/* <CUIAutoComplete
                label={label}
                placeholder={placeholder}
                onCreateItem={handleCreateItem}
                items={items ?? []}
                hideToggleButton
                selectedItems={selectedItems}
                onSelectedItemsChange={(changes) =>
                    handleSelectedItemsChange(changes.selectedItems)
                }
            /> */}
            <Autocomplete
                id={id}
                options={items ?? []}
                result={selectedItems}
                setResult={(options: Option[]) => {
                    // setResult(options);
                    handleSelectedItemsChange(options);
                }}
                placeholder="Autocomplete"
                variant={"filled"}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
}
