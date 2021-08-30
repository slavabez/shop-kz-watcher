import NextLink from "next/link";
import { Box, Container, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("blue.700", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
      w="100%"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <NextLink href="/">
            <Link>Главная</Link>
          </NextLink>
          <NextLink href="/profile">
            <Link>Профиль</Link>
          </NextLink>
          <NextLink href="/products">
            <Link>Товары</Link>
          </NextLink>
          <Link href={"#"}>Контакты</Link>
        </Stack>
        <Text>© 2021 Watcher.kz</Text>
      </Container>
    </Box>
  );
}
