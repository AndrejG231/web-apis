import { useCallback, useEffect } from "react"

const DownloadPage = () => {
  const fetch = useCallback(async () => {
    const sW = await navigator.serviceWorker.ready
    console.log(sW)
  }, [])
  useEffect(() => {
    fetch()
  }, [])

  return <div>Hello</div>
}

export { DownloadPage }
