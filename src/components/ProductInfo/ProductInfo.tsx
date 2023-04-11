import React from 'react'
import ProductInfoForm from './ProductInfoForm'
import styles from '../../styles/ProductInfo/ProductInfo.module.css'
const ProductInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <ProductInfoForm />
    </div>
  )
}
export default ProductInfo
