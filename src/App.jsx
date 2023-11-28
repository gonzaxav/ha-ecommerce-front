import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutProject from "./pages/AboutProject";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-el-proyecto" element={<AboutProject />} />
        <Route path="/producto" element={<Product />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
