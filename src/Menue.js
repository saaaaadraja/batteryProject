import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './component/BatteryLoad';
import BatteryRecomendationForm from './component/batteryRecomendationForm';
import MultiAxisLine from './component/Graph';
import CSV from './component/CSV'

function Menue() {
  const [home,setHome]=React.useState(true);
  const [profile,setProfile]=React.useState(false);
  const [graph,setGraph]=React.useState(false);
  const [csv,setCsv]=React.useState(false);
    return (<>
   <ul className="nav nav-tabs w-100" id="myTab" role="tablist">
  <li className="nav-item " style={{width:'25%'}}>
    <a className={`nav-link w-100 text-center ${home?'active':''}`} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" onClick={(e)=>{
      setProfile(false);
      setHome(true);
      setGraph(false);
      setCsv(false);
    }}>Load Profile</a>
  </li>
  <li className="nav-item" style={{width:'25%'}}>
    <a className={`nav-link w-100 text-center ${profile?'active':''}`}  id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" onClick={(e)=>{
      setProfile(true);
      setHome(false);
      setGraph(false);
      setCsv(false);
      }}> Battery Recommendation</a>
  </li>
  <li className="nav-item " style={{width:'25%'}}>
    <a className={`nav-link w-100 text-center ${graph?'active':''}`}  id="graph-tab" data-toggle="tab" href="#graph" role="tab" aria-controls="graph" aria-selected="false" onClick={(e)=>{
      setProfile(false);
      setHome(false);
      setGraph(true);
       setCsv(false);
      }}>Graph</a>
  </li>
  <li className="nav-item " style={{width:'25%'}}>
    <a className={`nav-link w-100 text-center ${csv?'active':''}`}  id="csv-tab" data-toggle="tab" href="#csv" role="tab" aria-controls="csv" aria-selected="false" onClick={(e)=>{
      setProfile(false);
      setHome(false);
      setGraph(false);
      setCsv(true);
      }}>CSV Files</a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
 <div className="tab-content" id="nav-tabContent">
  <div className={`tab-pane fade ${home?'show active':''}`} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" style={{backgroundColor:'rgb(246 248 252)'}}><UserForm/></div>
  <div className={`tab-pane fade ${profile?'show active':''}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" style={{backgroundColor:'rgb(246 248 252)'}} ><BatteryRecomendationForm/></div>
   <div className={`tab-pane fade ${graph?'show active':''}`} id="nav-graph" role="tabpanel" aria-labelledby="nav-graph-tab" style={{backgroundColor:'rgb(246 248 252)'}} ><MultiAxisLine/></div>
    <div className={`tab-pane fade ${csv?'show active':''}`} id="nav-csv" role="tabpanel" aria-labelledby="nav-csv-tab" style={{backgroundColor:'rgb(246 248 252)'}} ><CSV/></div>
  
</div>
</div>    
 </>   )
}

export default Menue


