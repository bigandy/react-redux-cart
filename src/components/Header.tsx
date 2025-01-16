import { NavLink } from "react-router";

import { memo } from "react";

import Basket from "@components/Basket";

import HeaderInput from "@components/HeaderInput";

export const Header = memo(function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <Basket className="ml-auto" />
      </nav>

      <HeaderInput />
    </header>
  );
});
