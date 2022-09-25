import React from 'react'

export default function Header({title, subtitle}) {
  return (
    <div className='news-header'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}
