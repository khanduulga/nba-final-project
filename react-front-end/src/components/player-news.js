import React from 'react'


export default function PlayerNews(props) {



  return(
    <div className="player-stats">
      <h1>Player News</h1>
      <h2>{props.news[0].headline}</h2>
      <article>{props.news[0].description}</article>
      <a href={props.news[0].links.web.href}><img src={props.news[0].images[0].url} alt="image" style={{ width: '45%'}}/></a>
      <a href={props.news[0].links.web.href}><img src={props.news[1].images[0].url} alt="image" style={{ width: '45%'}}/></a>
    </div>
  )
}