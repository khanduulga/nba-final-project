import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';


export default function ShotChartVideo(props) {


  if(!props.videoUrl) {
    return (
      <h1>Select a Shot!</h1>
    )
  }
  
  return (
    <video width="960" height="540" controls>
        <source src={props.videoUrl} type="video/mp4"/>
    </video>
  )
}