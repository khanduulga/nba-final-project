import React, { useEffect, useRef, useState } from "react";
import { Modal } from "@material-ui/core";

import "./shotchart.css";

export default function ShotChart(props) {

  if (props.shots["message"] === "NO DATA FOUND!") {
    return <text className="error-message">NO DATA FOUND!</text>;
  }


  const { videoUrls } = props.videos.resultSets.Meta;

  const [videoUrl, setVideoUrl] = useState(`${videoUrls[40].murl}`);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  // Creates a reference to the videoElement
  const videoElement = useRef();
  console.log(videoElement)


  useEffect(() => {
    // We can use that reference to the video element to call .load() every time videoUrl changes
    videoElement.current && videoElement.current.load();
  }, [videoUrl])

  const handleShotClick = (shotId) => {
    const url = videoUrls[shotId].murl;

    setVideoUrl(url);
    toggleVideoModal();
  };


  const toggleVideoModal = () => {
    setVideoModalOpen(isOpen => !isOpen)
  }

  // refactored this section
  const renderShots = () => props.shots.resultSets["0"].rowSet.map((shot, index) => {
    const scaledX = shot[17] * 1.523 + 369;
    const scaledY = shot[18] * 1.6 + 62;

    const shotWasMade = shot[20] === 1; // easier to understand "shotWasMade"
    const circleFill = shotWasMade ? "green" : "red"; // got rid of repeated code by using a ternary here

    return (
      <g
        key={index}
        className="tooltip"
        onClick={() => {
          handleShotClick(index);
        }}
      >
        <circle
          cx={scaledX}
          cy={scaledY}
          r="4"
          fill={circleFill}
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
    );
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <svg
          className="shot-chart"
          height="705"
          width="750"
          overflow="visible"
          preserveAspectRatio="none"
        >
          <rect
            x="0"
            y="0"
            width="750"
            height="705"
            fill="none"
            stroke="black"
          ></rect>

          <svg width="750" height="705" viewBox="0 0 750 705" xmlns="http://www.w3.org/2000/svg">

            <rect x="0" y="0" width="750" height="705" fill="#fcebbd" />

            <circle cx="375" cy="65" r="10.5" stroke="blue" stroke-width="2" fill="none" />

            <line x1="320" y1="45" x2="430" y2="45" stroke="blue" stroke-width="3" />

            <rect x="235" y="0" width="280" height="266" stroke="#555" fill="none" stroke-width="2" />

            <line x1="235" y1="45" x2="255" y2="45" stroke="#555" stroke-width="2" />
            <line x1="235" y1="90" x2="255" y2="90" stroke="#555" stroke-width="2" />
            <line x1="235" y1="135" x2="255" y2="135" stroke="#555" stroke-width="2" />
            <line x1="235" y1="180" x2="255" y2="180" stroke="#555" stroke-width="2" />

            <line x1="495" y1="45" x2="515" y2="45" stroke="#555" stroke-width="2" />
            <line x1="495" y1="90" x2="515" y2="90" stroke="#555" stroke-width="2" />
            <line x1="495" y1="135" x2="515" y2="135" stroke="#555" stroke-width="2" />
            <line x1="495" y1="180" x2="515" y2="180" stroke="#555" stroke-width="2" />

            <circle cx="375" cy="266" r="98" stroke="#555" fill="none" stroke-width="2" />

            <line x1="43.2" y1="0" x2="43.2" y2="133" stroke="#555" stroke-width="2" />
            <line x1="706.8" y1="0" x2="706.8" y2="133" stroke="#555" stroke-width="2" />

            <defs>
              <clipPath id="bottomHalfClip">
                <rect x="0" y="105" width="750" height="340" />
              </clipPath>
            </defs>
            <circle cx="375" cy="105" r="332.5" stroke="#555" stroke-width="2" fill="none" clip-path="url(#bottomHalfClip)" />

            <text x="375" y="650" text-anchor="middle" font-size="10" fill="#333">made by @khanduulgam</text>

            <circle cx="375" cy="701" r="98" stroke="#555" fill="none" stroke-width="2" />

          </svg>

          {renderShots()}
        </svg>
      </div>

      <Modal open={videoModalOpen} onBackdropClick={toggleVideoModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video ref={videoElement} width="960" height="540" controls autoplay loop>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </Modal>
    </div >
  );
}