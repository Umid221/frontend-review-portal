import {
    Button,
    CardBody,
    CardFooter,
    Flex,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthWrapper from "src/components/auth-layout/AuthWrapper";

function Signup() {
    const { t } = useTranslation();
    function handsleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        console.log(form.username.value);
        console.log(form.email.value);
        console.log(form.password.value);
    }

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    function onSubmit(values: FieldValues) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve(values);
            }, 3000);
        });
    }

    return (
        <AuthWrapper title={t("auth.register")}>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)} id="login">
                    <Flex flexDir={"column"} gap="4">
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input name="username" variant="green" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input
                                name="email"
                                type="email"
                                variant="green"
                                pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
                            />
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
                    {t("auth.register")}
                </Button>
                <Link to="/login">
                    <Button variant={"link"}>{t("auth.haveAccount")}</Button>
                </Link>
            </CardFooter>
        </AuthWrapper>
    );
}

export default Signup;
