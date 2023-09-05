import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FormField from "../FormField";

type EditorFormValues = {
    name: string;
    reviewedArt: string;
    group: ReviewGroupEnum;
    tags: string[];
    reviewText: string;
    image: string;
    grade: number;
};

enum ReviewGroupEnum {
    movies,
    books,
    games,
}

function CreateReviewModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<EditorFormValues>();

    function onSubmit() {}

    return (
        <>
            <Button onClick={onOpen} variant={"green"} alignSelf="end">
                create
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Review Editor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormField
                                label="Name"
                                id="name"
                                error={errors.name?.message}
                            >
                                <Input variant={"green"} />
                            </FormField>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="green" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateReviewModal;
