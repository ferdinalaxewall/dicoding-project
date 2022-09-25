import React from 'react'
import Button from "./Button";

export default function CardBody({title, content, date, link}) {
  return (
    <div className='news-card-body'>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button link={link} />
    </div>
  )
}
