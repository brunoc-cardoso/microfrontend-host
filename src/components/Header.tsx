import React from 'react'

export function Header() {
  return (
    <div className="flex w-full h-14 px-10 bg-primary-color items-center text-white">
      <div className="flex gap-6 w-1/2">
        <a href="#">Notícias</a>
        <a href="#">Clima</a>
      </div>
      <span className="font-bold text-xl">Batalza's News</span>
    </div>
  )
}
