import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Output from "./pages/Output";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultar" element={<Output />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
