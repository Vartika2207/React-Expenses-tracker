import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  //transform object to arr of numbers, below we transformed dataPoint obj to number
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

   //... to convert arr to list or argument (i.e. standalone elements)
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;

