import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import theme from "src/styles/theme";
import router from "./routes";

function App() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <ColorModeProvider>
                    <RouterProvider router={router} />
                </ColorModeProvider>
            </ChakraProvider>
        </>
    );
}

export default App;
