import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
const {productName} = useParams()

  return (
    <div>{productName} </div>
  )
}
