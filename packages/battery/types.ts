export type BatteryEvent = {
  target: BatteryInstance
}

export type BatteryEventHandler = (event: BatteryEvent) => unknown

export type BatteryStatus = {
  readonly charging: boolean
  readonly chargingTime: number
  readonly dischargingTime: number
  readonly level: number
}

export type BatteryEventTypes = `${keyof BatteryStatus}change`

export type BatteryEventlistener = (
  event: BatteryEventTypes,
  handler: BatteryEventHandler
) => void

export type BatteryInstance = {
  onchargingchange: BatteryEventHandler
  onchargingtimechange: BatteryEventHandler
  ondischargingtimechange: BatteryEventHandler
  onlevelchange: BatteryEventHandler
  addEventListener: BatteryEventlistener
  removeEventListener: BatteryEventlistener
} & BatteryStatus

type SuccessInstance = {
  battery: BatteryInstance
}
type ErrorInstance = {
  battery: null
}
type Supported = {
  supported: true
}
type NotSupported = {
  supported: false
}
type Loading = {
  loading: boolean
}

export type IntializedBattery =
  | (Supported & SuccessInstance)
  | (NotSupported & ErrorInstance)

export type IntializedBatteryInfo =
  | (Supported & BatteryStatus)
  | (NotSupported & { [K in keyof BatteryStatus]: null })

export type BatteryInstanceHookResult = Loading & IntializedBattery

export type BatteryInfoHookResult = [
  Loading & IntializedBatteryInfo,
  () => void
]
