import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { add, multiply } from "math-helpers";
import { Card, Pagination } from "styled-ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <ButtonGroup>
        <Button onClick={() => alert(add(1, 2))}>Sumar 1 + 2</Button>
        <Button onClick={() => alert(multiply(1, 2))}>Multiplicar 1 * 2</Button>
        <Button variant={"brandPrimary"}>Chakra Button</Button>
      </ButtonGroup>
      <Card />
      <Box
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        w="fit-content"
        p={5}
        alignItems="center"
        justifyContent="center"
      >
        <Pagination />
      </Box>
    </div>
  );
}
