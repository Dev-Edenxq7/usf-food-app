import React from 'react'

// Reusable button. Variant can be "primary" or "ghost".
export default function Button({children, variant='primary', ...props}){
  const base = 'px-4 py-2 rounded-lg font-medium'
  const cls = variant === 'primary'
    ? `${base} bg-[var(--usf-green)] text-white`
    : `${base} border border-[var(--usf-brown)] text-[var(--usf-brown)] bg-white`

  return (
    <button className={cls} {...props}>{children}</button>
  )
}
