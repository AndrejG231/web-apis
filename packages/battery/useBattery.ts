import { useLayoutEffect, useState } from "react"
import { initialize } from "./initialize"
import { BatteryInstanceHookResult, IntializedBattery } from "./types"

/**
 * Hook loads battery Api
 * @returns { supported: boolean, loading: boolean, battery: BatteryInstance }
 */

const useBattery = (): BatteryInstanceHookResult => {
  const [batteryInfo, setBatteryInfo] = useState<BatteryInstanceHookResult>({
    supported: false,
    battery: null,
    loading: true,
  })

  useLayoutEffect(() => {
    initialize().then(({ supported, battery }) => {
      if (supported) {
        setBatteryInfo({ supported, battery, loading: false })
      } else {
        setBatteryInfo((current) => ({ ...current, loading: false }))
      }
    })
  }, [setBatteryInfo])

  return batteryInfo
}

export { useBattery }
