import { NavLink } from "react-router";

import { memo } from "react";

import Basket from "@components/Basket";

export const Header = memo(function Header() {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "1rem",
          alignItems: "center",
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <Basket style={{ marginLeft: "auto" }} />
      </nav>

      {/* <input value={inputText} onInput={() => dispatchEvent()} */}
    </header>
  );
});
