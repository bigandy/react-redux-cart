import { NavLink } from "react-router";

import { memo } from "react";

import Basket from "@components/Basket";
import { useAppSelector } from "@stores/store";

import { update } from "@stores/inputSlice";
import { useDispatch } from "react-redux";

export const Header = memo(function Header() {
  const inputText = useAppSelector((state) => state.input.value);
  const dispatch = useDispatch();

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

      <input
        value={inputText}
        onInput={(e) => dispatch(update(e.target.value))}
      />
    </header>
  );
});
