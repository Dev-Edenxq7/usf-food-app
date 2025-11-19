import React, { createContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

function cartReducer(state, action){
  switch(action.type){
    case 'ADD':{
      const existing = state.find(i => i.id === action.item.id)
      if(existing){
        return state.map(i => i.id === action.item.id ? {...i, qty: i.qty + 1} : i)
      }
      return [...state, {...action.item, qty: 1}]
    }
    case 'REMOVE':{
      return state.filter(i => i.id !== action.id)
    }
    case 'SET_QTY':{
      return state.map(i => i.id === action.id ? {...i, qty: action.qty} : i).filter(i => i.qty > 0)
    }
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({children}){
  const [cart, dispatch] = useReducer(cartReducer, [], (init) => {
    try{
      const raw = localStorage.getItem('usf_cart')
      return raw ? JSON.parse(raw) : init
    }catch(e){
      return init
    }
  })

  useEffect(()=>{
    try{ localStorage.setItem('usf_cart', JSON.stringify(cart)) }catch(e){}
  }, [cart])

  const addItem = (item) => dispatch({type:'ADD', item})
  const removeItem = (id) => dispatch({type:'REMOVE', id})
  const setQty = (id, qty) => dispatch({type:'SET_QTY', id, qty})
  const clear = () => dispatch({type:'CLEAR'})

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, setQty, clear}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
