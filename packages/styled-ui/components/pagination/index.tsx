import React from "react";
import { Button, Flex } from "@chakra-ui/react";

export function Pagination() {
  const PagButton = (props: any) => {
    const activeStyle = {
      bg: "gray.600",
      _dark: {
        bg: "gray.500",
      },
      color: "white",
    };
    return (
      <Button
        mx={1}
        px={4}
        py={2}
        rounded="md"
        bg="white"
        color="gray.700"
        _dark={{
          color: "white",
          bg: "gray.800",
        }}
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && "not-allowed"}
        {...(props.active && activeStyle)}
      >
        {props.children}
      </Button>
    );
  };

  return (
    <Flex>
      <PagButton disabled>previous</PagButton>
      <PagButton active>1</PagButton>
      <PagButton>2</PagButton>
      <PagButton>3</PagButton>
      <PagButton>4</PagButton>
      <PagButton>5</PagButton>
      <PagButton>Next</PagButton>
    </Flex>
  );
}
