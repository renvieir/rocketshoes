import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../services/api'
import * as CartActions from './actions'
import { formatPrice } from '../../util/format'

function* addToCart({ id }) {
  const productAdded = yield select(state => state.cart.find(p => p.id === id))
  if (productAdded) {
    yield put(CartActions.updateAmountRequest(id, productAdded.amount + 1))
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
  if (amount < 0) return;

  const stock = yield call(api.get, `/stock/${id}`)
  if (amount > stock.data.amount) {
    toast.error('Quantidade Solicitada fora de estoque')
    return;
  }

  yield put(CartActions.updateAmountSuccess(id, amount))
}

export default all([
  takeLatest(CartActions.ADD_TO_CART_REQUEST, addToCart),
  takeLatest(CartActions.UPDATE_AMOUNT_REQUEST, updateAmount),
])

