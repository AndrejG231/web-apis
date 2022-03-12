import { Button, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useBattery } from "../../packages/battery/useBattery"
import { useBatteryInfo } from "../../packages/battery/useBatteryInfo"

const BatteryInfo1 = () => {
  const [level, setLevel] = useState(0)
  const { loading, supported, battery } = useBattery()

  useEffect(() => {
    if (!battery) return
    battery.onlevelchange = (event) => setLevel(event.target.level)

    // Event does not fire, unless level change, so you need to save data to state
    setLevel(battery.level)
  }, [battery])

  if (loading) return <Text>Loading...</Text>
  if (!supported) return <Text>Not supported</Text>

  return (
    <VStack>
      <Text>Battery level: {level}</Text>
    </VStack>
  )
}

const BatteryInfo2 = () => {
  const [battery, update] = useBatteryInfo()

  if (battery.loading) return <Text>Loading...</Text>
  if (!battery.supported) return <Text>Not supported</Text>

  return (
    <VStack>
      <Text>Battery level: {battery.level}</Text>
      <Button onClick={update}>Refresh</Button>
    </VStack>
  )
}

const BatteryInfo3 = () => {
  const [{ charging, level, loading, supported }, update] = useBatteryInfo(
    "charging",
    "level"
  )

  if (loading) return <Text>Loading...</Text>
  if (!supported) return <Text>Not supported</Text>

  return (
    <VStack>
      <Text>{charging ? "Charging." : "Not charging."}</Text>
      <Text>Battery level: {level}</Text>
    </VStack>
  )
}

export { BatteryInfo1, BatteryInfo2, BatteryInfo3 }
