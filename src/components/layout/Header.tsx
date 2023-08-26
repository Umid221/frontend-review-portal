import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    Heading,
    IconButton,
    Select,
    Spacer,
    useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { t, i18n } = useTranslation();

    return (
        <Box bg={"green.500"} p="4" color={"white"}>
            <Flex>
                <Link to="/">
                    <Heading size={"lg"}>Homepage</Heading>
                </Link>
                <Spacer />
                <Flex gap={2}>
                    <Select
                        defaultValue={"en"}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                    >
                        <option value="en">En</option>
                        <option value="uz">Uz</option>
                    </Select>
                    <IconButton
                        aria-label="dark-mode"
                        icon={
                            colorMode === "light" ? <MoonIcon /> : <SunIcon />
                        }
                        onClick={() => toggleColorMode()}
                    />
                    <Link to="/login">
                        <Button>{t("auth.login")}</Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Header;
