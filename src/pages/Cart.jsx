import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import Button from '../components/Button'

export default function CartPage(){
  const {cart, setQty, removeItem, clear} = useContext(CartContext)

  const total = cart.reduce((s, i) => {
    const price = parseFloat(String(i.price).replace(/[^0-9.,]/g, '').replace(',', '.')) || 0
    return s + price * (i.qty || 1)
  }, 0)

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4 text-[var(--usf-brown)]">Carrinho</h1>

      {cart.length === 0 ? (
        <div className="bg-white rounded-lg p-6 text-center">Seu carrinho está vazio.</div>
      ) : (
        <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-3">
              <img src={item.img} alt={item.name} className="w-20 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold text-[var(--usf-brown)]">{item.name}</div>
                <div className="text-sm text-[var(--usf-graytext)]">{item.price}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button className="px-2 py-1 border rounded" onClick={() => setQty(item.id, (item.qty||1)-1)}>-</button>
                  <div className="px-3">{item.qty}</div>
                  <button className="px-2 py-1 border rounded" onClick={() => setQty(item.id, (item.qty||1)+1)}>+</button>
                </div>
              </div>
              <div className="text-sm text-[var(--usf-graytext)]">
                <div>{item.price}</div>
                <button className="text-xs text-[var(--usf-orange)] mt-2" onClick={() => removeItem(item.id)}>Remover</button>
              </div>
            </div>
          ))}

          <div className="pt-3 border-t flex items-center justify-between">
            <div className="text-lg font-semibold">Total</div>
            <div className="text-lg font-semibold">R$ {total.toFixed(2)}</div>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => alert('Simulação: Checkout iniciado')} variant="primary">Finalizar compra</Button>
            <Button onClick={() => clear()} variant="ghost">Limpar carrinho</Button>
          </div>
        </div>
      )}
    </section>
  )
}
