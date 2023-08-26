import {
    Button,
    CardBody,
    CardFooter,
    Flex,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthWrapper from "src/components/auth-layout/AuthWrapper";

function Login() {
    const { t } = useTranslation();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        console.log(e);

        console.log(form.email.value);
        console.log(form.password.value);
    }

    return (
        <AuthWrapper title={t("auth.login")}>
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
                            <FormLabel>{t("auth.password")}</FormLabel>
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
                    {t("auth.login")}
                </Button>
                <Button variant={"link"}>
                    <Link to="/register">{t("auth.noAccount")}</Link>
                </Button>
            </CardFooter>
        </AuthWrapper>
    );
}

export default Login;
