import React from "react";
import CartWidget from "./CartWidget";
import stickerLogo from "../assets/logo.png";
import { Grid, Box, Img, Button } from "@chakra-ui/react";

function NavBar() {
  return (
    <div className="conteiner">
      <Grid className="grid" templateColumns="repeat(3, 1fr)" gap={6}>
        <Box>
          <Img src={stickerLogo} alt="Logo" height="100" />
        </Box>
        <Box>
          <ul className="indice">
            <li>
              <button className="guitarras">Guitarras</button>
            </li>
            <li>
              <button className="bajos">Bajos</button>
            </li>
            <li>
              <button className="amplificadores">Amplificadores</button>
            </li>
          </ul>
        </Box>
        <Box className="carrito">
          <Button  colorScheme="red">
            <CartWidget />
            <span>6</span>
          </Button>
        </Box>
      </Grid>
    </div>
  );
}

export default NavBar;
