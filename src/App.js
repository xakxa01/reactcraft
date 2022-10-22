import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Informacion from "./components/Informacion";
import Jugar from "./components/Jugar";
import Menu from "./components/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/jugar" element={<Jugar />} />
      </Routes>
    </BrowserRouter>
  );
}

