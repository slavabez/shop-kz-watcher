import { Flex, useDisclosure } from "@chakra-ui/react";
import Logo from "@src/components/ui/header/Logo";
import MenuToggle from "@src/components/ui/header/MenuToggle";
import MenuLinks from "@src/components/ui/header/MenuLinks";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={[2, 4, 4, 4]}
      bg={["blue.700", "blue.700", "blue.700", "blue.700"]}
      color={"white"}
    >
      <Logo color={["white", "white", "primary.500", "primary.500"]} />
      <MenuToggle toggle={onToggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </Flex>
  );
}
