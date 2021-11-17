import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const MultiAxisLine =() => {
const [batteryData,setBatteryData] =React.useState([]);


React.useEffect(() => {
    axios.get('https://batteryprojectbackend.herokuapp.com/baterryGraphData/')
      .then((data) => {
        setBatteryData(data.data);
   })
      .catch((err) => console.log(err));
  }, [])

  let data = {
  labels:batteryData.labelsValue,
  datasets: [
     {
      label: 'Charge/dischage',
     data:batteryData.graphLabel,
      fill: false,
      backgroundColor: 'green',
      borderColor: 'green',
      yAxisID: 'percentage',
    },
    {
      label: 'DOD',
     data: batteryData.DODdataset,
      fill: false,
      backgroundColor: 'red',
      borderColor: 'red',
      yAxisID: 'percentage',
    },
  ],
};

let options = {
  scales: {
    y:  {
      beginAtZero:true,
        type: 'linear',
        display: true,
        position: 'left',
        id:'y',
         ticks: {
                 beginAtZero: true,
                 min: 0,
                 stepSize: 100,
                 max: batteryData.maxLoadOrEnergyRequirement
                }
      },
     percentage: {
        type: 'linear',
        display: true,
        position: 'right',
        id:'percentage',
        ticks: {
                 beginAtZero: true,
                 min: 0,
                 stepSize: 100,
                 max: batteryData.batteryCapacityRequired
                  },
        gridLines: {
          drawOnArea: false,
        },
      },
  },
};


  

return(
  <>
<div style={{width:'90%'}} className='d-block m-auto bg-white p-5 '>
    <div className='header'>
      <h1 className='title w-100  fw-bold' style={{color:'lightblue'}}>Graph</h1>
    </div>
    <Line data={data} options={options} />
    </div>
  </>
);
}

export default MultiAxisLine;