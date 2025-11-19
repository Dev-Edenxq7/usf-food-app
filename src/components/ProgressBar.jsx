import React from 'react'

// Simple progress bar component used in Delivery page.
export default function ProgressBar({progress=0}){
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div className="h-full bg-[var(--usf-green)]" style={{width: `${progress}%`}} />
      </div>
      <div className="text-sm text-[var(--usf-graytext)] mt-2">Progresso: {progress}%</div>
    </div>
  )
}
