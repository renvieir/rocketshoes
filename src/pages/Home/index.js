import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { ProductList } from './styles.js'
import api from '../../services/api'
import { formatPrice } from '../../util/format'

import Product from '../../components/Product'

function Home({ammount}) {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchData() {
      const { data } = await api.get('/products')
      data.forEach(product => {
        product.priceFormatted = formatPrice(product.price)
      })
      setProducts(data)
    }

    fetchData();
  },[])


  return (
    <ProductList>
      { products.map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            ammount={ammount[product.id]}
          />
        )
      })}
    </ProductList>
  )
}

const mapStateToProps = state => ({
  ammount: state.cart.reduce((ammount, product) => {
    ammount[product.id] = product.ammount
    return ammount
  }, {})
})

export default connect(mapStateToProps)(Home)
