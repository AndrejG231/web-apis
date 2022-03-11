import { BatteryInstance, IntializedBattery } from "./types"

const initialize = async (): Promise<IntializedBattery> => {
  //@ts-ignore
  const instance: BatteryInstance = await navigator.getBattery()

  if (
    instance.hasOwnProperty("charging") &&
    instance.hasOwnProperty("chargingTime") &&
    instance.hasOwnProperty("dischargingTime") &&
    instance.hasOwnProperty("level")
  ) {
    return { supported: true, battery: instance }
  }

  return { supported: false, battery: null }
}

export { initialize }
