import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Paper from '@material-ui/core/Paper'



export default function Home(props) {

  const stories = [props.news.feed[0], props.news.feed[1], props.news.feed[2]];

  const views = [];

  stories.map((story, index) => {
    views.push(
      <a style={{textDecoration: 'none', color: "white"}} href={`${story.data.now[0].links.web.href}`}>
        <div style={{ height: '700px', width: '800px'}}>
            <Paper  style={{backgroundImage: `url(${story.data.now[0].images[0].url})`, height: '400', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
              <div style={{height: '400px', color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                <p style={{backgroundColor: `rgba(108, 122, 137, 0.4)`, fontWeight: 'bold'}}>{story.data.now[0].description}</p>
              </div>
            </Paper>
        </div>
      </a>
      )
  });


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
    }, 2500);

    return () => clearInterval(interval);
  });

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Hello Colin</h1>
      <CSSTransition in={counter} appear timeout={2500} classNames="fade">
        <div>{view}</div>
      </CSSTransition>
    </div>
  );
}