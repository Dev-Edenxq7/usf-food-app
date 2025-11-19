import React from 'react'
import { Link } from 'react-router-dom'

export default function HamburgerMenu(){
  // Quick links menu — appears as a page here for demo purposes.
  const links = [
    {to:'/', label:'Pedidos'},
    {to:'/', label:'Favoritos'},
    {to:'/', label:'/payments', label2:'Pagamentos'},
    {to:'/support', label:'Suporte'},
    {to:'/settings', label:'Configurações'}
  ]

  return (
    <section className="max-w-sm">
      <h2 className="text-xl font-semibold text-[var(--usf-brown)] mb-3">Menu</h2>
      <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col gap-2">
        {links.map((l, i) => (
          <Link key={i} to={l.to} className="py-2 px-3 rounded hover:bg-[var(--usf-beige)]">{l.label || l.label2}</Link>
        ))}
      </div>
    </section>
  )
}
