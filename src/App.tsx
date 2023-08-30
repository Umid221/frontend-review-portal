import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import theme from "src/styles/theme";
import router from "./routes";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <ColorModeProvider>
                    <RouterProvider router={router} />
                </ColorModeProvider>
            </ChakraProvider>
        </Provider>
    );
}

export default App;
