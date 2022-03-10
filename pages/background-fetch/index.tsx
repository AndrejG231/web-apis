import { NextPage } from "next"
import { inContainerWithNav } from "../../layouts/container-with-nav"
import { Box, Button, Center, Code, Text, Tooltip } from "@chakra-ui/react"
import { DownloadPage } from "./_usage"

const mdnSrc =
  "http://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API"

const BackgroundPage: NextPage = () => {
  return (
    <Box as="main" mt={10}>
      {/* Title */}
      <Text fontSize="5xl">Background Fetch Api</Text>

      {/* Description */}
      <Text fontSize={"xl"}>
        The Background Fetch API provides a method for managing downloads that
        may take a significant amount of time such as movies, audio files, and
        software.
      </Text>

      {/* Documentation */}
      <Box w="100%" mt={10}>
        <Text fontSize={"2xl"} mb={1}>
          Official Documentations:
        </Text>
        <Tooltip label={`Open documentation.`}>
          <a href={mdnSrc} target="_blank">
            <Button>MDN</Button>
          </a>
        </Tooltip>
      </Box>

      <Text fontSize={"2xl"} mt={10}>
        React - example usage:
      </Text>
      <Center>
        <Code mt={10} whiteSpace="pre" padding="20px"></Code>
      </Center>
      <DownloadPage />
    </Box>
  )
}

export default inContainerWithNav(BackgroundPage)
