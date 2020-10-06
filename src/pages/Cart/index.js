import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Container, ProductTable, Total } from './styles'
import { formatPrice } from '../../util/format'
import * as CartActions from '../../store/cart/actions'
import CartItem from '../../components/CartItem'

function Cart({ cart, total }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          { cart.map(product => {
            return (
              <CartItem key={product.id} product={product} />
            )
          })}
        </tbody>

      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
        <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.ammount)
  })),
  total: formatPrice(state.cart.reduce(
    (sum, product) => sum + (product.price * product.ammount), 0))
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)