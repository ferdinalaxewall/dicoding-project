import React from 'react'

export default function CardHeader({category, image}) {
  return (
    <div className='news-card-header'>
        <h3>{category}</h3>
        <img src={image} alt="News Image" />
    </div>
  )
}
