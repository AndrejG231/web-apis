import { NextPage } from "next"
import { inContainerWithNav } from "../../layouts/container-with-nav"
import { Box, ListItem, UnorderedList } from "@chakra-ui/react"
import {
  Code,
  Content,
  Description,
  Docs,
  Space,
  SubTitle,
  Title,
} from "../../components/Markdown"
import { BatteryInfo1, BatteryInfo2, BatteryInfo3 } from "./_usage"
import {
  batteryEventHandlerInterface,
  batteryEventListener,
  batteryInstanceInterface,
  useBatteryHook,
  useBatteryHookSnippet,
  useBatteryInfo1,
  useBatteryInfo3,
  useBatteryInfoHook,
} from "./_snippets"
import { BatteryStatus } from "../../packages/battery/types"

const MDN_DOCS = {
  path: "https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API",
  source: "MDN",
}

const EVENTS: (keyof BatteryStatus)[] = [
  "chargingTime",
  "charging",
  "dischargingTime",
  "level",
]

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
      <Docs>{[MDN_DOCS]}</Docs>
      <Space>10px</Space>
      {/* Use battery hook */}
      <SubTitle>useBattery hook</SubTitle>
      <Description>Returns battery instance to your component.</Description>
      <Code>{useBatteryHookSnippet}</Code>
      <Space>20px</Space>
      <Box background={"blue.100"} p={5}>
        <BatteryInfo1 />
      </Box>
      <Space>10px</Space>
      <Space>20px</Space>

      {/* Use battery info hook */}
      <SubTitle>useBatteryInfo hook</SubTitle>
      <Description>
        If you do not need whole battery instance, you can make things simpler
        with accessing battery info directly.
      </Description>
      <Code>{useBatteryInfo1}</Code>
      <Space>20px</Space>
      <Box background={"blue.100"} p={5}>
        <BatteryInfo2 />
      </Box>
      <Space>10px</Space>
      {/* Use battery info hook with subscribe */}
      <SubTitle />
      <Space>10px</Space>
      <Description>
        useBatteryInfo hook takes also optional subscribe parameters, which will
        automatically update values when specified battery status changes.
      </Description>
      <Code>{useBatteryInfo3}</Code>
      <Space>20px</Space>
      <Box background={"blue.100"} p={5}>
        <BatteryInfo3 />
      </Box>
      <Space>10px</Space>
      <SubTitle>Supported events</SubTitle>
      <UnorderedList>
        {EVENTS.map((event) => (
          <ListItem key={event}>{event}</ListItem>
        ))}
      </UnorderedList>
      <Space>10px</Space>
      <Title>Interfaces</Title>
      <SubTitle>useBattery hook</SubTitle>
      <Code>{useBatteryHook}</Code>
      <SubTitle>useBatteryInfo hook</SubTitle>
      <Code>{useBatteryInfoHook}</Code>
      <SubTitle>Battery instance</SubTitle>
      <Code>{batteryInstanceInterface}</Code>
      <SubTitle>Battery event listener</SubTitle>
      <Code>{batteryEventListener}</Code>
      <SubTitle>Battery event handler</SubTitle>
      <Code>{`(event: BatteryEvent) => unknown`}</Code>
      <SubTitle>Battery event types</SubTitle>
      <Code>
        chargingchange | chargingtimechange | dischargingtimechange |
        levelchange
      </Code>
      <SubTitle>Battery event</SubTitle>
      <Code>{batteryEventHandlerInterface}</Code>
      <Space>40px</Space>
    </Content>
  )
}

export default inContainerWithNav(BackgroundPage)
