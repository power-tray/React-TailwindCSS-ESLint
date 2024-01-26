import React from 'react'

export default function App({ children }) {
  return <div
    className={`
    flex
    text-xl
    h-screen
    flex-col
  bg-slate-100
    items-center
    justify-center
    `}>{children}</div>
}
