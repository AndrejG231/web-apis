import { Text, Button, VStack, Tooltip } from "@chakra-ui/react"
import { useCallback, useEffect, useRef, useState } from "react"
import { Code } from "../../components/Markdown"

// React component showing battery status
const BatteryApi = () => {
  const battery = useRef<any>(null)

  const [charging, setCharging] = useState(false)
  const [level, setLevel] = useState(false)
  const [chargingTime, setChargingTime] = useState(0)
  const [dischargingTime, setDischarginTime] = useState(0)

  const updateChargeInfo = useCallback(() => {
    battery.current && setCharging(battery.current.charging)
  }, [battery])
  const updateLevelInfo = useCallback(() => {
    battery.current && setLevel(battery.current.level)
  }, [battery])
  const updateChargingInfo = useCallback(() => {
    battery.current && setChargingTime(battery.current.chargingTime)
  }, [battery])

  const updateDischargingInfo = useCallback(() => {
    battery.current && setDischarginTime(battery.current.dischargingTime)
  }, [battery])

  const updateAllBatteryInfo = () => {
    updateChargeInfo()
    updateLevelInfo()
    updateChargingInfo()
    updateDischargingInfo()
  }

  const initBattery = useCallback(async () => {
    const instance = await navigator.getBattery()
    if(!instance) return 

    battery.addEventListener("chargingchange", () => {
      updateChargeInfo()
    })
    battery.addEventListener("levelchange", () => {
      updateLevelInfo()
    })
    battery.addEventListener("chargingtimechange", () => {
      updateChargingInfo()
    })
    battery.addEventListener("dischargingtimechange", () => {
      updateDischargingInfo()
    })

    updateAllBatteryInfo()
  }, [battery])

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
