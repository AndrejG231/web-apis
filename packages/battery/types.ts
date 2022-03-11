export type BatteryEvent = {
  target: BatteryInstance
}

export type BatteryEventHandler = {
  (event: BatteryEvent): unknown
}

export type BatteryStatus = {
  readonly charging: boolean
  readonly chargingTime: number
  readonly dischargingTime: number
  readonly level: number
}

export type BatteryInstance = {
  onchargingchange: any
  onchargingtimechange: any
  ondischargingtimechange: any
  onlevelchange: any
  addEventListener: BatteryEventHandler
} & BatteryStatus

type SuccessInstance = {
  battery: BatteryInstance
}
type ErrorInstance = {
  battery: null
}
type Supported = {
  isSupported: true
}
type NotSupported = {
  isSupported: false
}


export type IntializedBattery = | (Supported & SuccessInstance) | (NotSupported & ErrorInstance)

export type BatteryInfoHookResult = ({
  isSupported: false
} & { [Stats in keyof BatteryStatus]: null }) | {
  isSupported: 
}
