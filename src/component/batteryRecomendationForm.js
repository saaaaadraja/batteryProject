import React from 'react';
import axios from 'axios';

function BatteryRecomendationForm() {
const [data,setData]=React.useState([{q1:'',q2:'',q3:'',q4:'',q5:'',q6:'',q7:'',q8:'',q9:'',q10:'',q11:'',q12:'',q13:'',q14:'',q15:''}]);

  const submitHandler=(e)=>{
e.preventDefault();
const AreaOfBattery = data.q7*data.q8*data.q9;
const AreaOfRack = data.q12*data.q13*data.q14;
const TotalNoOfBatteryInRack=AreaOfRack/AreaOfBattery;
const NoOfBatteryNeeded=data.q15/data.q10;
const NoOfRackNeeded =NoOfBatteryNeeded/TotalNoOfBatteryInRack;
const TotalWeight = (data.q11*NoOfRackNeeded)+(NoOfBatteryNeeded*data.q6);

if(data.q1 && data.q2 && data.q3 && data.q4 && data.q5 && data.q6 && data.q7 && data.q8 && data.q9 && data.q10 && data.q11 && data.q12 && data.q13 && data.q14 && data.q15){
  if(data.q1==='High Specific Energy' && data.q2==='Low level of safety' && data.q3==='Low Life Span' && data.q4==='Low Cost' && data.q5==='Medium Perfermance'){
    window.alert(`Your Recommended battery is lithium cobalt oxide
    Dimensions:
    Area of Battery=${AreaOfBattery}
    Area Of Rack = ${AreaOfRack}
    Total No.of Battery In Rack = ${TotalNoOfBatteryInRack}
    No.Of Battery Needed = ${NoOfBatteryNeeded}
    No.of Rack Needed = ${NoOfRackNeeded}
    Total Weight = ${TotalWeight}
    `);
  }
  else if(data.q1==='Medium Specific Energy' && data.q2==='Medium level of safety' && data.q3==='Low Life Span' && data.q4==='Low Cost' && data.q5==='Low Perfermance'){
         window.alert(`Your Recommended battery is Lithium Manganese Oxide
    Dimensions:
    Area of Battery=${AreaOfBattery}
    Area Of Rack = ${AreaOfRack}
    Total No.of Battery In Rack = ${TotalNoOfBatteryInRack}
    No.Of Battery Needed = ${NoOfBatteryNeeded}
    No.of Rack Needed = ${NoOfRackNeeded}
    Total Weight = ${TotalWeight}
         `);
  }
  else if(data.q1==='Low Specific Energy' && data.q2==='Medium level of safety' && data.q3==='Long Life Span' && data.q4==='Low Cost' && data.q5==='Medium Perfermance'){
         window.alert(`Your Recommended battery is Lithium Nickel Manganese Cobalt Oxide
    Dimensions:
    Area of Battery=${AreaOfBattery}
    Area Of Rack = ${AreaOfRack}
    Total No.of Battery In Rack = ${TotalNoOfBatteryInRack}
    No.Of Battery Needed = ${NoOfBatteryNeeded}
    No.of Rack Needed = ${NoOfRackNeeded}
    Total Weight = ${TotalWeight}
         `);
  }
   else if(data.q1==='High Specific Energy' && data.q2==='High level of safety' && data.q3==='Long Life Span' && data.q4==='Low Cost' && data.q5==='Medium Perfermance'){
         window.alert(`Your Recommended battery is Lithium Iron Phosphate
    Dimensions:
    Area of Battery=${AreaOfBattery}
    Area Of Rack = ${AreaOfRack}
    Total No.of Battery In Rack = ${TotalNoOfBatteryInRack}
    No.Of Battery Needed = ${NoOfBatteryNeeded}
    No.of Rack Needed = ${NoOfRackNeeded}
    Total Weight = ${TotalWeight}
         `);
  }
   else if(data.q1==='High Specific Energy' && data.q2==='Low level of safety' && data.q3==='Medium Life Span' && data.q4==='Medium Cost' && data.q5==='Medium Perfermance'){
         window.alert(`Your Recommended battery is Lithium Nickel Cobalt Aluminum Oxide
    Dimensions:
    Area of Battery=${AreaOfBattery}
    Area Of Rack = ${AreaOfRack}
    Total No.of Battery In Rack = ${TotalNoOfBatteryInRack}
    No.Of Battery Needed = ${NoOfBatteryNeeded}
    No.of Rack Needed = ${NoOfRackNeeded}
    Total Weight = ${TotalWeight}
         `);
  }
   else if(data.q1==='Low Specific Energy' && data.q2==='High level of safety' && data.q3==='Long Life Span' && data.q4==='High Cost' && data.q5==='High Perfermance'){
         window.alert(`Your Recommended battery is Lithium Titanate
    Dimensions:
    Area of Battery=${AreaOfBattery}
    Area Of Rack = ${AreaOfRack}
    Total No.of Battery In Rack = ${TotalNoOfBatteryInRack}
    No.Of Battery Needed = ${NoOfBatteryNeeded}
    No.of Rack Needed = ${NoOfRackNeeded}
    Total Weight = ${TotalWeight}
         `);
  }
  else{
    window.alert(`no specific battery is recommended for you
    Dimensions:
    Area of Battery=${AreaOfBattery}
    Area Of Rack = ${AreaOfRack}
    Total No.of Battery In Rack = ${TotalNoOfBatteryInRack}
    No.Of Battery Needed = ${NoOfBatteryNeeded}
    No.of Rack Needed = ${NoOfRackNeeded}
    Total Weight = ${TotalWeight}
    `);
  }
axios.post('https://batteryprojectbackend.herokuapp.com/batteryRecomendation/',data).then((data)=>{
 window.location.reload();
})
.catch((err)=>console.log(err));
window.setTimeout(()=>{
    setData({q1:'',q2:'',q3:'',q4:'',q5:'',q6:'',q7:'',q8:'',q9:'',q10:'',q11:'',q12:'',q13:'',q14:'',q15:''});
   
},3000)
}
else{
    console.log('Fill The Form First..');
  }
  }

    return (
        <>
<form className='d-block m-auto bg-white p-4' style={{width:'90%'}}>
<h2 className='col-12 text-center mb-5 fw-bold' style={{color:'lightblue'}}>Types of Battery </h2>

<p>1. What is the Level Of specific Power Needed?</p>
<div className='d-flex flex-row gap-5 col-12 mb-4'>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q1"  id="q1Option1" value="High Specific Energy" onChange={()=>setData({...data,q1:'High Specific Energy'})} checked={data.q1==='High Specific Energy'}/>
  <label className="form-check-label" htmlFor="q1Option1">
    High Specific Energy 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q1" id="q1Option2" value="Medium Specific Energy" onChange={()=>setData({...data,q1:'Medium Specific Energy'})} checked={data.q1==='Medium Specific Energy'}/>
  <label className="form-check-label" htmlFor="q1Option2">
    Medium Specific Energy
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"  name="q1" id="q1Option3" value="Medium Specific Energy" onChange={()=>setData({...data,q1:'Low Specific Energy'})} checked={data.q1==='Low Specific Energy'}/>
  <label className="form-check-label" htmlFor="q1Option3">
    Low Specific Energy
  </label>
</div>
</div>
<p>2. What is the safety level expected from the battery?</p>
<div className='d-flex flex-row gap-5 col-12 mb-4'>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q2"  id="q2Option1" value="High level of safety" onChange={()=>setData({...data,q2:'High level of safety'})} checked={data.q2==='High level of safety'}/>
  <label className="form-check-label" htmlFor="q2Option1">
   High level of safety ( Low risk of thermal runaway and excellent thermal stability) 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q2"  id="q2Option2" value="Medium level of safety" onChange={()=>setData({...data,q2:'Medium level of safety'})} checked={data.q2==='Medium level of safety'}/>
  <label className="form-check-label" htmlFor="q2Option2">
   Medium level of safety ( Morderate risk of thermal Runaway and Morderate thermal stability) 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"   name="q2" id="q2Option3" value="Low level of safety" onChange={()=>setData({...data,q2:'Low level of safety'})} checked={data.q2==='Low level of safety'}/>
  <label className="form-check-label" htmlFor="q2Option3">
     Low level of safety (high risk of thermal Runaway and dangerous chemical composition) 
  </label>
</div>
</div>
<p>3. What is the expected life span of the battery?</p>
<div className='d-flex flex-row gap-5 col-12 mb-4'>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q3" id="q3Option1" value="Long Life span" onChange={()=>setData({...data,q3:'Long Life span'})} checked={data.q3==='Long Life span'}/>
  <label className="form-check-label" htmlFor="q3Option1">
   Long Life span 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q3"  id="q3Option2" value="Medium Life Span" onChange={()=>setData({...data,q3:'Medium Life Span'})} checked={data.q3==='Medium Life Span'}/>
  <label className="form-check-label" htmlFor="q3Option2">
   Medium Life Span 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"  name="q3" id="q3Option3" value="Low Life Span" onChange={()=>setData({...data,q3:'Low Life Span'})} checked={data.q3==='Low Life Span'}/>
  <label className="form-check-label" htmlFor="q3Option3">
     Low Life Span 
  </label>
</div>
</div>
<p>4. What is expected budget for the batteries?</p>
<div className='d-flex flex-row gap-5 col-12 mb-4'>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q4"  id="q4Option1" value="High Cost" onChange={()=>setData({...data,q4:'High Cost'})} checked={data.q4==='High Cost'}/>
  <label className="form-check-label" htmlFor="q4Option1">
   High Cost 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q4" id="q4Option2" value="Medium Cost" onChange={()=>setData({...data,q4:'Medium Cost'})} checked={data.q4==='Medium Cost'}/>
  <label className="form-check-label" htmlFor="q4Option2">
   Medium Cost  
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"  name="q4" id="q4Option3" value="Low Cost" onChange={()=>setData({...data,q4:'Low Cost'})} checked={data.q4==='Low Cost'}/>
  <label className="form-check-label" htmlFor="q4Option3">
     Low Cost  
  </label>
</div>
</div>
<p>5. What is the expected Performance for the battries?</p>
<div className='d-flex flex-row gap-5 col-12 mb-4'>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q5" id="q5option1" value="High Perfermance" onChange={()=>setData({...data,q5:'High Perfermance'})} checked={data.q5==='High Perfermance'}/>
  <label className="form-check-label" htmlFor="q5option1">
   High Perfermance 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="q5" id="q5option2" value="Medium Perfermance" onChange={()=>setData({...data,q5:'Medium Perfermance'})} checked={data.q5==='Medium Perfermance'}/>
  <label className="form-check-label" htmlFor="q5option2">
   Medium Perfermance   
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"  name="q5" id="q5option3" value="Low Perfermance" onChange={()=>setData({...data,q5:'Low Perfermance'})} checked={data.q5==='Low Perfermance'}/>
  <label className="form-check-label" htmlFor="q5Option3">
     Low Perfermance 
  </label>
</div>
</div>
<h2 className='col-12 text-center mb-5 fw-bold' style={{color:'lightblue'}}>Battery dimension and Weight </h2>
<h5 style={{color:'lightblue'}}>1.	Battery Questions </h5>
<div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the weight of the battery module? </label>
      <input type="text" className="form-control" id="inputZip" placeholder='Weight' value={data.q6} onChange={(e)=>setData({...data,q6:e.target.value})} />
    </div>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the Dimension of the battery module?</label>
      <input type="text" className="form-control mb-2" id="inputZip" value={data.q7} onChange={(e)=>setData({...data,q7:e.target.value})} placeholder='lenght' />
      <input type="text" className="form-control mb-2" id="inputZip" placeholder='breadth' value={data.q8} onChange={(e)=>setData({...data,q8:e.target.value})} />
      <input type="text" className="form-control mb-2" id="inputZip" placeholder='height' value={data.q9} onChange={(e)=>setData({...data,q9:e.target.value})} />
    </div>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the rated capacity of the battery?</label>
      <input type="text" className="form-control" id="inputZip" placeholder='battery capacity' value={data.q10} onChange={(e)=>setData({...data,q10:e.target.value})} />
    </div>
    <h5 style={{color:'lightblue'}}>2.	Battery Rack Questions  </h5>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the weight of the battery Rack? </label>
      <input type="text" className="form-control" id="inputZip" placeholder='Weight' value={data.q11} onChange={(e)=>setData({...data,q11:e.target.value})}/>
    </div>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the Dimension of the battery Rack?</label>
      <input type="text" className="form-control mb-2" id="inputZip" placeholder='lenght' value={data.q12} onChange={(e)=>setData({...data,q12:e.target.value})}/>
      <input type="text" className="form-control mb-2" id="inputZip" placeholder='breadth' value={data.q13} onChange={(e)=>setData({...data,q13:e.target.value})}/>
      <input type="text" className="form-control mb-2" id="inputZip" placeholder='height' value={data.q14} onChange={(e)=>setData({...data,q14:e.target.value})}/>
    </div>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the required Capacity?</label>
      <input type="text" className="form-control" id="inputZip" placeholder='required capacity' value={data.q15} onChange={(e)=>setData({...data,q15:e.target.value})}/>
    </div>
     <button type="submit" onClick={submitHandler} className="btn btn-primary my-3">Submit</button>
</form>
            </>
    );
}

export default BatteryRecomendationForm
