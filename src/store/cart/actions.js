export const ADD_TO_CART_REQUEST = '@cart/ADD_REQUEST'
export const addToCartRequest = id => ({ type: ADD_TO_CART_REQUEST, id })

export const ADD_TO_CART_SUCCESS = '@cart/ADD_SUCCESS'
export const addToCartSuccess = product => ({ type: ADD_TO_CART_SUCCESS, product })

export const REMOVE_FROM_CART = '@cart/REMOVE'
export const removeFromCart = id => ({ type: REMOVE_FROM_CART, id })

export const UPDATE_AMOUNT_REQUEST = '@cart/UPDATE_AMOUNT_REQUEST'
export const updateAmountRequest = (id, amount)=> ({ type: UPDATE_AMOUNT_REQUEST, id, amount })

export const UPDATE_AMOUNT_SUCCESS = '@cart/UPDATE_AMOUNT_SUCCESS'
export const updateAmountSuccess = (id, amount)=> ({ type: UPDATE_AMOUNT_SUCCESS, id, amount })
