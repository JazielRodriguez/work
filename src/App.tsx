// Dependencies
import React from 'react'
// Components
import Header from './components/Header'
import Tabs from './components/Tabs'
import ShowFaq from './components/ShowFaq'
import ManualDial from './components/ManualDial'
import QDForm from './components/QDForm/QDForm'
import LastCalls from './components/LastCalls'
import Enquiries from './components/Enquiries/Enquiries'
import Emails from './components/Emails/Emails'
import SMS from './components/SMS/SMS'
// Hooks
import { useAppState } from './hooks/useAppState'
import { useTabsState } from './hooks/useTabsState'
const App: React.FC = () => {
  const {
    faqHandler,
    manualDialHandler,
    qdFormHandler,
    faqIsVisible,
    manualDialIsVisible,
    qdFormIsVisible
  } = useAppState()

  const { tabIsActive, activateTabHandler } = useTabsState()

  return (
    <div>
      <Header
        onSetFaqVisible={faqHandler}
        onSetManualDialVisible={manualDialHandler}
        onSetQdFormVisible={qdFormHandler}
      />

      <Tabs onActivateTab={activateTabHandler} tabIsActive={tabIsActive} />
      {tabIsActive === 0 && <LastCalls />}
      {tabIsActive === 1 && <Enquiries />}
      {tabIsActive === 2 && <Emails />}
      {tabIsActive === 3 && <SMS />}

      {faqIsVisible && <ShowFaq onSetFaqVisible={faqHandler} />}
      {manualDialIsVisible && (
        <ManualDial onSetManualDialVisible={manualDialHandler} />
      )}
      {qdFormIsVisible && <QDForm onSetQdFormVisible={qdFormHandler} />}
    </div>
  )
}
export default App
