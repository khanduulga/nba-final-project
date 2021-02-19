import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import './player.scss'



export default function Home(props) {

  const stories = [props.news.feed[0], props.news.feed[1], props.news.feed[2]];

  const views = [];

  stories.map((story, index) => {
    views.push(
      <div className="image container">
        <img style={{ width: '100%'}} src={`${story.data.now[0].images[0].url}`}/>
        <a className="bottom-left" href={`${story.data.now[0].links.web.href}`}>{story.data.now[0].description}</a>
        
      </div>)
  });
  console.log(views)

  const [counter, setCounter] = useState(0);
  const [view, setView] = useState(views[counter])

  useEffect(() => {
    const interval = window.setInterval(() => {
      if(counter === 2){
        setCounter(0)
      } else {
        setCounter(counter + 1)
      };
      setView(views[counter]);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <CSSTransition in={counter} appear timeout={5000} classNames="fade">
        <div>{view}</div>
      </CSSTransition>
    </div>
  );
}