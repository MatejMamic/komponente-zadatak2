import React from "react";
import { korisnici } from "../App";

function LucijaFunkcija() {
  const korisnik = korisnici.find((item) => item.ime === "Lucija");
  const { ime, godine } = korisnik;
  return (
    <>
      <p>Ime:{ime}</p>
      <p>godine:{godine}</p>
    </>
  );
}
export default LucijaFunkcija;
