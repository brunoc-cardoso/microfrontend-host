import React from 'react'
import { GoArrowUp } from 'react-icons/go'

export function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <button
      onClick={scrollToTop}
      className="fixed flex justify-center items-center rounded-lg bottom-20 right-10 w-10 h-12 bg-primary-color"
    >
      <GoArrowUp color="white" size={26} />
    </button>
  )
}
