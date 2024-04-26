import "./App.css";

import AnteFunkcija2 from "./components/AnteFunction";
import AnteFunkcija from "./components/AnteFunction";
import AntonijoObjekt from "./components/AntonijoObject";
import LucijaFunkcija from "./components/LucijaFunction";
import PavaoObjekt from "./components/PavaoObject";

export const korisnici = [
  { ime: "Ante", godine: 30 },
  { ime: "Antonijo", godine: 45 },
  { ime: "Lucija", godine: 24 },
  { ime: "Pavao", godine: 27 },
];
function App() {
  return (
    <div className="App">
      <h1>Korisnici</h1>
      <AnteFunkcija />
      <LucijaFunkcija />
      <AntonijoObjekt />
      <PavaoObjekt />
      <AnteFunkcija2 korisnik={korisnici[0]} />
    </div>
  );
}

export default App;
