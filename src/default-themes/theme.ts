import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                fontWeight: "bold", // Normally, it is "semibold"
                backgroundColor: "green",
            },
            // 6. We can overwrite defaultProps
            defaultProps: {
                // size: "lg", // default is md
                // variant: "sm", // default is solid
                colorScheme: "green", // default is gray
                backgroundColor: "green",
            },
        },
    },
});

export default theme;
