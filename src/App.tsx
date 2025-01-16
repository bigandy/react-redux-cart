import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";

import { Cart } from "@pages/Cart";
import { Home } from "@pages/Home";
import { Header } from "@components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
