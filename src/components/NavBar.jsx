import React from "react";
import CartWidget from "./CartWidget";
import stickerLogo from "../assets/logo.png"
import {
  Flex,
  Spacer,
  Box,
  Img,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

function NavBar() {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="850">
        <Box p="2">
          <Img src={stickerLogo} alt="Logo" height="100" />
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="pink">
            <CartWidget />
            <span>6</span>
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default NavBar;
