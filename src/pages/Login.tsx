import { Button, CardBody, CardFooter, Flex, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthWrapper from "src/components/auth-layout/AuthWrapper";
import FormField from "src/components/FormField";

type LoginFormValues = {
    email: string;
    password: string;
};

function Login() {
    const { t } = useTranslation();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>();

    function onSubmit(values: LoginFormValues) {
        console.log(values);
    }

    return (
        <AuthWrapper title={t("auth.login")}>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)} id="login">
                    <Flex flexDir={"column"} gap="4">
                        <FormField
                            label="Email"
                            id="email"
                            error={errors.email?.message}
                        >
                            <Input
                                id="email"
                                variant="green"
                                {...register("email", {
                                    required: "Email is required!",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email",
                                    },
                                })}
                            />
                        </FormField>
                        <FormField
                            label={t("auth.password")}
                            id="password"
                            error={errors.password?.message}
                        >
                            <Input
                                id="password"
                                type="password"
                                variant="green"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be at least 8 characters ",
                                    },
                                })}
                            />
                        </FormField>
                    </Flex>
                </form>
            </CardBody>
            <CardFooter flexDirection={"column"} gap="3" textAlign="center">
                <Button
                    form="login"
                    type="submit"
                    variant="green"
                    isLoading={isSubmitting}
                >
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
