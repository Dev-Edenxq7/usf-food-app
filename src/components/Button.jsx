import React from 'react'

// Reusable button. Variant can be "primary" or "ghost".
export default function Button({children, variant='primary', ...props}){
  const base = 'px-4 py-2 rounded-lg font-medium transition-shadow'
  const primaryCls = `${base} text-white bg-gradient-to-b from-[var(--usf-green-light)] to-[var(--usf-green)] shadow-sm hover:shadow-md`
  const ghostCls = `${base} border border-[var(--usf-brown)] text-[var(--usf-brown)] bg-white`

  const cls = variant === 'primary' ? primaryCls : ghostCls

  return (
    <button className={cls} {...props}>{children}</button>
  )
}
