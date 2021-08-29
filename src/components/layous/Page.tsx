import { Flex } from "@chakra-ui/react";
import Footer from "@src/components/sections/Footer";
import Header from "@src/components/sections/Header";

export default function PageLayout({ children }) {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}
