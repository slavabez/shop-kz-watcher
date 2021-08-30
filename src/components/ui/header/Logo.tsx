import { Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo(props) {
  return (
    <NextLink href="/">
      <Box {...props}>
        <Text fontSize="xl" fontWeight="bold">
          watcher.kz
        </Text>
      </Box>
    </NextLink>
  );
}
