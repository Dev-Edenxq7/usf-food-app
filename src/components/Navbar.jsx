import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart, FiUser, FiMap, FiMenu } from 'react-icons/fi'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

// Navbar includes icons specified in the requirements and navigational links.
export default function Navbar(){
  const {cart} = useContext(CartContext)
  const count = cart.reduce((s,i) => s + (i.qty||1), 0)
  return (
    <header className="bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--usf-white)] shadow-sm flex items-center justify-center">
            <div className="w-7 h-7 rounded-md bg-[var(--usf-brown)]" />
          </div>
          <span className="text-lg font-semibold text-[var(--usf-brown)]">USF Food</span>
        </Link>

        <nav className="flex items-center gap-4 text-[var(--usf-brown)]">
          <Link to="/" aria-label="buscar" title="Buscar" className="p-2 rounded-full hover:bg-[var(--usf-cream)]"><FiSearch/></Link>
          <Link to="/delivery" aria-label="delivery" title="Delivery" className="p-2 rounded-full hover:bg-[var(--usf-cream)] relative">
            <FiShoppingCart />
            {count > 0 && <span className="absolute -top-2 -right-2 bg-[var(--usf-orange)] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{count}</span>}
          </Link>
          <Link to="/cart" aria-label="carrinho" title="Carrinho" className="p-2 rounded-full hover:bg-[var(--usf-cream)]">Carrinho</Link>
          <Link to="/auth" aria-label="usuario" title="Conta" className="p-2 rounded-full hover:bg-[var(--usf-cream)]"><FiUser/></Link>
          <Link to="/menu" aria-label="menu" title="Menu" className="p-2 rounded-full hover:bg-[var(--usf-cream)]"><FiMenu/></Link>
        </nav>
      </div>
    </header>
  )
}
