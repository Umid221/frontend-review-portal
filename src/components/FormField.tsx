import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

type FormFieldProps = {
    error: string | undefined;
    id: string;
    label: string;
    children: React.ReactNode;
};

function FormField({ id, label, children, error }: FormFieldProps) {
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            {children}
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
}

export default FormField;
