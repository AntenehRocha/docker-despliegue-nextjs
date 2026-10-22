"use client";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function BuscadorCocteles() {
  const [busqueda, setBusqueda] = useState("");
  const [cocteles, setCocteles] = useState([]);

  const buscarCoctel = async () => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${busqueda}`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.drinks) {
          setCocteles(data.drinks);
        } else {
          setCocteles([]);
        }
      });
  };

  const nombres = [];
  const imagenes = [];
  for (let coctel of cocteles) {
    nombres.push(coctel.strDrink);
    imagenes.push(coctel.strDrinkThumb);
  }

  const listaImagenesJSX = [];
  for (let cada_imagen of imagenes) {
    listaImagenesJSX.push(
      <img key={cada_imagen} src={cada_imagen} alt="" width={100} />,
    );
  }

  return (
    <div>
      <Field orientation="horizontal">
        <Input
          type="search"
          placeholder="Search..."
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button onClick={buscarCoctel}>Search</Button>
      </Field>
      <p>{nombres}</p>
      <div className="flex flex-row justify-around align-center ">{listaImagenesJSX}</div>
    </div>
  );
}
