import {
    Button,
    CardBody,
    CardFooter,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    useToast,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthWrapper from "src/components/auth-layout/AuthWrapper";
import { useRegisterMutation } from "src/features/auth/authApiSlice";

type FormValues = {
    fullName: string;
    email: string;
    password: string;
};

function Signup() {
    const { t } = useTranslation();
    const toast = useToast();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>();

    const [registerUser] = useRegisterMutation();

    function onSubmit(values: FormValues) {
        console.log(values);
        registerUser(values)
            .unwrap()
            .then((res) =>
                toast({
                    title: res.message,
                    status: "success",
                    position: "top-right",
                }),
            );
    }

    return (
        <AuthWrapper title={t("auth.register")}>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)} id="login">
                    <Flex flexDir={"column"} gap="4">
                        <FormControl isInvalid={!!errors.fullName}>
                            <FormLabel htmlFor="fullName">Name</FormLabel>
                            <Input
                                id="fullName"
                                variant="green"
                                {...register("fullName", {
                                    required: "Enter your full name",
                                })}
                            />
                            <FormErrorMessage>
                                {errors.fullName?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.email}>
                            <FormLabel htmlFor="email">Email</FormLabel>
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
                            <FormErrorMessage>
                                {errors.email?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.password}>
                            <FormLabel htmlFor="password">
                                {t("auth.password")}
                            </FormLabel>
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
                            <FormErrorMessage>
                                {errors.password?.message}
                            </FormErrorMessage>
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
