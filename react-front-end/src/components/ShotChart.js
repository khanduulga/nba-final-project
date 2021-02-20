import React, { useState, useEffect } from "react";
import { 
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';

import './shotchart.css'
import ShotChartVideo from './ShotChartVideo'

export default function ShotChart(props) {
  let { path, url } = useRouteMatch();
  let shotId = 0
  const [videoUrl, setVideoUrl] = useState(`${props.videos.resultSets.Meta.videoUrls[40].murl}`);


  if (props.shots["message"] == "NO DATA FOUND!") {
    return (
      <text className="error-message">NO DATA FOUND!</text>
    )
  }

  // function setTheVideo(index) {
    // useEffect(() => {
    //   console.log(index)
    //   setVideoUrl(`${props.videos.resultSets.Meta.videoUrls[index].murl}`)      
    // },[])
  // }

    // useEffect(() => {
    //   console.log('changed', videoUrl)
    // }, [videoUrl])

  const shots = props.shots.resultSets['0'].rowSet.map((shot, index) => {
    const scaledX = (shot[17] * 1.523 + 369)
    const scaledY = shot[18] * 1.6 + 62

    if (shot[20]) {
      shotId++

      return (
        <Link to={`${url}/${index}`}>
         <g key={shotId} className="tooltip" onClick={e => {

          setVideoUrl(props.videos.resultSets.Meta.videoUrls[index].murl)
          console.log(videoUrl)
        }}>
          <circle
            cx={scaledX}
            cy={scaledY}
            r="4"
            fill="green"
            id="SHOT"
            overflow="visible"
            tabIndex="1"
          >
            <title>
            <text>

                <tspan x={scaledX} dy="1.2em">
                  Period: {shot[7]}
                </tspan>
                {"\n"}

                <tspan x={scaledX} dy="1.2em">
                  Time Remaining: {shot[8]}min {shot[9]}s
                </tspan>
                {"\n"}

                <tspan x={scaledX} dy="1.2em">
                  Action Type: {shot[11]}
                </tspan>
                {"\n"}

                <tspan x={scaledX} dy="1.2em">
                  Shot Distance: {shot[16]}ft
                </tspan>

              </text>


            </title>
          </circle>
          
        </g>
        </Link>
      )

    } else {
      shotId++

      return (
        <Link to={`${path}/${index}`}>
          <g key={shotId} className="tooltip">
          <circle
            cx={scaledX}
            cy={scaledY}
            r="4"
            fill="red"
            id="SHOT"
            overflow="visible"
          >
            <title>
            <text>

                <tspan x={scaledX} dy="1.2em">
                  Period: {shot[7]}
                </tspan>
                {"\n"}

                <tspan x={scaledX} dy="1.2em">
                  Time Remaining: {shot[8]}min {shot[9]}s
                </tspan>
                {"\n"}

                <tspan x={scaledX} dy="1.2em">
                  Action Type: {shot[11]}
                </tspan>
                {"\n"}

                <tspan x={scaledX} dy="1.2em">
                  Shot Distance: {shot[16]}ft
                </tspan>

              </text>


            </title>

          </circle>

        </g>
        </Link>
      )
    }
  })

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', paddingTop: '15px', paddingBottom: '15px' }}>
        <svg
          className="shot-chart"
          height="705"
          width="750"
          overflow="visible"
          preserveAspectRatio="none"
        >

          <rect x="0" y="0" width="750" height="705" fill="none" stroke="black"></rect>

          <image href="https://cdn.discordapp.com/attachments/809499216354607190/811438397238411304/court.png" preserveAspectRatio="none" height="705" width="750"></image>
          {shots}
        </svg>
        
      </div>
      <Switch>
        <Route path={`${path}/:shot`}>
          <ShotChartVideo
            videoUrls={props.videos.resultSets.Meta.videoUrls}
          />
        </Route>
      </Switch>
    </div>
  )
}


