import {
    Box,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Textarea,
    useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useGetTagsQuery } from "src/features/tags/tagsApiSlice";
import AutoComplete from "../AutoComplete";
import FormField from "../FormField";

type EditorFormValues = {
    name: string;
    reviewedArt: string;
    groupId: ReviewGroupEnum;
    tags: string[];
    reviewText: string;
    image?: string;
    grade: number;
};

enum ReviewGroupEnum {
    movies,
    books,
    games,
}

const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
};

function CreateReviewModal() {
    const initialRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data: tags } = useGetTagsQuery({});

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
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                initialFocusRef={initialRef}
                size="6xl"
            >
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
                                <Input variant={"green"} ref={initialRef} />
                            </FormField>
                            <FormField
                                label="Reviewed Art Name"
                                id="reviewedArt"
                                error={errors.reviewedArt?.message}
                            >
                                <Input variant={"green"} />
                            </FormField>
                            <FormField
                                label="Group"
                                id="groupId"
                                error={errors.groupId?.message}
                            >
                                <Input variant={"green"} />
                            </FormField>
                            <AutoComplete
                                id="tags"
                                error={errors.tags?.message}
                                label="Tags"
                                items={tags?.data?.map((item) => ({
                                    value: item.name,
                                    label: item.name,
                                }))}
                                placeholder="Type a tag"
                            />
                            <FormField
                                label="Group"
                                id="groupId"
                                error={errors.groupId?.message}
                            >
                                <Textarea variant="green" />
                            </FormField>
                            <FormField
                                label="Grade"
                                id="grade"
                                error={errors.grade?.message}
                            >
                                <Slider defaultValue={0} min={0} max={10}>
                                    {[0, 2, 4, 6, 8, 10].map((item) => (
                                        <SliderMark
                                            key={item}
                                            value={item}
                                            mt={2}
                                        >
                                            {item}
                                        </SliderMark>
                                    ))}
                                    <SliderTrack bg="#afe3c7">
                                        <Box position="relative" right={10} />
                                        <SliderFilledTrack bg="#5aad81" />
                                    </SliderTrack>
                                    <SliderThumb boxSize={5} bg="#27a461" />
                                </Slider>
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
