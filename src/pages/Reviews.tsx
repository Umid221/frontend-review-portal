import {
    Box,
    Button,
    Flex,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import CreateReviewModal from "src/components/reviews/CreateReviewModal";

function Reviews() {
    return (
        <Flex m={3} direction="column" gap={4}>
            <CreateReviewModal />
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>name</Th>
                            <Th>Reviewed art</Th>
                            <Th>group</Th>
                            <Th>tags</Th>
                            <Th>review text</Th>
                            <Th>image</Th>
                            <Th>grade</Th>
                            <Th>actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody></Tbody>
                </Table>
            </TableContainer>
        </Flex>
    );
}

export default Reviews;
