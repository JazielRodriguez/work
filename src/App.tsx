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
    qdFormIsVisible,
    appIsActive,
    appIsActiveHandler
  } = useAppState()

  const { tabIsActive, activateTabHandler } = useTabsState()

  return (
    <div>
      <Header
        onSetAppActive={appIsActiveHandler}
        onSetFaqVisible={faqHandler}
        onSetManualDialVisible={manualDialHandler}
        onSetQdFormVisible={qdFormHandler}
      />
      {appIsActive && <MainForm />}
      <Tabs onActivateTab={activateTabHandler} tabIsActive={tabIsActive} />
      {appIsActive && tabIsActive === 0 && <LastCalls />}
      {appIsActive && tabIsActive === 1 && <Enquiries />}
      {appIsActive && tabIsActive === 2 && <Emails />}
      {appIsActive && tabIsActive === 3 && <SMS />}
      {appIsActive && tabIsActive === 4 && <Comments />}
      {appIsActive && tabIsActive === 5 && <AssignLeads />}
      {appIsActive && tabIsActive === 6 && <Documents />}
      {appIsActive && tabIsActive === 7 && <PersonalInfo />}
      {appIsActive && tabIsActive === 8 && <ReminderDetails />}
      {appIsActive && tabIsActive === 9 && <ProductInfo />}
      {appIsActive && tabIsActive === 10 && <SupplierInfo />}
      {appIsActive && tabIsActive === 11 && <Reports />}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          padding: '2rem 0',
          width: 'fit-content',
          marginLeft: '5rem'
        }}
      >
        <p style={{ color: 'red', fontSize: '1.2rem' }}>Enquiry No:null</p>
        <button
          style={{
            padding: '1rem 1.5rem',
            color: '#000',
            border: 'none',
            backgroundColor: '#f5da45',
            fontSize: '1.2rem'
          }}
        >
          Update Lead
        </button>
      </div>

      {faqIsVisible && <ShowFaq onSetFaqVisible={faqHandler} />}
      {manualDialIsVisible && (
        <ManualDial onSetManualDialVisible={manualDialHandler} />
      )}
      {qdFormIsVisible && <QDForm onSetQdFormVisible={qdFormHandler} />}
    </div>
  )
}
export default App
