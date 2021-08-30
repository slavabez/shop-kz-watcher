import React from "react";
import NextLink from "next/link";
import { Box, chakra, Stack, useColorModeValue } from "@chakra-ui/react";

const HomeHero = () => {
  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box textAlign="center" w={{ base: "full", md: 11 / 12, xl: 8 / 12 }} mx="auto">
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  watcher.kz - следи за ценами
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.700"
                lineHeight="base"
              >
                Добавляй товары и следи за изменениями цен
              </chakra.p>
              <Stack
                direction={{ base: "column", sm: "column", md: "row" }}
                mb={{ base: 4, md: 8 }}
                spacing={{ base: 4, md: 2 }}
                justifyContent="center"
              >
                <Box rounded="full" shadow="md">
                  <NextLink href="/profile">
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="solid 1px transparent"
                      fontSize={{ base: "md", md: "lg" }}
                      rounded="md"
                      color="white"
                      bg="blue.600"
                      _hover={{ bg: "blue.700" }}
                      px={{ base: 8, md: 10 }}
                      py={{ base: 3, md: 4 }}
                      cursor="pointer"
                    >
                      Создать профиль
                    </chakra.a>
                  </NextLink>
                </Box>
                <Box mt={[3, 0]} ml={[null, 3]}>
                  <chakra.a
                    href="#how-it-works"
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="blue.700"
                    bg="blue.100"
                    _hover={{ bg: "blue.200" }}
                    cursor="pointer"
                  >
                    Как работает
                  </chakra.a>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHero;
