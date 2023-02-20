import React from "react";
import CartWidget from "./CartWidget";
import stickerLogo from "../assets/logo.png";
import { Grid, Box, Img, Button } from "@chakra-ui/react";

function NavBar() {
  return (
    <div className="conteiner">
      {/* <Flex minWidth="max-content" alignItems="center" gap="700">
        <Box p="2">
          <Img src={stickerLogo} alt="Logo" height="100" />
        </Box>
        <Spacer />
        <ButtonGroup gap="100">
          <ul className="indice">
            <li>
              <button className="stickers">Stickers</button>
            </li>
            <li>
              <button className="posters">Posters</button>
            </li>
          </ul>
          <Button colorScheme="pink">
            <CartWidget />
            <span>6</span>
          </Button>
        </ButtonGroup>
      </Flex> */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box>
          <Img src={stickerLogo} alt="Logo" height="100" />
        </Box>
        <Box>
          <ul className="indice">
            <li>
              <button className="stickers">Stickers</button>
            </li>
            <li>
              <button className="posters">Posters</button>
            </li>
          </ul>
        </Box>
        <Box className="carrito">
          <Button  colorScheme="pink">
            <CartWidget />
            <span>6</span>
          </Button>
        </Box>
      </Grid>
    </div>
  );
}

export default NavBar;
