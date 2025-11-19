import React, {useState} from 'react'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import Button from './Button'

// Reusable product card used in Cardápio. Contains image, name, price and add-to-cart button.
export default function ProductCard({product}){
  const [fav, setFav] = useState(false)
  const [added, setAdded] = useState(false)

  return (
    <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col">
      <div className="h-40 rounded-lg overflow-hidden mb-3">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover"/>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-[var(--usf-brown)]">{product.name}</h3>
        <p className="text-[var(--usf-graytext)]">{product.price}</p>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <button
          aria-pressed={fav}
          onClick={() => setFav(v => !v)}
          className={`p-2 rounded-lg icon-outline ${fav ? 'bg-[var(--usf-orange)] text-white' : 'bg-transparent text-[var(--usf-brown)] border border-[var(--usf-brown)]'}`}>
          <FiHeart />
        </button>

        <Button onClick={() => setAdded(true)} variant="primary">
          <span className="flex items-center gap-2"><FiShoppingCart /> {added ? 'Adicionado' : 'Adicionar ao carrinho'}</span>
        </Button>
      </div>
    </div>
  )
}
