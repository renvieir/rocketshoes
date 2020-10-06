import { call, select, put, all, takeLatest } from 'redux-saga/effects'

import api from '../../services/api'
import * as CartActions from './actions'
import { formatPrice } from '../../util/format'

function* addToCart({ id }) {
  const productAdded = yield select(state => state.cart.find(p => p.id === id))
  if (productAdded) {
    yield put(CartActions.updateAmountRequest(id, 1))
  } else {
    const response = yield call(api.get, `/products/${id}`)

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    }

    yield put(CartActions.addToCartSuccess(data))
  }
}

function* updateAmount({id, amount}) {
  const stock = yield call(api.get, `/stock/${id}`)

  const productAdded = yield select(state => state.cart.find(p => p.id === id))
  const currentAmount = productAdded ? productAdded.amount: 0
  const total = currentAmount + amount

  if (total > stock.data.amount) {
    yield put(CartActions.updateAmountFail(id, total))
  } else {
    yield put(CartActions.updateAmountSuccess(id, total))
  }

}

export default all([
  takeLatest(CartActions.ADD_TO_CART_REQUEST, addToCart),
  takeLatest(CartActions.UPDATE_AMOUNT_REQUEST, updateAmount),
])

