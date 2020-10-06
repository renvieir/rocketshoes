import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import * as CartActions from '../../store/cart/actions'

function CartItem({ product, removeFromCart, updateAmmount }) {
  const { priceFormatted, subTotal, title, image, ammount } = product

  return (
    <tr>
      <td>
        <img src={ image } alt={ title } />
      </td>
      <td>
        <strong>{ title }</strong>
        <span>{ priceFormatted }</span>
      </td>
      <td>
        <div>
          <button type="button"
            onClick={() => updateAmmount(product.id, ammount-1)}
          >
            <MdRemoveCircleOutline size={20} color="#7159c1" />
          </button>
          <input type="number" readOnly value={ammount} />
          <button type="button"
            onClick={() => updateAmmount(product.id, ammount+1)}
          >
            <MdAddCircleOutline size={20} color="#7159c1" />
          </button>
        </div>
      </td>
      <td>
        <strong>{subTotal}</strong>
      </td>
      <td>
        <button type="button" onClick={() => removeFromCart(product.id) }>
          <MdDelete size={20} color="#7159c1" />
        </button>
      </td>
    </tr>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(null, mapDispatchToProps)(CartItem)
