import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    IconButton,
    Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Login() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        console.log(e);

        console.log(form["email"].value);
        console.log(form["password"].value);
    }

    return (
        <Center h="100vh">
            <Link to={"/"}>
                <IconButton
                    aria-label="back"
                    position={"absolute"}
                    zIndex={999}
                    top={5}
                    left={5}
                    icon={<ArrowBackIcon />}
                    // bg={"green.500"}
                    // color="white"
                    // _hover={{ bg: "green.400" }}
                    // _active={{ bg: "green.600" }}
                />
            </Link>
            {/* back
            </IconButton> */}
            <Card border="2px solid green">
                <CardHeader textAlign={"center"}>
                    <Heading size={"md"}>Login</Heading>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit} id="login">
                        <Flex flexDir={"column"} gap="4">
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    borderColor={"green.500"}
                                    // _focusVisible={{boxShadow(theme) {

                                    // },}}
                                    pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
                                />
                                {/* <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText> */}
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    borderColor={"green.500"}
                                />
                            </FormControl>
                        </Flex>
                    </form>
                </CardBody>
                <CardFooter flexDirection={"column"} gap="3" textAlign="center">
                    <Button
                        form="login"
                        type="submit"
                        // bg={"green.500"}
                        // color="white"
                        // _hover={{ bg: "green.400" }}
                        // _active={{ bg: "green.600" }}
                    >
                        Log In
                    </Button>
                    <Button variant={"link"}>
                        <Link to="/register">Don't have an account?</Link>
                    </Button>
                </CardFooter>
            </Card>
        </Center>
    );
}

export default Login;
