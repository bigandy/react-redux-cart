import { clearCart } from "@stores/cartSlice";
import { memo } from "react";

import { useAppSelector } from "@stores/store";

export const JokesPage = memo(() => {
  //   const total = useAppSelector(getTotal);

  const jokes = useAppSelector((state) => state.jokes.jokes);

  console.log({ jokes });
  //   const dispatch = useDispatch();

  return (
    <>
      <h1>Jokes</h1>

      {jokes.length > 0 ? (
        <>
          {jokes.map(({ id, joke }) => {
            return <div key={`joke-${id}`}>{joke}</div>;
            // return (
            //   <Product
            //     key={product.id}
            //     product={product}
            //     type="remove"
            //     quantity={quantity}
            //   />
            // );
          })}
        </>
      ) : (
        <div>No Jokes Yet</div>
      )}
    </>
  );
});
