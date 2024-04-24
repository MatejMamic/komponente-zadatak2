import React from "react";
import { korisnici } from "../App";
class PavaoObjekt extends React.Component {
  render() {
    const korisnik = korisnici.find((item) => item.ime === "Pavao");
    const { ime, godine } = korisnik;
    return (
      <>
        <p>ime:{ime}</p>
        <p>godine:{godine}</p>
      </>
    );
  }
}
export default PavaoObjekt;
