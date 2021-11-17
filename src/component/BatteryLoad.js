import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const UserForm=()=>{
  const [data,setData]=React.useState({vessel_name:'',hotal_load:'',no_of_operations:'',DOD:'',no_of_generators:'',no_of_loads:'',duration_of_inter_charginb:''});
  const [profileData,setProfileData]=React.useState({q1:'',q2:'',q3:'',q4:'',q5:'',q6:'',q7:'',q8:'',q9:'',dischrg:''});
const [operationTypes,setOperationTypes]=React.useState([]);
const [duration,setDuration]=React.useState([]);
const [chargeAndDischarge,setChargeAndDischarge]=React.useState([]);
const [load,setLoad]=useState([]);
const [loadDuration,setLoadDuration]=useState([]);
const [Err,setErr] = React.useState('');
const [isErr,setIsErr]=React.useState(false);

 const getInputFields = inputNumber => {
    let inputFields = [];
    for (let i = 0; i < inputNumber; i++) {
      inputFields.push( <input type="text" id={`type${i}`} name={`type${i}`}
      className="form-control mb-2" 
      onChange={(e)=>setOperationTypes({...operationTypes,[e.target.name]:e.target.value})} 
      placeholder={`operation type ${i+1}`} />);
    }
    return inputFields;
  };

   const getDuration = inputNumber => {
    let inputFields = [];
    for (let i = 0; i < inputNumber; i++) {
      inputFields.push( <input type="text" className="form-control mb-2" name={`duration${i}`}  id="inputAddress"
       onChange={(e)=>setDuration({...duration,[e.target.name]:e.target.value})} 
      placeholder={`operation ${i+1} duration hours`}/>);
    }
    return inputFields;
  };
  const getChargeAndDischarge = inputNumber => {
    let inputFields = [];
    for (let i = 0; i < inputNumber; i++) {
      inputFields.push( <input type="text" className="form-control mb-2" name={`op${i}`} id="inputAddress"
       onChange={(e)=>setChargeAndDischarge({...chargeAndDischarge,[e.target.name]:e.target.value})} 
      placeholder={`operation ${i+1} charge/discharge`}/>);
    }
    return inputFields;
  };

  const getLoadType = inputNumber => {
    let inputFields = [];
    for (let i = 0; i < inputNumber; i++) {
      inputFields.push(  <input type="text" className="form-control mb-2" name={`load${i}`} id="inputZip" 
        onChange={(e)=>setLoad({...load,[e.target.name]:e.target.value})} 
      placeholder={`load ${i+1} duration KW` } />);
    }
    return inputFields;
  };

  const getLoadDuration = inputNumber => {
    let inputFields = [];
    for (let i = 0; i < inputNumber; i++) {
      inputFields.push(  <input type="text" className="form-control mb-2" name={`loadDuration${i}`} id="inputZip" 
       onChange={(e)=>setLoadDuration({...loadDuration,[e.target.name]:e.target.value})} placeholder={`loadDuration ${i+1} duration hours` }/>);
    }
    return inputFields;
  };


  const submitHandler=(e)=>{
e.preventDefault();
if(profileData.q1 && profileData.q2 && profileData.q3 && profileData.q4 && profileData.q5 && profileData.q6 && profileData.q7 && profileData.q8 && profileData.q9 && operationTypes && duration && chargeAndDischarge && load && loadDuration  ){
axios.post('https://batteryprojectbackend.herokuapp.com/',{profileData,operationTypes,duration,chargeAndDischarge,load,loadDuration}).then((data)=>{
  window.location.reload();
})
.catch((err)=>console.log(err));
window.setTimeout(()=>{
    setProfileData({q1:'',q2:'',q3:'',q4:'',q5:'',q6:'',q7:'',q8:'',q9:''});
    setData({vessel_name:'',hotal_load:'',no_of_operations:'',DOD:'',no_of_generators:'',no_of_loads:'',duration_of_inter_charginb:''});
},3000)
}else{
  console.log(data.q1);
  setErr('Fill the form completely');
  setIsErr(true);
  window.setTimeout(()=>{
setIsErr(false);
  },5000)
}
  }
 

return(<>
    <form className=' p-3 d-block m-auto bg-white border' style={{width:'90vw'}} >
  <div className=" form-row  w-100">
    <h4 style={{color:'lightblue'}}>Vessel Name:</h4>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputEmail4">What is the vessel Name?</label>
      <input type="text" className="form-control" value={profileData.q1} onChange={(e)=>setProfileData({...profileData,q1:e.target.value})} id="inputEmail4" placeholder="vessel name"/>
    </div>
    <h4 style={{color:'lightblue'}}>Load:</h4>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputPassword4">What is the Hotal load?</label>
      <input type="text" className="form-control" value={profileData.q2} onChange={(e)=>setProfileData({...profileData,q2:e.target.value})} id="inputPassword4" placeholder="Kw"/>
    </div>
    </div>
    <h4 style={{color:'lightblue'}}>Operation Type and Duration:</h4>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputPassword4">What is the number of different operations?</label>
      <input type="text" className="form-control" value={data.no_of_operations} onChange={(e)=>{
        setData({...data,no_of_operations:e.target.value})
        setProfileData({...profileData,q3:e.target.value});
    }} id="inputPassword4" placeholder="number of operations"/>
    </div>
  <div className="form-group my-3">
    {
   data.no_of_operations?(<label for="inputAddress">What are Types the operation?</label>):'' 
    }
    {getInputFields(parseInt(data.no_of_operations,10))}
  </div>
  <div className="form-group my-3">
    {
   data.no_of_operations?( <label for="inputAddress2">What is the duration of each operation?</label>):'' 
    }
      {getDuration(parseInt(data.no_of_operations,10))}
  </div>
  <div className="form-row ">
    <div className="form-group col-12 my-3">
       {
   data.no_of_operations?( <label for="inputCity">When to charge and discharge Battery?</label>):'' 
       }
     {getChargeAndDischarge(parseInt(data.no_of_operations,10))}
    </div>
     <div className="form-group col-12 my-3">
      <label htmlFor="inputCity">Total discharge time?</label>
      <input type="text" className="form-control" value={profileData.dischrg} onChange={(e)=>setProfileData({...profileData,dischrg:e.target.value})} id="inputCity" placeholder='hours'/>
    </div>
    <h4 style={{color:'lightblue'}}>Battery Capacity:</h4>
     <div className="form-group col-12 my-3">
      <label htmlFor="inputCity">What is the Depth of Discharge of the Battery?</label>
      <input type="text" className="form-control" value={profileData.q4} onChange={(e)=>setProfileData({...profileData,q4:e.target.value})} id="inputCity" placeholder='XX%'/>
    </div>
    <h4 style={{color:'lightblue'}}>Battery Available power and Charge Back Duration:</h4>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the Number of Generators Used?</label>
      <input type="text" className="form-control" value={profileData.q5} onChange={(e)=>setProfileData({...profileData,q5:e.target.value})} id="inputZip" placeholder='XX Generators' />
    </div>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the Nameplate Rating of  Generator? </label>
      <input type="text" className="form-control" value={profileData.q6} onChange={(e)=>setProfileData({...profileData,q6:e.target.value})} id="inputZip" placeholder='XX KW' />
    </div>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the percentage of Generator being used by the Load?</label>
      <input type="text" className="form-control" value={profileData.q7} onChange={(e)=>setProfileData({...profileData,q7:e.target.value})} id="inputZip" placeholder='XX %' />
    </div>
    <h4 style={{color:'lightblue'}}>Battery Rundown:</h4>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What are the Number of Loads need to be Powered by the battery?</label>
      <input type="text" className="form-control" id="inputZip" placeholder='Number of Loads' value={data.no_of_loads} onChange={(e)=>{setData({...data,no_of_loads:e.target.value});
    setProfileData({...profileData,q8:e.target.value});  
    }}
       />
    </div>
    <div className="form-group col-12 my-3">
        {
   data.no_of_loads?(<label for="inputZip">what are the Different Load types Needed to be Powered By the Battery and its required Power?</label>):'' 
       }
      {getLoadType(parseInt(data.no_of_loads,10))}
    </div>
    <div className="form-group col-12 my-3">
      {
       data.no_of_loads?(<label for="inputZip">What are the duration of each load?</label>):'' 
       }
      
      {getLoadDuration(parseInt(data.no_of_loads,10))}
    </div>
    <h4 style={{color:'lightblue'}}>Dual Charge/Discharge:</h4>
    <div className="form-group col-12 my-3">
      <label htmlFor="inputZip">What is the Duration of Intermediate charging?</label>
      <input type="text" className="form-control" value={profileData.q9} onChange={(e)=>setProfileData({...profileData,q9:e.target.value})} id="inputZip" placeholder='XX %' />
    </div>
  </div>
  <p className='text-danger'>{isErr?Err:''}</p>
  <button type="submit" onClick={submitHandler} className="btn btn-primary my-3">Submit</button>
</form>

</>)
}

export default UserForm;