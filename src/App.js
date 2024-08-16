// import logo from './logo.svg';
// import './App.css';

// import Header from './Header';


// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//        */}
//        <header className="main-header">
//         <Header backgroudColor={'#3f3d36'}/>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React from "react";
import "./styles.css";

import Home from "./components/home/Home";
import Volunteer from "./components/Volunteer/Volunteer";
import CommunitySupport from "./components/CommmunitySupport/CommunitySupport";
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    // <div className="App">
    //   {/* <Header title="Dementia Helper" subtitle="     " />
    //   <Main message="Help is just a click away" />
    //   <Footer note="Deutsche Bank" /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Volunteer' element={<Volunteer/>}/>
        <Route path='/CommunitySupport' element={<CommunitySupport/>}/>
      </Routes>
    // </div>
  )
}

