import { ResponsiveHeatMap } from '@nivo/heatmap'

const data = [
  {"xCoordinate":1,"yCoordinate":26,"shotMadeFlag":0,"metadata":[{"property":"Distance","value":"2 Ft"},{"property":"Qtr","value":"1"},{"property":"Sec Left In Qtr","value":"37"}]},
  {"xCoordinate":-234,"yCoordinate":57,"shotMadeFlag":1,"metadata":[{"property":"Distance","value":"24 Ft"},{"property":"Qtr","value":"2"},{"property":"Sec Left In Qtr","value":"39"}]},
  {"xCoordinate":-183,"yCoordinate":214,"shotMadeFlag":0,"metadata":[{"property":"Distance","value":"28 Ft"},{"property":"Qtr","value":"2"},{"property":"Sec Left In Qtr","value":"30"}]},
  {"xCoordinate":5,"yCoordinate":5,"shotMadeFlag":0,"metadata":[{"property":"Distance","value":"0 Ft"},{"property":"Qtr","value":"1"},{"property":"Sec Left In Qtr","value":"25"}]},
  {"xCoordinate":-164,"yCoordinate":199,"shotMadeFlag":1,"metadata":[{"property":"Distance","value":"25 Ft"},{"property":"Qtr","value":"1"},{"property":"Sec Left In Qtr","value":"0"}]}
]

// const CustomCell = ({
//   value,
//   x,
//   y,
//   width,
//   height,
//   color,
//   opacity,
//   borderWidth,
//   borderColor,
//   textColor,
// }) => (
//   <g transform={`translate(${x}, ${y})`}>
//       <path
//           transform={`rotate(${value < 50 ? 180 : 0})`}
//           fill={color}
//           fillOpacity={opacity}
//           strokeWidth={borderWidth}
//           stroke={borderColor}
//           d={`
//               M0 -${Math.round(height / 2)}
//               L${Math.round(width / 2)} ${Math.round(height / 2)}
//               L-${Math.round(width / 2)} ${Math.round(height / 2)}
//               L0 -${Math.round(height / 2)}
//           `}
//       />
//       <text
//           dominantBaseline="central"
//           textAnchor="middle"
//           style={{ fill: textColor }}
//           dy={value < 50 ? -6 : 6}
//       >
//           {value}
//       </text>
//   </g>
// )

export default ShotsHeatMap = ({ data /* player shots array */ }) => (
  <ResponsiveHeatMap
      data={data}
      indexBy= 'yCoordinate'
      keys
      margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
      width={750}
      height={705}
      axisTop={{ orient: 'top', tickSize: 1 }}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
          orient: 'left',
          tickSize: 1
      }}
      cellShape="circle"
      cellOpacity={1}
      cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
      defs={[
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(0, 0, 0, 0.1)',
              rotation: -45,
              lineWidth: 4,
              spacing: 7
          }
      ]}
      fill={[ { id: 'lines' } ]}
      animate={true}
      motionConfig="wobbly"
      motionStiffness={80}
      motionDamping={9}
      hoverTarget="cell"
      cellHoverOthersOpacity={0.25}
  />
)