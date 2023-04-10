import React, { useState } from 'react'
import Header from './components/Header'
import ShowFaq from './components/ShowFaq'
import ManualDial from './components/ManualDial'
const App: React.FC = () => {
  const [faqIsVisible, setFaqIsVisible] = useState<boolean>(false)
  const [manualDialIsVisible, setManualDialIsVisible] = useState<boolean>(false)
  const faqHandler = () => {
    setFaqIsVisible((prev) => !prev)
  }
  const manualDialHandler = () => {
    setManualDialIsVisible((prev) => !prev)
  }
  return (
    <div>
      <Header
        onSetFaqVisible={faqHandler}
        onSetManualDialVisible={manualDialHandler}
      />
      {faqIsVisible && <ShowFaq onSetFaqVisible={faqHandler} />}
      {manualDialIsVisible && (
        <ManualDial onSetManualDialVisible={manualDialHandler} />
      )}
    </div>
  )
}
export default App
