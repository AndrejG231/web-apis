import { BatteryInstance, IntializedBattery } from "./types"

const initialize = async (): Promise<IntializedBattery> => {
  //@ts-ignore
  const instance: BatteryInstance = await navigator.getBattery()

  console.log(instance.hasOwnProperty("charging"))
  console.log(instance)

  if (
    typeof instance.charging === "boolean" &&
    typeof instance.chargingTime === "number" &&
    typeof instance.dischargingTime === "number" &&
    typeof instance.level === "number"
  ) {
    return { supported: true, battery: instance }
  }

  return { supported: false, battery: null }
}

export { initialize }
