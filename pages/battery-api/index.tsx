import { NextPage } from "next"
import { inContainerWithNav } from "../../layouts/container-with-nav"
import { Box } from "@chakra-ui/react"
import {
  Code,
  Content,
  Description,
  Docs,
  SubTitle,
  Title,
} from "../../components/Markdown"
import { BatteryApi } from "./_usage"

const mdnSrc =
  "http://developer.mozilla.org/en-US/docs/Web/API/Background_Fetch_API"

const BackgroundPage: NextPage = () => {
  return (
    <Content>
      <Title>Battery Api</Title>
      <Description>
        The Battery Status API, more often referred to as the Battery API,
        provides information about the system's battery charge level and lets
        you be notified by events that are sent when the battery level or
        charging status change. This can be used to adjust your app's resource
        usage to reduce battery drain when the battery is low, or to save
        changes before the battery runs out in order to prevent data loss.
      </Description>
      <Docs>
        {[
          {
            path: "https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API",
            source: "MDN",
          },
        ]}
      </Docs>

      <SubTitle>Example Code</SubTitle>
      <Code></Code>
      <BatteryApi />
    </Content>
  )
}

export default inContainerWithNav(BackgroundPage)
