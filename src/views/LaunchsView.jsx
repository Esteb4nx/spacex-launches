import React from "react";
import { useState, useEffect } from "react";
import { Heading,CircularProgress, Flex } from "@chakra-ui/react";
import * as API from "../services/launches";
import { LaunchItem } from "../components/LaunchItem";

export function LaunchsView() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches()
      .then((response) => {
        setLaunches(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {launches.length == 0 ? (
        <>
        <Flex align="center" justify="center" m={6}>
          <CircularProgress isIndeterminate color='purple.300' />
        </Flex>
        </>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
