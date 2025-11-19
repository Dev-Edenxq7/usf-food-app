import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MenuPage from './pages/Menu'
import DeliveryPage from './pages/Delivery'
import AuthPage from './pages/Auth'
import HamburgerMenu from './pages/HamburgerMenu'
import Navbar from './components/Navbar'
import CartPage from './pages/Cart'
import { CartProvider } from './context/CartContext'

// App root: defines main routes. Comments explain file responsibilities.
export default function App(){
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        {/* Top nav present on all pages */}
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<MenuPage/>} />
            <Route path="/delivery" element={<DeliveryPage/>} />
            <Route path="/auth" element={<AuthPage/>} />
            <Route path="/menu" element={<HamburgerMenu/>} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  )
}
