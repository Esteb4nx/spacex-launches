import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { Box, Flex, Text, Spacer, Tag, Button, Icon} from "@chakra-ui/react";
import dayjs from 'dayjs';
import 'dayjs/locale/es';

export function LaunchItem(launch){
    return (
        <>
            <Box bg="gray.200" borderRadius="lg" m={4} p={4} >
                <Flex>
                    <Text fontSize="2xl">
                        Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                    </Text>
                    <Spacer/>
                    <Tag p={2} colorScheme={launch.launch_success ? "green": "red"}>
                        {launch.launch_success ? "Success": "Failure"}
                    </Tag>
                </Flex>
                <Flex align="center">
                    <Icon as={FaCalendarAlt} color="gray.500" />
                    <Text fontSize="sm" ml={2} colorScheme="gray.500">
                        {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
                    </Text>
                </Flex>
                <Link to={`/launch/${launch.flight_number}`}>
                    <Button mt={2} colorScheme="purple">More Details</Button>
                </Link>
            </Box>
        </>
    )
}