import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Navbar } from "../components/Navbar"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
