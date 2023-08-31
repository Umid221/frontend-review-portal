import { useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function useErrorToast() {
    const { t } = useTranslation();
    const toast = useToast();

    return (error: any) => {
        let errorType;

        switch (error.status) {
            case 400:
                errorType = "emptyFieldsError";
                break;
            case 409:
                errorType = "duplicateEmail";
                break;
            default:
                errorType = error.data.message;
        }

        toast({ title: t(`error.${errorType}`), status: "error" });
    };
}
