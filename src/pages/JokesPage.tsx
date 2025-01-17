import { memo } from "react";

import JokesInput from "@components/JokesInput";
import { useAppSelector } from "@stores/store";

export const JokesPage = memo(() => {
  const searchResults = useAppSelector((state) => state.jokes.searchResults);

  return (
    <>
      <h1>Jokes</h1>

      <JokesInput />

      {searchResults.length > 0 ? (
        <>
          {searchResults.map(({ id, joke }) => {
            return (
              <div key={`joke-${id}`} className="mb-2">
                {joke}
              </div>
            );
          })}
        </>
      ) : (
        <div>No Jokes Yet</div>
      )}
    </>
  );
});
