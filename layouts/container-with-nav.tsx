import { Container } from "@chakra-ui/react"
import { NextPage } from "next"
import { FC } from "react"
import { Navbar } from "../components/Navbar"

/**
 * Wraps component into container, adds navbar overlay
 */

export const inContainerWithNav = (Page: NextPage) => () =>
  (
    <Container maxW={"container.xl"}>
      <Navbar />
      <Page />
    </Container>
  )
