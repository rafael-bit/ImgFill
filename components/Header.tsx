import React from 'react'

export default function Header ({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-700">{title}</h1>
      {subtitle && <p className="mt-4 text-gray-700 font-medium">{subtitle}</p>}
    </>
  )
}