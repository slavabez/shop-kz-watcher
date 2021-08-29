import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface IMenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

function MenuToggle({ toggle, isOpen }: IMenuToggleProps) {
  return (
    <Box display={{ base: "block", md: "none" }} fontSize="2rem" onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
}

export default MenuToggle;
