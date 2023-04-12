import { useState } from 'react'
export const useAppState = () => {
  const [faqIsVisible, setFaqIsVisible] = useState<boolean>(false)
  const [manualDialIsVisible, setManualDialIsVisible] = useState<boolean>(false)
  const [qdFormIsVisible, setQdFormIsVisible] = useState<boolean>(false)
  const [appIsActive, setAppIsActive] = useState<boolean>(true)
  const faqHandler = () => {
    setFaqIsVisible((prev) => !prev)
  }
  const manualDialHandler = () => {
    setManualDialIsVisible((prev) => !prev)
  }
  const qdFormHandler = () => {
    setQdFormIsVisible((prev) => !prev)
  }
  const appIsActiveHandler = () => {
    setAppIsActive((prev) => !prev)
  }
  return {
    faqIsVisible,
    manualDialIsVisible,
    qdFormIsVisible,
    faqHandler,
    manualDialHandler,
    qdFormHandler,
    appIsActive,
    appIsActiveHandler
  }
}
