import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { add } from "math-helpers";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <ButtonGroup>
        <Button onClick={() => alert(add(1, 2))}>Sumar 1 + 2</Button>
        <Button variant={"brandPrimary"}>Chakra Button</Button>
      </ButtonGroup>
    </div>
  );
}
