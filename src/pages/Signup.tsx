import {
    Button,
    CardBody,
    CardFooter,
    Flex,
    Input,
    useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthWrapper from "src/components/auth-layout/AuthWrapper";
import FormField from "src/components/FormField";
import { useRegisterMutation } from "src/features/auth/authApiSlice";
import { useErrorToast } from "src/utils/hooks/toastHandlers";

type FormValues = {
    fullName: string;
    email: string;
    password: string;
};

function Signup() {
    const { t } = useTranslation();
    const toast = useToast();
    const showError = useErrorToast();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormValues>();

    const [registerUser, { isLoading: isSubmitting }] = useRegisterMutation();

    function onSubmit(values: FormValues) {
        registerUser(values)
            .unwrap()
            .then((res) => toast({ title: t("auth.registerSuccess") }))
            .catch((err) => showError(err));
    }

    return (
        <AuthWrapper title={t("auth.register")}>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)} id="login">
                    <Flex flexDir={"column"} gap="4">
                        <FormField
                            label="Full Name"
                            id="fullName"
                            error={errors.fullName?.message}
                        >
                            <Input
                                id="fullName"
                                variant="green"
                                {...register("fullName", {
                                    required: "Enter your full name",
                                })}
                            />
                        </FormField>
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
                                isInvalid={!!errors.email}
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
