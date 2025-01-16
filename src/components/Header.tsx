import { Link } from "react-router";

import { memo } from "react";

import { Basket } from "./Basket";

export const Header = memo(function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Basket />
    </header>
  );
});
