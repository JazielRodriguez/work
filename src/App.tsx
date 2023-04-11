// Dependencies
import React from 'react'
// Components
import Header from './components/Header'
import MainForm from './components/MainForm/MainForm'
import Tabs from './components/Tabs'
import ShowFaq from './components/ShowFaq'
import ManualDial from './components/ManualDial'
import QDForm from './components/QDForm/QDForm'
import LastCalls from './components/LastCalls'
import Enquiries from './components/Enquiries/Enquiries'
import Emails from './components/Emails/Emails'
import SMS from './components/SMS/SMS'
import Comments from './components/Comments/Comments'
import AssignLeads from './components/AssignLeads/AssignLeads'
import Documents from './components/Documents/Documents'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import ProductInfo from './components/ProductInfo/ProductInfo'
import SupplierInfo from './components/SupplierInfo/SupplierInfo'
import Reports from './components/Reports/Reports'
// Hooks
import { useAppState } from './hooks/useAppState'
import { useTabsState } from './hooks/useTabsState'
import ReminderDetails from './components/ReminderDetails'
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
      <MainForm />
      <Tabs onActivateTab={activateTabHandler} tabIsActive={tabIsActive} />
      {tabIsActive === 0 && <LastCalls />}
      {tabIsActive === 1 && <Enquiries />}
      {tabIsActive === 2 && <Emails />}
      {tabIsActive === 3 && <SMS />}
      {tabIsActive === 4 && <Comments />}
      {tabIsActive === 5 && <AssignLeads />}
      {tabIsActive === 6 && <Documents />}
      {tabIsActive === 7 && <PersonalInfo />}
      {tabIsActive === 8 && <ReminderDetails />}
      {tabIsActive === 9 && <ProductInfo />}
      {tabIsActive === 10 && <SupplierInfo />}
      {tabIsActive === 11 && <Reports />}

      {faqIsVisible && <ShowFaq onSetFaqVisible={faqHandler} />}
      {manualDialIsVisible && (
        <ManualDial onSetManualDialVisible={manualDialHandler} />
      )}
      {qdFormIsVisible && <QDForm onSetQdFormVisible={qdFormHandler} />}
    </div>
  )
}
export default App
