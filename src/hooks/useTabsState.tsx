import { useState } from 'react'
export const useTabsState = () => {
  const [tabIsActive, setIsActive] = useState<number>(0)
  const activateTabHandler = (id: number) => {
    setIsActive(id)
  }
  return { tabIsActive, activateTabHandler }
}
