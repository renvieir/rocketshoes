import produce from 'immer'
import * as CartActions from './actions'

export default (state = [], action) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id)

        if (productIndex >= 0) {
          draft[productIndex].ammount +=1
        } else {
          draft.push({
            ...action.product,
            ammount: 1
          })
        }
      })
    case CartActions.REMOVE_FROM_CART:
      return state.filter(p => p.id !== action.id)
    case CartActions.UPDATE_AMMOUNT: {
      if (action.ammount <= 0)
        // return state.filter(p => p.id !== action.id)
        return state

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)
        if (productIndex >= 0) {
          draft[productIndex].ammount = action.ammount
        }
      })
    }
    default:
      return state
  }
}