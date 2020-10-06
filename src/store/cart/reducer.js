// import produce from 'immer'
import * as CartActions from './actions'

export default (state = [], action) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART_SUCCESS:
      return [
        ...state,
        action.product
      ]
    case CartActions.REMOVE_FROM_CART:
      return state.filter(p => p.id !== action.id)
    case CartActions.UPDATE_AMOUNT_FAIL:
      console.warn('out of stock')
      return state
    case CartActions.UPDATE_AMOUNT_SUCCESS: {
      return state.map(product => {
        if (product => product.id === action.id) {
          product.amount = action.amount
        }
        return product
      })
    }
    default:
      return state
  }
}