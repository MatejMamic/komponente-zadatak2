import React from "react";
import { korisnici } from "../App";

function AnteFunkcija2() {
  const korisnik = korisnici.find((item) => item.ime === "Ante");
  const { ime, godine } = korisnik;
  return (
    <>
      <p>Ime:{ime}</p>
      <p>godine:{godine}</p>
    </>
  );
}
export default AnteFunkcija2;
