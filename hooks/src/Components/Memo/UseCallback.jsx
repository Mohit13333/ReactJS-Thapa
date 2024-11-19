import { memo } from "react";
import { useState, useCallback } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Rendring Children...${children}`);
  return <button onClick={onClick}>{children}</button>;
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const Increment = useCallback(() => {
    console.log("Increment Inside");
    setCount((prev) => prev + 1);
  }, []);
  const Decrement = useCallback(() => {
    console.log("inside decrement");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h1>Count:{count}</h1>
      <Button onClick={Increment}>Increment</Button>
      <Button onClick={Decrement}>Decrement</Button>
    </div>
  );
}
