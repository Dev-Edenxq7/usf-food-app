import React from 'react'
import ProductCard from '../components/ProductCard'

// Sample products for Cardápio page. In a real app this comes from an API.
const sampleProducts = [
  {id:1, name:'Café com Leite', price:'R$ 6,50', img:'https://source.unsplash.com/400x300/?coffee'},
  {id:2, name:'Pão de Queijo', price:'R$ 4,00', img:'https://source.unsplash.com/400x300?bread'},
  {id:3, name:'Bolo de Cenoura', price:'R$ 8,50', img:'https://source.unsplash.com/400x300?cake'},
  {id:4, name:'Sanduíche Natural', price:'R$ 12,00', img:'https://source.unsplash.com/400x300?sandwich'}
]

export default function MenuPage(){
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4 text-[var(--usf-brown)]">Cardápio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
