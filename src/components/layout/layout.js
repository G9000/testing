import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import Sidebar from "./sidebar"
import HeaderMobile from "./headerMobile"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <Box bg="black.700">
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <Sidebar />
        <HeaderMobile />
        <Flex minH="100vh" w="100%" flexDirection="column" overflowX="hidden">
          <Box margin="0 auto" w="100%" flexGrow={1}>
            <Header />
            {children}
          </Box>
          <Footer />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Layout
