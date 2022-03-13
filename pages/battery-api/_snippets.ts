export const useBatteryHookSnippet = `const BatteryInfo = () => {
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
}`

export const useBatteryInfo1 = `const BatteryInfo = () => {
  const [battery, update] = useBatteryInfo()

  if (battery.loading) return <Text>Loading...</Text>
  if (!battery.supported) return <Text>Not supported</Text>

  return (
    <VStack>
      <Text>Battery level: {battery.level}</Text>
      <Button onClick={update}>Refresh</Button>
    </VStack>
  )
}`

export const useBatteryInfo3 = `const BatteryInfo = () => {
  const [{ charging, level, loading, supported }] = useBatteryInfo(
    "charging",
    "level"
  )

  if (loading) return <Text>Loading...</Text>
  if (!supported) return <Text>Not supported</Text>

  return (
    <VStack>
      <Text>{charging ? "Charging." : "Not charging."}</Text>
      <Text>Battery level: {level}</Text>
    </VStack>
  )
}`

export const batteryInstanceInterface = `{
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number
  onchargingchange: BatteryEventHandler
  onchargingtimechange: BatteryEventHandler
  ondischargingtimechange: BatteryEventHandler
  onlevelchange: BatteryEventHandler
  addEventListener: BatteryEventlistener
  removeEventListener: BatteryEventlistener
}
`

export const batteryEventHandlerInterface = `{
  isTrusted: boolean
  bubbles: boolean
  cancelBubble: boolean
  cancelable: boolean
  composed: boolean
  currentTarget: BatteryInstance
  defaultPrevented: boolean
  eventPhase: number
  returnValue: boolean
  srcElement: BatteryInstance
  target: BatteryInstance
  timeStamp: number
  type: BatteryEventTypes
}
`

export const batteryEventListener = `(
  event: BatteryEventTypes,
  handler: BatteryEventHandler
) => void`

export const useBatteryHook = `() => {
  battery: BatteryInstance | null,
  supported: boolean
  loading: boolean
}`

export const useBatteryInfoHook = `(
  ...params: BatteryEvent[]
) => [
  {
    charging: boolean
    chargingTime: number
    dischargingTime: number
    level: number
    supported: boolean
    loading: boolean
  },
  update: () => void
]
`
