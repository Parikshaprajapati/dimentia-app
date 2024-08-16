import React from "react";
import "./Main.css";
import PurpleRibbon from "../../Images/purpleRibbon.jpg";
import Volunteer from "../Volunteer/Volunteer";
import { useNavigate } from "react-router-dom";

export default function Header(props) {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Volunteer`; 
    navigate(path);
  }

  const routeChangeCommunity = () =>{ 
    let path = `/CommunitySupport`; 
    navigate(path);
  }

  return (
    <div className="main" >
      <h2>{props.message}</h2>
      <div className="ImageClass">
      <img  style ={{width: '400pxa'}} src={PurpleRibbon} />
      
      <div className="centered" style={{position: 'absolute', color: 'white', backgroundColor: 'purple', padding: '20px', width: '250px'}}>
      People with dementia, their carers and families worldwide continue to experience stigma, discrimination and human rights violations. Moreover, dementia is frequently misconceived as a natural and inevitable part of ageing. The first step to dispelling myths and stereotypes is to provide accurate information to improve public understanding of dementia.
      <div style={{marginTop: '5px', font: 'bold', color:'purple',width:'100%'}}>
      <button  onClick={routeChangeCommunity} color='purple'>Community Support</button>
      </div>
      <div style={{marginTop: '5px', font: 'bold', color:'purple',width:'100%'}}> 
      <button onClick={routeChange} > Volunteer Portal</button>
      </div>

      </div>


      </div>
    </div>
  );
}
