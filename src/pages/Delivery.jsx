import React from 'react'
import ProgressBar from '../components/ProgressBar'

export default function DeliveryPage(){
  // This page shows a simple progress indicator and contact option.
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4 text-[var(--usf-brown)]">Delivery / Status do pedido</h1>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-[var(--usf-graytext)] mb-2">Pedido #123 • Entregador: João • Tempo estimado: 25-35 min</p>

        <ProgressBar progress={60} />

        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-[var(--usf-green)] text-white">Contato com entregador</button>
          <button className="px-4 py-2 rounded-lg border border-[var(--usf-brown)] text-[var(--usf-brown)]">Ver no mapa</button>
        </div>
      </div>
    </section>
  )
}
