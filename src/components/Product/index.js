import React from 'react'
import { connect } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'

import { addToCartRequest } from '../../store/cart/actions'
import { Container } from './styles'

function Product ({ amount=0, product, addToCart }) {
  const { image, title, priceFormatted } = product;

  return (
    <Container>
      <img src={image} alt={title} />
      <strong>{title}</strong>
      <span>{priceFormatted}</span>
      <button type="button"
        onClick={
          () => addToCart(product.id)
        }
      >
        <div>
          <MdAddShoppingCart size={16} color="#fff" /> {amount}
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCartRequest(product))
})

export default connect(null, mapDispatchToProps)(Product)
