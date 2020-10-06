import React from 'react'
import { connect } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'

import { addToCart } from '../../store/cart/actions'

function Product ({ ammount=0, product, dispatchAddProduct }) {
  const { image, title, priceFormatted } = product;

  return (
    <li>
      <img src={image} alt={title} />
      <strong>{title}</strong>
      <span>{priceFormatted}</span>
      <button type="button"
        onClick={
          () => dispatchAddProduct(product)
        }
      >
        <div>
          <MdAddShoppingCart size={16} color="#fff" /> {ammount}
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddProduct: product => dispatch(addToCart(product))
})

export default connect(null, mapDispatchToProps)(Product)
