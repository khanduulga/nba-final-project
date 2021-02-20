import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';


export default function ShotChartVideo(props) {

  let shotId = useParams()

  if(!shotId.shot) {
    return (
      <h1>Select a Shot!</h1>
    )
  }
  
  return (
    <video width="960" height="540" controls>
        <source src={props.videoUrls[shotId.shot].murl} type="video/mp4"/>
    </video>
  )
}