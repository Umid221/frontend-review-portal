import { extendTheme } from "@chakra-ui/react";
import Input from "./components/Input";
import Button from "./components/Button";
import Textarea from "./components/Textarea";

const theme = extendTheme({
    components: {
        Input,
        Button,
        Textarea,
    },
});

export default theme;
