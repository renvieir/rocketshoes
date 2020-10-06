export const ADD_TO_CART = '@cart/ADD'
export const addToCart = product => ({ type: ADD_TO_CART, product })

export const REMOVE_FROM_CART = '@cart/REMOVE'
export const removeFromCart = id => ({ type: REMOVE_FROM_CART, id })

export const UPDATE_AMMOUNT = '@cart/UPDATE_AMMOUNT'
export const updateAmmount = (id, ammount)=> ({ type: UPDATE_AMMOUNT, id, ammount })
