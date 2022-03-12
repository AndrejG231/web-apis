import { Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useBattery } from "../../packages/battery/useBattery"

const BatteryInfo = () => {
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

export { BatteryInfo }
