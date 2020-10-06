import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { ProductList } from './styles.js'
import api from '../../services/api'
import { formatPrice } from '../../util/format'

import Product from '../../components/Product'

function Home({ amount }) {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchProducts() {
      const { data } = await api.get('/products')
      data.forEach(product => {
        product.priceFormatted = formatPrice(product.price)
      })
      setProducts(data)
    }

    fetchProducts();
  },[])


  return (
    <ProductList>
      { products.map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            amount={amount[product.id]}
          />
        )
      })}
    </ProductList>
  )
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {})
})

export default connect(mapStateToProps)(Home)
