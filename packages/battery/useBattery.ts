import { useLayoutEffect, useState } from "react"
import { initialize } from "./initialize"
import { IntializedBattery } from "./types"

/**
 * Hook loads battery Api
 * @returns { Object(Intialized) {isSupported: boolean, battery: BatteryInstance}}
 */

const useBattery = (): IntializedBattery => {
  const [batteryInfo, setBatteryInfo] = useState<IntializedBattery>({
    isSupported: false,
    battery: null,
  })

  useLayoutEffect(() => {
    initialize().then(({ isSupported, battery }) => {
      if (isSupported) {
        setBatteryInfo({ isSupported, battery })
      }
    })
  }, [setBatteryInfo])

  return batteryInfo
}

export { useBattery }
