import React from 'react'
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default function Card({title, content, date, image, category, link}) {
  return (
    <div className='news-card'>
        <CardHeader category={category} image={image} />
        <CardBody title={title} content={content} date={date} link={link} />
    </div>
  )
}
