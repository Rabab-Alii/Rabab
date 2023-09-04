import { Route, Routes } from "react-router-dom";
import "./App.css";
import Avis from "./Pages/Avis";
import Movies from "./Pages/Movies";
import Accueil from "./Pages/Accueil";
import Header from "./Component/Header";


const App = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/avis" element={<Avis />} />
      </Routes>
    </>
  );
};

export default App;
