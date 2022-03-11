import { Text, Button, VStack, Tooltip } from "@chakra-ui/react"
import { useCallback, useEffect, useRef, useState } from "react"

const useBatteryInfo = () => {
  const [batteryState, setBatteryState] = useState({
    charging: null,
    level: null,
    chargingtime: null,
    dischargingtime: null
  })

  const handleChange = (event) => {
    const type = event.type.replace("change", "")
    const value = event.target[type]

    setBatteryState((state) => ({...state, [type]: value}))
  }

  const initBattery = async () => {
    const instance = await navigator.getBattery()
    if(!instance) return 

    instance.addEventListener("chargingchange", handleChange)
    instance.addEventListener("levelchange", handleChange)
    instance.addEventListener("chargingtimechange", handleChange)
    instance.addEventListener("dischargingtimechange", handleChange)

  }

  
}

// React component showing battery status
const BatteryApi = () => {



  useEffect(() => {
      initBattery()
    }, [])

  return (
    <VStack>
      <Text>Charging: {charging.toString()}</Text>
      <Text>Battery level: {level}</Text>
      <Text>Charging time: {chargingTime}</Text>
      <Text>Discharging time: {dischargingTime}</Text>
      <Tooltip label="Log battery object into console.">
        <Button onClick={() => console.log(battery)} colorScheme="teal">
          Dump battery object
        </Button>
      </Tooltip>
    </VStack>
  )
}

export { BatteryApi }
