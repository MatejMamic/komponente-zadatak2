import React from "react";
import PropTypes from "prop-types";
function AnteFunkcija2() {
  const { ime, godine } = korisnik;
  return (
    <>
      <p>Ime:{ime}</p>
      <p>godine:{godine}</p>
    </>
  );
}
AnteFunkcija2.proptypes = {
  ime: PropTypes.string,
  godine: PropTypes.number,
};
export default AnteFunkcija2;
