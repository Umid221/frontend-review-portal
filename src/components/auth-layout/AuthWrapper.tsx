import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Card,
    CardHeader,
    Center,
    Heading,
    IconButton,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

type AuthWrapperPropTypes = {
    title: string;
    children: React.ReactNode;
};

function AuthWrapper({ title, children }: AuthWrapperPropTypes) {
    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    }

    return (
        <Center h="100vh">
            <IconButton
                variant="green"
                aria-label="back"
                position={"absolute"}
                zIndex={999}
                top={5}
                left={5}
                icon={<ArrowBackIcon />}
                colorScheme={"green"}
                onClick={goBack}
            />
            <Card border="2px solid green">
                <CardHeader textAlign={"center"}>
                    <Heading size={"md"}>{title}</Heading>
                </CardHeader>
                {children}
            </Card>
        </Center>
    );
}

export default AuthWrapper;
