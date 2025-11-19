import React, {useState, useContext} from 'react'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import Button from './Button'
import CartContext from '../context/CartContext'

// Reusable product card used in Cardápio. Contains image, name, price and add-to-cart button.
export default function ProductCard({product}){
  const [fav, setFav] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useContext(CartContext)

  return (
    <div className="bg-[var(--usf-white)] rounded-card p-0 shadow-card-soft flex flex-col overflow-hidden animate-fade-in">
      <div className="h-40 sm:h-44 lg:h-52 w-full overflow-hidden rounded-top-card mb-0">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover"/>
      </div>
      <div className="p-4 flex-1">
        <h3 className="font-semibold text-[var(--usf-brown)]">{product.name}</h3>
        <p className="text-[var(--usf-graytext)]">{product.price}</p>

        <div className="mt-4 flex items-center justify-between">
        <button
          aria-pressed={fav}
          onClick={() => setFav(v => !v)}
          className={`p-2 rounded-lg icon-outline ${fav ? 'bg-[var(--usf-orange)] text-white' : 'bg-transparent text-[var(--usf-brown)] border border-[var(--usf-brown)]'}`}>
          <FiHeart />
        </button>

        <Button onClick={() => { addItem(product); setAdded(true) }} variant="primary">
          <span className="flex items-center gap-2"><FiShoppingCart /> {added ? 'Adicionado' : 'Adicionar'}</span>
        </Button>
      </div>
    </div>
    </div>
  )
}
