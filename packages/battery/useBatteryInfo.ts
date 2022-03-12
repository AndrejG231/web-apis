import { useLayoutEffect, useRef, useState } from "react"
import { initialize } from "./initialize"
import {
  BatteryInfoHookResult,
  BatteryInstance,
  BatteryStatus,
  IntializedBatteryInfo,
} from "./types"

/**
 * Allows to use battery info in components, subscribe to specific changes
 * @param { String[] } subscribe for specific state changes
 * @returns { [Object, Function] } battery info, force update funciton
 */
const useBatteryInfo = (
  ...subscribe: (keyof BatteryStatus)[]
): BatteryInfoHookResult => {
  const instanceRef = useRef<BatteryInstance | null>(null)

  const [loading, setLoading] = useState(true)

  const [batteryInfo, setBatteryInfo] = useState<IntializedBatteryInfo>({
    charging: null,
    chargingTime: null,
    dischargingTime: null,
    level: null,
    supported: false,
  })

  const updateBatteryInfo = () => {
    if (!instanceRef.current) return
    const { charging, chargingTime, dischargingTime, level } =
      instanceRef.current

    setBatteryInfo((currentInfo) => ({
      ...currentInfo,
      charging,
      chargingTime,
      dischargingTime,
      level,
      supported: true,
    }))
  }

  useLayoutEffect(() => {
    initialize().then(({ supported, battery }) => {
      // Assign to ref if supported
      if (supported) instanceRef.current = battery

      updateBatteryInfo()
      setLoading(false)

      // Subscribe to specific changes
      subscribe.forEach((event) => {
        instanceRef.current?.addEventListener(
          `${event}change`,
          updateBatteryInfo
        )
      })
    })
    return () => {
      // Clear event listeners
      subscribe.forEach((event) => {
        instanceRef.current?.removeEventListener(
          `${event}change`,
          updateBatteryInfo
        )
      })
    }
  }, [])

  return [{ ...batteryInfo, loading }, updateBatteryInfo]
}

export { useBatteryInfo }
