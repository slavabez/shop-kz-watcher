import React from "react";
import NextLink from "next/link";
import { Box, chakra, Flex, Heading, Link, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

export default function HowItWorks() {
  const Feature = (props) => {
    return (
      <Box>
        <chakra.h3 mb={5} fontSize="xl" lineHeight="shorter" fontWeight="bold" color="gray.900">
          {props.title}
        </chakra.h3>
        <chakra.p lineHeight="tall" color={useColorModeValue("gray.600", "gray.400")}>
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <Flex
      id="how-it-works"
      p={8}
      w="auto"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading>Как это работает</Heading>
      <chakra.hr borderBottomColor="blue.700" borderBottomWidth={3} w="20%" mt={5} />
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={8}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Feature title="1. Заходите на страницу товара">
          На данный момент поддерживаются 2 онлайн магазина:{" "}
          <Link href="https://shop.kz/" isExternal color="blue.700" fontWeight="bold">
            Белый Ветер
          </Link>{" "}
          и{" "}
          <Link href="https://kz.wildberries.ru/" isExternal color="blue.700" fontWeight="bold">
            Wildberries
          </Link>
          . Заходите на страницу товара и скопируйте ссылку в верхней строке браузера.
        </Feature>

        <Feature title="2. Скопируйте ссылку на страницу">
          Ссылка должна быть на страницу самого товара. Примеры ссылок: Wildberries
          (https://kz.wildberries.ru/catalog/4475177/detail.aspx), Белый ветер
          (https://shop.kz/offer/videokarta-pci-e-12gb-zotac-rtx-3080-ti-amp-holo-geforce-rtx3080ti/)
        </Feature>

        <Feature title="3. Добавьте ссылку чтобы начать мониторинг">
          Переходите в раздел{" "}
          <NextLink href="/products">
            <Link color="blue.700" fontWeight="bold">
              товары
            </Link>
          </NextLink>
          , вставьте ссылку и нажмите добавить. Чтобы добавить товар необходимо создать профиль.
        </Feature>
        <Feature title="4. Будет создана страница для просмотра истории цен">
          На этой странице вы сможете смотреть историю изменения цен для этого товара. Добавьте это
          страницу в закладки.{" "}
          <chakra.span fontWeight="bold">На данный момент цены проверяются раз в час.</chakra.span>
        </Feature>
      </SimpleGrid>
    </Flex>
  );
}
