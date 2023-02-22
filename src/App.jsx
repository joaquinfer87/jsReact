import React from "react";
import ItemListConteiner from "./components/ItemListConteiner";
import NavBar from "./components/NavBar";


const app = () => {
  return (
    <>
    <NavBar/>
    <ItemListConteiner gretting ="Bienvenido a gola  Planet" />
    </>
  );
};

export default app;
