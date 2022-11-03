import { useState } from "react";
import { add } from "math-helpers";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Card, Pagination } from "styled-ui";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React app</h1>
      <ButtonGroup>
        <Button onClick={() => alert(add(1, 2))}>Sumar 1 + 2</Button>
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

export default App;
