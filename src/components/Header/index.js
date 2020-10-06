import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from './styles'

import logo from '../../assets/images/logo.svg'

function Header ({ cart }) {
  const cartSize = useMemo(() => cart.length, [cart])
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{ cartSize }</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Header)