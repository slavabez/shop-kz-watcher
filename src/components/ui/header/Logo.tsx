import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import LogoGraphic from "@src/components/ui/header/LogoGraphic";

export default function Logo(props) {
  return (
    <NextLink href="/">
      <Box {...props}>
        <LogoGraphic color="white" withText />
      </Box>
    </NextLink>
  );
}
