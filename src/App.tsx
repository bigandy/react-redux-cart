import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";

import { CartPage } from "@pages/CartPage";
import { HomePage } from "@pages/HomePage";
import { ProductPage } from "@pages/ProductPage";
import { JokesPage } from "@pages/JokesPage";
import { Header } from "@components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/jokes" element={<JokesPage />}></Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
