import React from 'react'
import Header from "./Header";
import Card from "./Card";

export default function News() {
    const someNews = [
        {
          title: 'CNN Acuire BEME',
          date: 'March 20 2022',
          content: "CNN purchased Casey Neistat's Beme app for $25million.",
          image: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'News',
          link: '#'
        },
        {
          title: 'React and the WP-API',
          date: 'March 19 2022',
          content: 'The first ever decoupled starter theme for React & the WP-API.',
          image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
          category: 'News',
          link: '#'
        },
        {
          title: 'Nomad Lifestyle',
          date: 'March 19 2022',
          content: 'Learn our tips and tricks on living a nomadic lifestyle.',
          image: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'Travel',
          link: '#'
        }
      ];

  return (
    <div className='news-wrapper'>
        <Header title="Article News" subtitle="Covering 25 September 2022" />
        {someNews.map((news) => (
            <Card 
                title={news.title}
                content={news.content}
                date={news.date}
                image={news.image}
                category={news.category}
                link={news.link}
            />
        ))}
    </div>
  )
}
