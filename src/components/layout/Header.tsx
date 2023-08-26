import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    Heading,
    IconButton,
    Spacer,
    useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    console.log(colorMode);

    return (
        <Box bg={"green.500"} p="4" color={"white"}>
            <Flex>
                <Link to="/">
                    <Heading size={"lg"}>Homepage</Heading>
                </Link>
                <Spacer />
                <Flex gap={2}>
                    <IconButton
                        aria-label="dark-mode"
                        icon={
                            colorMode === "light" ? <MoonIcon /> : <SunIcon />
                        }
                        onClick={() => toggleColorMode()}
                    />
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Header;
