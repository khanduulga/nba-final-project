import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Paper from '@material-ui/core/Paper';
import Tilt from 'react-tilt';
//Buttons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {
  Link
} from "react-router-dom";

export default function Home(props) {
  

  const stories = [props.news.feed[0], props.news.feed[1], props.news.feed[2]];

  const views = [];

  const [counter, setCounter] = useState(0);
  
  stories.map((story, index) => {
    // console.log(counter, index)
    views.push(
      <a style={{textDecoration: 'none', color: "white"}} href={`${story.data.now[0].links.web.href}`} target="_blank">
        <div style={ (index === counter) ? {height: '90%', width: '550px', paddingTop: '40px', paddingBottom: '40px', zIndex: 1} : { opacity: 0.4,  height: '70%', width: '400px'} }>
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: '100%', width: '100%' }} >
            <Paper  style={{backgroundImage: `url(${story.data.now[0].images[0].url})`, height: '400', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
              <div style={{height: '400px', color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                <p style={{backgroundColor: `rgba(108, 122, 137, 0.7)`, fontWeight: 'bold', padding: '10px 10px', display: 'flex', alignContent: 'center'}}>{story.data.now[0].description}</p>
              </div>
            </Paper>
        </Tilt>
        </div>
      </a>
      )
  });


  const [view, setView] = useState(views[counter]);
  const [prevView, setPrevView] = useState(views[(counter === 0 ? 2 : counter - 1)]);
  const [nextView, setNextView] = useState(views[(counter === 2 ? 0 : counter + 1)]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if(counter === 2){
        setCounter(0)
      } else {
        setCounter(counter + 1)
      };
      setView(views[counter]);
      setPrevView(views[(counter === 0 ? 2 : counter - 1)])
      setNextView(views[(counter === 2 ? 0 : counter + 1)])
    }, 2500);

    return () => clearInterval(interval);
  });

  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', paddingTop: '20px', paddingBottom: '20px'}}>

      <div style={{display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', transformStyle: 'preserve-3d'}}>

      <Link to='/players'>
        <Tilt button key={'Players'} className="Tilt" options={{ max : 20, perspective: 2000, scale: 1.02 }} style={{ height: '100%', width: '100%', textDecoration: 'none'}} >
          <Paper  style={{backgroundColor: 'blue', width: '200px', height: '200px', margin: '1px 30px', borderRadius: '160px', zIndex: 1}}>
              <div style={{height: '100%', color: 'white', display: 'flex', flexDirection: 'column'}}>
                <p style={{position: "relative", left: "7%", top: "35%", textEmphasis: 'bold', fontSize: '15px', textDecoration: 'none'}}>Player Stats</p>
                <img src={"/images/curry.png"} style={{height: '320px', width: '250px', position: 'relative', transition: '0.5s', zIndex: 11, transformStyle: 'preserve-3d', transform: 'translate3d(2%,-30%,0px)'}} />
              </div>
          </Paper>
        </Tilt>
      </Link>

      <Link to='/standings'>
        <Tilt button key={'Standings'} className="Tilt" options={{ max : 20, perspective: 2000, scale: 1.02 }} style={{ height: '100%', width: '100%' }} >
          <Paper  style={{backgroundColor: 'gold', width: '200px', height: '200px', margin: '1px 30px', borderRadius: '160px', zIndex: 1}}>
              <div style={{height: '100%', color: 'purple', display: 'flex', flexDirection: 'column'}}>
                <p style={{position: "relative", left: "60%", top: "55%", textEmphasis: 'bold', fontSize: '14px'}}>Standings</p>
                <img src={"/images/lebron.png"} style={{height: '270px', width: '140px', position: 'relative', transition: '0.5s', zIndex: 11, transformStyle: 'preserve-3d', transform: 'translate3d(20%,-30%,0px)'}} />
              </div>
          </Paper>
        </Tilt>
      </Link>

      <Link to='/leaders'>
        <Tilt button key={'Leaders'} className="Tilt" options={{ max : 20, perspective: 2000, scale: 1.02 }} style={{ height: '100%', width: '100%' }} >
          <Paper  style={{backgroundColor: 'red', width: '200px', height: '200px', margin: '1px 30px', borderRadius: '160px', zIndex: 1}}>
              <div style={{height: '100%', color: 'black', display: 'flex', flexDirection: 'column'}}>
                <p style={{position: "relative", left: "7%", top: "25%"}}>League Leaders</p>
                <img src={"/images/jimmy.png"} style={{height: '320px', width: '250px', position: 'relative', transition: '0.5s', zIndex: 11, transformStyle: 'preserve-3d', transform: 'translate3d(0%,-25%,0px)'}} />
              </div>
          </Paper>
        </Tilt>
      </Link>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', marginTop: 0}}>
        <CSSTransition in={counter} appear timeout={2500} classNames="fade">
          <div  style={{opacity: 0.4}}>{prevView}</div>
        </CSSTransition>
        <ChevronLeftIcon style={{fontSize: '50px', marginRight: '40px', marginLeft: '20px', backgroundColor: '#242428', color: 'white', borderRadius: '90px', zIndex: 1}}></ChevronLeftIcon>
        <CSSTransition in={counter} appear timeout={2500} classNames="fade">
          <div>{view}</div>
        </CSSTransition>
        <ChevronRightIcon style={{fontSize: '50px', marginLeft: '40px', marginRight: '20px', backgroundColor: '#242428', color: 'white', borderRadius: '90px', zIndex: 1}} ></ChevronRightIcon>
        <CSSTransition in={counter} appear timeout={2500} classNames="fade">
          <div style={{opacity: 0.4}}>{nextView}</div>
        </CSSTransition>
      </div>

      <footer>
        <p style={{color: 'white'}}>@ 2020 NBA Dashboard</p>
      </footer>

    </div>
  );
}

// codepen


// export default function Home(props) {

// const slides = [
//   {
//     title: "Machu Picchu",
//     subtitle: "Peru",
//     description: "Adventure is never far away",
//     image:
//       "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Chamonix",
//     subtitle: "France",
//     description: "Let your dreams come true",
//     image:
//       "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Mimisa Rocks",
//     subtitle: "Australia",
//     description: "A piece of heaven",
//     image:
//       "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Four",
//     subtitle: "Australia",
//     description: "A piece of heaven",
//     image:
//       "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Five",
//     subtitle: "Australia",
//     description: "A piece of heaven",
//     image:
//       "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   }
// ];

// function useTilt(active) {
//   const ref = React.useRef(null);

//   useEffect(() => {
//     if (!ref.current || !active) {
//       return;
//     }

//     const state = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined
//     };

//     let el = ref.current;

//     const handleMouseMove = (e) => {
//       if (!el) {
//         return;
//       }
//       if (!state.rect) {
//         state.rect = el.getBoundingClientRect();
//       }
//       state.mouseX = e.clientX;
//       state.mouseY = e.clientY;
//       const px = (state.mouseX - state.rect.left) / state.rect.width;
//       const py = (state.mouseY - state.rect.top) / state.rect.height;

//       el.style.setProperty("--px", px);
//       el.style.setProperty("--py", py);
//     };

//     el.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       el.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [active]);

//   return ref;
// }

// const initialState = {
//   slideIndex: 0
// };

// const slidesReducer = (state, event) => {
//   if (event.type === "NEXT") {
//     return {
//       ...state,
//       slideIndex: (state.slideIndex + 1) % slides.length
//     };
//   }
//   if (event.type === "PREV") {
//     return {
//       ...state,
//       slideIndex:
//         state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
//     };
//   }
// };

// function Slide({ slide, offset }) {
//   const active = offset === 0 ? true : null;
//   const ref = useTilt(active);

//   return (
//     <div
//       ref={ref}
//       className="slide"
//       data-active={active}
//       style={{
//         "--offset": offset,
//         "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
//       }}
//     >
//       <div
//         className="slideBackground"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       />
//       <div
//         className="slideContent"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       >
//         <div className="slideContentInner">
//           <h2 className="slideTitle">{slide.title}</h2>
//           <h3 className="slideSubtitle">{slide.subtitle}</h3>
//           <p className="slideDescription">{slide.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [state, dispatch] = React.useReducer(slidesReducer, initialState);

//   return (
//     <div className="slides">
//       <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

//       {[...slides, ...slides, ...slides].map((slide, i) => {
//         let offset = slides.length + (state.slideIndex - i);
//         return <Slide slide={slide} offset={offset} key={i} />;
//       })}
//       <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
//     </div>
//   );
// }

// // const elApp = document.getElementById("app");
// // ReactDOM.render(<App />, elApp);

// }