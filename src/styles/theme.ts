import { extendTheme } from "@chakra-ui/react";
import Input from "./components/Input";
import Button from "./components/Button";

const theme = extendTheme({
    components: {
        Input,
        Button,
    },
});

export default theme;
