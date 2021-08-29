import React, { ReactNode } from "react";
import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface IMenuItemProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}

function MenuItem({ children, href, isExternal }: IMenuItemProps) {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <NextLink href={href} passHref>
      <Link isExternal={isExternal} fontWeight={isActive ? "bold" : "auto"}>
        <Text display="block">{children}</Text>
      </Link>
    </NextLink>
  );
}

export default MenuItem;
