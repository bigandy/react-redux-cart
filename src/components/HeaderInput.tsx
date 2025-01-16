import { memo } from "react";

import { update } from "@stores/inputSlice";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@stores/store";

const HeaderInput = memo(() => {
  const inputText = useAppSelector((state) => state.input.value);
  const dispatch = useDispatch();

  return (
    <input
      value={inputText}
      onInput={(event) => {
        const element = event.currentTarget as HTMLInputElement;
        const value = element.value;

        dispatch(update(value));
      }}
    />
  );
});
export default HeaderInput;
