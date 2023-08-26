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
import AuthWrapper from "../components/auth-layout/AuthWrapper";

function Login() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        console.log(e);

        console.log(form.email.value);
        console.log(form.password.value);
    }

    return (
        <AuthWrapper title="Login">
            <CardBody>
                <form onSubmit={handleSubmit} id="login">
                    <Flex flexDir={"column"} gap="4">
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input
                                name="email"
                                type="email"
                                variant="green"
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
                                variant="green"
                            />
                        </FormControl>
                    </Flex>
                </form>
            </CardBody>
            <CardFooter flexDirection={"column"} gap="3" textAlign="center">
                <Button form="login" type="submit" variant="green">
                    Log In
                </Button>
                <Link to="/register">
                    <Button variant={"link"}>Don't have an account?</Button>
                </Link>
            </CardFooter>
        </AuthWrapper>
    );
}

export default Login;
