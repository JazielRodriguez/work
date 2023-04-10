import React from 'react'
import styles from '../styles/ShowFaq.module.css'
import { ImCross } from 'react-icons/im'
import { ShowFaqProps } from '../props/ShowFaq'
import { faqs } from '../utils/faqs'
import FAQ from './FAQ'
import { IconContext } from 'react-icons'
import Background from './Background'
const ShowFaq: React.FC<ShowFaqProps> = (props) => { 
  return (
    <IconContext.Provider value={{ size: '2rem' }}>
      <Background>
        <div className={styles.modal}>
          <div className={styles['modal-nav']}>
            <h2>FAQ{"'"}s type</h2>
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
