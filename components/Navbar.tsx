import { Button } from "@chakra-ui/button"
import { useBoolean } from "@chakra-ui/hooks"
import { Box, Container, GridItem, SimpleGrid, Text } from "@chakra-ui/layout"
import Link from "next/link"
import { FC } from "react"
import { apis } from "../core/apis"
import { randomColor } from "../util/random-color"

type NavItemProps = {
  path: string
  name: string
  color: string
  onClick: () => void
}

const NavItem: FC<NavItemProps> = ({ path, name, color, onClick }) => {
  return (
    <GridItem>
      <Link href={path}>
        <Button
          w="200px"
          h="100px"
          background={color}
          borderRadius="10px"
          color="white"
          _hover={{ background: "white", color: "black" }}
          whiteSpace="break-spaces"
          onClick={onClick}
        >
          <Text align={"center"} fontWeight={700}>
            {name}
          </Text>
        </Button>
      </Link>
    </GridItem>
  )
}

const NavbarContent = ({ onItemClick }: { onItemClick: () => void }) => {
  return (
    <Container maxW="container.xl">
      <SimpleGrid w="100%" my={10} columns={[1, 2, 3, 4, 5]} gap={"10px"}>
        {Object.values(apis).map(
          (api) =>
            api.path !== "/un" && (
              <NavItem
                key={api.path}
                path={api.path}
                name={api.name}
                color={api.color}
                onClick={onItemClick}
              />
            )
        )}
      </SimpleGrid>
    </Container>
  )
}

type Props = {
  preserveOpened?: boolean
}

const Navbar: FC<Props> = ({ preserveOpened = false }) => {
  const [isMenuOpen, setIsOpenMenu] = useBoolean(preserveOpened)

  return (
    <>
      {/* Show toggle button */}
      {preserveOpened || (
        <Button
          colorScheme={"teal"}
          position={"absolute"}
          top="10px"
          right="15px"
          onClick={setIsOpenMenu.toggle}
          zIndex={2}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </Button>
      )}
      {isMenuOpen && (
        <Box
          background={"teal.100"}
          h="100vh"
          w="100%"
          position={"fixed"}
          top={0}
          left={0}
          zIndex={1}
          overflowY="auto"
        >
          {/* Show menu */}
          <NavbarContent onItemClick={setIsOpenMenu.off} />
        </Box>
      )}
    </>
  )
}

export { Navbar }
