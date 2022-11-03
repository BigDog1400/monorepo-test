import React from "react";
import { Link, chakra, Box, Image } from "@chakra-ui/react";

export function Card() {
  return (
    <Box
      w="xs"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      mx="auto"
    >
      <Image
        w="full"
        h={56}
        fit="cover"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />

      <Box py={5} textAlign="center">
        <Link
          display="block"
          fontSize="2xl"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
        >
          John Doe
        </Link>
        <chakra.span
          fontSize="sm"
          color="gray.700"
          _dark={{
            color: "gray.200",
          }}
        >
          Software Engineer
        </chakra.span>
      </Box>
    </Box>
  );
}
