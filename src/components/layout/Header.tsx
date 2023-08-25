import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Box bg={"green.500"} p="4" color={"white"}>
            <Flex>
                <Link to="/">
                    <Heading size={"lg"}>Homepage</Heading>
                </Link>
                <Spacer />
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
            </Flex>
        </Box>
    );
}

export default Header;
