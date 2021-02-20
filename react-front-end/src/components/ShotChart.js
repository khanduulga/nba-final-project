import React from "react";

import './shotchart.css'

export default function ShotChart(props) {
  let shotId = 0

  if (props.shots["message"] == "NO DATA FOUND!") {
    return (
      <text className="error-message">NO DATA FOUND!</text>
    )
  }

  const shots = props.shots.resultSets['0'].rowSet.map(shot => {
    const scaledX = (shot[17] * 1.523 + 369)
    const scaledY = shot[18] * 1.6 + 62

    if (shot[20]) {
      shotId++

      return (
        <g key={shotId} className="tooltip" >
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
      )
    } else {
      shotId++

      return (
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
      )
    }
  })


  return (
    <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', paddingTop: '15px', paddingBottom: '15px' }}>
      <svg
        className="shot-chart"
        height="705"
        width="750"
        overflow="visible"
        preserveAspectRatio="none"
      >
        {/* court setup */}
        {/* <circle cx="375" cy="71.25" r="11.96808510638298" fill="none" stroke="black"></circle>
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
        <path d="M-90,-1.1021821192326179e-14A90,90,0,1,1,90,0A90,90,0,1,0,-90,-1.1021821192326179e-14Z" stroke="black" transform="translate(375,705)"></path> */}
        <rect x="0" y="0" width="750" height="705" fill="none" stroke="black"></rect>

        <image href="https://cdn.discordapp.com/attachments/809499216354607190/811438397238411304/court.png" preserveAspectRatio="none" height="705" width="750"></image>
        {shots}
      </svg>
    </div>
  )
}


