import React from "react";
import ItemListConteiner from "./components/ItemListConteiner";
import NavBar from "./components/NavBar";
import { useState } from "react";
import data from "./data.json";



const app = () => {
  
   const [contador, setContador] = useState(0);

   const sumar = () => {
     setContador(contador + 1);
   };

   const restar = () => {
     setContador(contador - 1);
   };

   const borrar= () => {
     setContador (0);
   };

   return (
     <>
       <NavBar />
       <ItemListConteiner gretting="Bienvenido a Planet Rock" />
       <p>{contador}</p>
       <button onClick={sumar} >+</button>
       <button onClick={restar} >-</button>
       <button onClick={borrar} >bor</button>
     </>
   );

   const getDatos = () => {
     return new Promise((resolve, reject) => {
       if (data.length === 0) {
         reject(new Error("erroe"));
       }
       setTimeout(() => {
         resolve(data);
       }, 3000);
     });
   };

  getDatos().then((datos) => console.log(datos));
};

export default app;
