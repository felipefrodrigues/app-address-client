import { useEffect, useState } from "react"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  const updateMatch = (e) => {
    setIsMobile(e.matches)
  }

  useEffect(() => {
    try {
      const media = window.matchMedia("(max-width: 1024px)")
      setIsMobile(media.matches)
      media.addListener(updateMatch)
    } catch (e) {}
    return () => {
      try {
        window.matchMedia("(max-width: 1024px)").removeListener(updateMatch)
      } catch (e) {}
    }
  }, [])

  return isMobile
}

export default useIsMobile
