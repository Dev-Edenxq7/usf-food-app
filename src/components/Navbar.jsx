import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart, FiUser, FiMap, FiMenu } from 'react-icons/fi'

// Navbar includes icons specified in the requirements and navigational links.
export default function Navbar(){
  return (
    <header className="bg-[var(--usf-beige)] border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--usf-brown)]" />
          <span className="text-lg font-semibold text-[var(--usf-brown)]">USF Food</span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link to="/" aria-label="buscar" title="Buscar"><FiSearch className="text-[var(--usf-brown)]"/></Link>
          <Link to="/delivery" aria-label="carrinho" title="Delivery"><FiShoppingCart className="text-[var(--usf-brown)]"/></Link>
          <Link to="/auth" aria-label="usuario" title="Conta"><FiUser className="text-[var(--usf-brown)]"/></Link>
          <Link to="/" aria-label="localizacao" title="Localização"><FiMap className="text-[var(--usf-brown)]"/></Link>
          <Link to="/menu" aria-label="menu" title="Menu"><FiMenu className="text-[var(--usf-brown)]"/></Link>
        </nav>
      </div>
    </header>
  )
}
