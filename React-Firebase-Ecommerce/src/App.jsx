import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import { CartPage } from "./pages/Cart/CartPage";
function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/productinfo" element={<ProductInfo />} />
        <Route path="/cartpage" element={<CartPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
