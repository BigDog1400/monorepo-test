import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/button";

const overrides = {
  // Other foundational style overrides go here
  components: {
    Button: buttonTheme,
    // Other components go here
  },
};

export const customTheme = extendTheme(overrides);
