import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "@src/components/ui/header/MenuItem";

interface IMenuLinksProps {
  isOpen: boolean;
}

function MenuLinks({ isOpen }: IMenuLinksProps) {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem href="/">Главная</MenuItem>
        <MenuItem href="/products">Товары</MenuItem>
        <MenuItem href="/profile">Профиль</MenuItem>
      </Stack>
    </Box>
  );
}

export default MenuLinks;
