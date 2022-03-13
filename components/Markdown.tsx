import {
  Box,
  Button,
  Center,
  Text,
  Tooltip,
  Code as ChakraCode,
} from "@chakra-ui/react"
import { FC } from "react"

export const Content: FC = ({ children }) => (
  <Box as="main" mt={10}>
    {children}
  </Box>
)

export const Title: FC = ({ children }) => (
  <Text borderBottom={"1px solid blue"} fontSize="5xl" my="10px">
    {children}
  </Text>
)

export const SubTitle: FC = ({ children }) => (
  <Text fontSize="3xl" borderBottom={"2px solid blue"}>
    {children}
  </Text>
)

export const Description: FC = ({ children }) => (
  <Text fontSize={"xl"}>{children}</Text>
)

export const Docs = ({
  children,
}: {
  children: { source: string; path: string }[]
}) => (
  <Box w="100%" mt={10}>
    <Text fontSize={"2xl"} mb={1}>
      Official Documentations:
    </Text>
    {children.map(({ source, path }) => (
      <Tooltip key={source + path} label={`Open documentation.`}>
        <a href={path} target="_blank">
          <Button>{source}</Button>
        </a>
      </Tooltip>
    ))}
  </Box>
)

export const Code: FC = ({ children }) => (
  <Center>
    <ChakraCode mt={10} whiteSpace="pre" padding="20px">
      {children}
    </ChakraCode>
  </Center>
)

export const Space = ({ children }: { children: number | string }) => (
  <Box h={children} />
)
