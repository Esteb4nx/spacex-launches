import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css"
import { FaWikipediaW, FaSpaceShuttle } from "react-icons/fa";
import {GoRocket} from "react-icons/go"
import {
  Box,
  Heading,
  Flex,
  Text,
  Spacer,
  Tag,
  Icon,
  CircularProgress,
  Button,
  
} from "@chakra-ui/react";
import * as API from "../../services/launches";
import {Link} from "react-router-dom"

export function LaunchDetails() {
  const [launch, setLaunch] = useState();

  let { launchId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId)
      .then((response) => {

        setLaunch(response.data);
        setVideo(`https://www.youtube.com/embed/${response.data.links.youtube_id}`)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [launchId]);

  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launch
      </Heading>
      <Box align="center" mr={4}>
        <Flex align="end" justify="end">
          <Link  to="/">
            <Button colorScheme="purple">
              Back to home
            </Button>
          </Link>

        </Flex>
      </Box>
      <Box bg="gray.200" borderRadius="lg" m={4} p={4}>
        {!launch ? (
          <>
            <Flex align="center" justify="center" m={6}>
              <CircularProgress isIndeterminate color="purple.300" />
            </Flex>
          </>
        ) : (
          <>
            <Flex>
              <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <Flex>
              <Text fontSize="lg" colorScheme="gray.500">
                <strong>Rocket:</strong> {launch.rocket.rocket_name}
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="lg" colorScheme="gray.500">
                <strong>Details:</strong> {launch.details}
              </Text>
            </Flex>

            <Flex mt={2} >
              <a href={launch.links.wikipedia}>
                <Icon as={FaWikipediaW} w={6} h={6} color="purple.700" />
              </a>
              <a href={launch.links.article_link}>
                <Icon as={GoRocket} ml={2} w={6} h={6} color="purple.700" />
              </a>

            </Flex>
            <Box mt={4} align="center">
              <iframe id="video" src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}></iframe>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
