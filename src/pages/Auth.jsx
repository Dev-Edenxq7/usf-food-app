import React from 'react'

export default function AuthPage(){
  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-[var(--usf-brown)]">Criar conta / Login</h1>

      <form className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-3">
        <input className="border rounded-lg p-2" placeholder="Nome" />
        <input className="border rounded-lg p-2" placeholder="Email" />
        <input className="border rounded-lg p-2" placeholder="Senha" type="password" />

        <button className="mt-2 px-4 py-2 bg-[var(--usf-brown)] text-white rounded-lg">Criar conta</button>

        <div className="text-center text-sm text-[var(--usf-graytext)] mt-2">ou</div>

        <button className="flex items-center justify-center gap-2 mt-2 px-4 py-2 border rounded-lg">
          {/* In a real app replace with OAuth flow */}
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5"/>
          Entrar com Google
        </button>

        <p className="text-xs text-[var(--usf-graytext)] mt-2">Use seu email para entrar. Nós não compartilhamos seus dados.</p>
      </form>
    </section>
  )
}
