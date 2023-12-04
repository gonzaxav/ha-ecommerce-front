import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutProject from "./pages/AboutProject";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Category from "./pages/Category"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-el-proyecto" element={<AboutProject />} />
        <Route path="/producto/:slug" element={<Product />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/categoria/:slug" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
