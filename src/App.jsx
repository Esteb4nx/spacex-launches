import { Image, Flex} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo-spacex.png";
import { LaunchsView } from "./views/LaunchsView"
import { LaunchDetails } from "./views/LaunchDetails/LaunchDetails"
export function App() {


  return (
    <>
      <Flex align="center" justify="center">
        <Image src={logo} width={300} alt="" />
      </Flex>
      <Routes>
        <Route path="/" element={<LaunchsView />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
    </>
  );
}
