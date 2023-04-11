// DEPENDENCIES
import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
// REACT PROPS
import { FAQProps } from '../props/FAQ'
const FAQ: React.FC<FAQProps> = (props) => {
  const [ansIsVisible, setAnsIsVisible] = useState<boolean>()
  const ansHandler = () => {
    setAnsIsVisible((prev) => !prev)
  }
  return (
    <li>
      <div onClick={ansHandler} className={props.classNameFAQ}>
        <p>{props.faq}</p>
        <div>{ansIsVisible ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
      </div>
      {ansIsVisible && (
        <div className={props.classNameANS}>
          <p>{props.ans}</p>
        </div>
      )}
    </li>
  )
}
export default FAQ
