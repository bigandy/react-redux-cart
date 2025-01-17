import { memo } from "react";

import { updateSearch, handleJokeSearch } from "@stores/jokeSearchSlice";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@stores/store";

const JokesInput = memo(() => {
  const inputText = useAppSelector((state) => state.jokes.value);

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // @ts-expect-error TODO: properly type handleJokeSearch()
    dispatch(handleJokeSearch(inputText));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        Search for a random Dad Joke from the Dad Joke API
      </label>
      <input
        id="search"
        value={inputText}
        onInput={(event) => {
          const element = event.currentTarget as HTMLInputElement;
          const value = element.value;

          dispatch(updateSearch(value));
        }}
      />
      <button disabled={inputText === ""}>Search</button>
    </form>
  );
});
export default JokesInput;
