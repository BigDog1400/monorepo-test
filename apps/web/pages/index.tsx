import { Button } from "@bigdog1400/ui";
import { add } from "math-helpers";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <button onClick={() => alert(add(1, 2))}>Sumar 1 + 2</button>
      <Button />
    </div>
  );
}
