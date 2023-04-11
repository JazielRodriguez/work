// DEPENDENCIES
import React from 'react'
import { ImCross } from 'react-icons/im'
import { IconContext } from 'react-icons'
// COMPONENTS
import Background from './Background'
import FAQ from './FAQ'
// REACT PROPS
import { ShowFaqProps } from '../props/ShowFaq'
// UTILITIES (FAKE DATA)
import { faqs } from '../utils/faqs'
// STYLES
import styles from '../styles/ShowFaq.module.css'
const ShowFaq: React.FC<ShowFaqProps> = (props) => {
  return (
    <IconContext.Provider value={{ size: '1.4rem' }}>
      <Background>
        <div className={styles.modal}>
          <div className={styles['modal-nav']}>
            <p>FAQ{"'"}s type</p>
            <div onClick={props.onSetFaqVisible} style={{ cursor: 'pointer' }}>
              <IconContext.Provider
                value={{ color: '#bbb5b5', size: '1.4rem' }}
              >
                <ImCross />
              </IconContext.Provider>
            </div>
          </div>
          <ul className={styles['faqs-list']}>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                faq={faq.faq}
                ans={faq.ans}
                classNameFAQ={styles.faq}
                classNameANS={styles.ans}
              />
            ))}
          </ul>
        </div>
      </Background>
    </IconContext.Provider>
  )
}
export default ShowFaq
