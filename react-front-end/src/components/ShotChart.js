import React, { useState } from "react";

import './shotchart.css'


const data = [
  {
    "xCoordinate": 179,
    "yCoordinate": 198,
    "shotMadeFlag": 1,
    "metadata": [
      {
        "property": "Distance",
        "value": "26 Ft"
      },
      {
        "property": "Qtr",
        "value": "2"
      },
      {
        "property": "Sec Left In Qtr",
        "value": "48"
      }
    ]
  },
  {
    "xCoordinate": 181,
    "yCoordinate": 214,
    "shotMadeFlag": 1,
    "metadata": [
      {
        "property": "Distance",
        "value": "28 Ft"
      },
      {
        "property": "Qtr",
        "value": "2"
      },
      {
        "property": "Sec Left In Qtr",
        "value": "24"
      }
    ]
  },
  {
    "xCoordinate": 46,
    "yCoordinate": 248,
    "shotMadeFlag": 0,
    "metadata": [
      {
        "property": "Distance",
        "value": "25 Ft"
      },
      {
        "property": "Qtr",
        "value": "2"
      },
      {
        "property": "Sec Left In Qtr",
        "value": "59"
      }
    ]
  }
]

// onMouseEnter={() => this.someHandler}
//     onMouseLeave={() => this.someOtherHandler


export default function ShotChart(props) {

  const shots = data.map(shot => {
    const scaledX = (shot["xCoordinate"] * 1.5 + 375)
    const scaledY = shot["yCoordinate"] * 1.5 + 71

    if (shot["shotMadeFlag"]) {
      return (
        <g>
          <circle
            cx={scaledX}
            cy={scaledY}
            r="3.1914893617021276"
            fill="green"
            id="SHOT"
            overflow="visible"
          >
          </circle>
          <text x={scaledX} y={scaledY} textLength="300" >

            <tspan x={scaledX} dy="1.2em">
              {shot['metadata'][0].property}: {shot['metadata'][0]['value']}
            </tspan>
            <tspan x={scaledX} dy="1.2em">
              {shot['metadata'][1].property}: {shot['metadata'][1]['value']}
            </tspan>
            <tspan x={scaledX} dy="1.2em">
              {shot['metadata'][2].property}: {shot['metadata'][2]['value']}
            </tspan>

          </text>
          <rect x={scaledX} y={scaledY} width="120" height="60" fill="none" stroke="black"></rect>
        </g>
      )
    } else {
      return (
        <g>
          <circle
            cx={scaledX}
            cy={scaledY}
            r="3.1914893617021276"
            fill="red"
            id="SHOT"
            overflow="visible"
          >
          </circle>
          <text x={scaledX} y={scaledY} textLength="300" z="1">

            <tspan x={scaledX} dy="1.2em">
              {shot['metadata'][0].property}: {shot['metadata'][0]['value']}
            </tspan>
            <tspan x={scaledX} dy="1.2em">
              {shot['metadata'][1].property}: {shot['metadata'][1]['value']}
            </tspan>
            <tspan x={scaledX} dy="1.2em">
              {shot['metadata'][2].property}: {shot['metadata'][2]['value']}
            </tspan>

          </text>
          <rect x={scaledX} y={scaledY} width="120" height="60" fill="none" stroke="black"></rect>
        </g>
      )
    }

  })

  return (
    <svg
      className="shot-chart"
      height="705"
      width="750"
      overflow="visible"
    >
      {/* court setup */}
      <circle cx="375" cy="71.25" r="11.96808510638298" fill="none" stroke="black"></circle>
      <line x1="330" x2="420.00000000000006" y1="60" y2="60" stroke="black"></line>
      <rect x="255.00000000000003" y="0" width="240" height="285" fill="none" stroke="black"></rect>
      <rect x="285" y="0" width="180" height="285" fill="none" stroke="black"></rect>
      <path d="M90,0A90,90,0,1,1,-90,1.1021821192326179e-14A90,90,0,1,0,90,0Z" stroke="black" transform="translate(375,285)"></path>
      <path d="M-90,-1.1021821192326179e-14A90,90,0,1,1,90,0A90,90,0,1,0,-90,-1.1021821192326179e-14Z" stroke="black" transform="translate(375,285)" ></path>
      <path d="M60,0A60,60,0,1,1,-60,7.34788079488412e-15A60,60,0,1,0,60,0Z" stroke="black" transform="translate(375,71.25)"></path>
      <line x1="45" x2="45" y1="0" y2="210" stroke="black"></line>
      <line x1="705" x2="705" y1="0" y2="210" stroke="black"></line>
      <path d="M330.1714479312211,136.76149164147395A357.375,357.375,0,0,1,-330.1714479312211,136.76149164147384A357.375,357.375,0,0,0,330.1714479312211,136.76149164147395Z" stroke="black" transform="translate(375,71.25)"></path>
      <path d="M-30,-3.67394039744206e-15A30,30,0,1,1,30,0A30,30,0,1,0,-30,-3.67394039744206e-15Z" stroke="black" transform="translate(375,705)"></path>
      <path d="M-90,-1.1021821192326179e-14A90,90,0,1,1,90,0A90,90,0,1,0,-90,-1.1021821192326179e-14Z" stroke="black" transform="translate(375,705)"></path>
      <rect x="0" y="0" width="750" height="705" fill="none" stroke="black"></rect>
      {shots}
    </svg>
  )
}


