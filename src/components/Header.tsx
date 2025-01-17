import { NavLink } from "react-router";

import { memo } from "react";

import Basket from "@components/Basket";

export const Header = memo(function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/jokes">Jokes</NavLink>
        <Basket className="ml-auto" />
      </nav>
    </header>
  );
});
