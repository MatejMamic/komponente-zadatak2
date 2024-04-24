import React from "react";
import { korisnici } from "../App";
class AntonijoObjekt extends React.Component {
  render() {
    const korisnik = korisnici.find((item) => item.ime === "Antonijo");
    const { ime, godine } = korisnik;
    return (
      <>
        <p>ime:{ime}</p>
        <p>godine:{godine}</p>
      </>
    );
  }
}
export default AntonijoObjekt;
