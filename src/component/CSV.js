import React from 'react'
import axios from 'axios';
import { CSVLink } from 'react-csv';

function CSV() {
   const [getData, setGetData] = React.useState([]);
  const [batteryData, setBatteryData] = React.useState([]);
  const Header = [
    { label: 'Vessel Name', key: 'q1' },
    { label: 'Hotal Load', key: 'q2' },
    { label: 'Operation Types', key: 'q3' },
    { label: 'Types', key: 'type' },
    { label: 'Duration', key: 'duration' },
    { label: 'Charge and discharge', key: 'chrgNdischrg' },
    { label: 'Depth of Discharge', key: 'q4' },
    { label: 'No.of Generators', key: 'q5' },
    { label: 'Rating of generator', key: 'q6' },
    { label: 'percantage of generator', key: 'q7' },
    { label: 'no.of loads to be powered', key: 'q8' },
    { label: 'loads', key: 'load' },
    {label:'duration 1',key:'duration0'},
    { label: 'load Duration', key: 'duration' },
    { label: 'Duration of intermediate charging', key: 'q9' },
  ]
 
  const BatteryLoadProfileReport = {
    filename: 'Batter Load Profile.csv',
    headers: Header,
    data: batteryData
  };

  React.useEffect(() => {
    axios.get('https://batteryprojectbackend.herokuapp.com/baterryProfileData/')
      .then((data) => {
        setBatteryData(data.data);
      })
      .catch((err) => console.log(err));

    axios.get('https://batteryprojectbackend.herokuapp.com/baterryRecomendationData/')
      .then((data) => {
        setGetData(data.data);
      })
      .catch((err) => console.log(err));

  }, [])


  const HeaderBatteryRecomendation = [
    { label: 'Level of Specific Power', key: 'q1' },
    { label: 'Safety Level Expected', key: 'q2' },
    { label: 'Life Span', key: 'q3' },
    { label: 'Budget for battery', key: 'q4' },
    { label: 'Expected Performance', key: 'q5' },
    { label: 'Weight of battery module', key: 'q6' },
    { label: 'length of battery', key: 'q7' },
    { label: 'breadth of battery', key: 'q8' },
    { label: 'height of battery', key: 'q9' },
    { label: 'battery capacity', key: 'q10' },
    { label: 'weight of rack', key: 'q11' },
    { label: 'lenght of rack', key: 'q12' },
    { label: 'breadth of rack', key: 'q13' },
    { label: 'height of rack', key: 'q14' },
    { label: 'required capacity', key: 'q15' }
  ]

  const BatteryRecomendationReport = {
    filename: 'Battery Recomendation.csv',
    headers: HeaderBatteryRecomendation,
    data: getData
  };



  return (
    <div>
      <div className='d-flex flex-direction-row gap-3 mt-5 mx-5 bg-white'>
        <CSVLink {...BatteryLoadProfileReport} className='w-50 text-center p-5 border' style={{ backgroundColor: '#f6f8fc' }}>Download Battery Load Profile CSV File </CSVLink>
        <CSVLink {...BatteryRecomendationReport} className='w-50 text-center p-5 border' style={{ backgroundColor: '#f6f8fc' }}>Download Battery Recomendation CSV File</CSVLink>

      </div>
    </div>
  )
}

export default CSV
