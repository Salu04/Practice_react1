import logo from './logo.svg';
import './App.css';
import Changecolor from './Context_colorchng/Changecolor';
import { createContext,useState } from 'react';
import Product from './Component/Product';
import Navbar from './Component/Navbar';
 
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Component/Login';
export const GlobalInfo = createContext();

function App() {
const [color , setColor]=useState('green');
const [day , setDay]=useState('Monday');
const [logstatus, setLogstatus]=useState(false);
  const getDay=(item)=>
  {
    console.log(item);
    setDay(item);
  }
  const changeStatus=(status)=>
  {
    console.log("log status"+status);
    setLogstatus(status);
  }
  return (
  
    <GlobalInfo.Provider value={{ h1color : color,getDay : getDay,changeStatus : changeStatus,logstatus: logstatus}}>
    <div className="App">
      <Navbar></Navbar>
     <Routes>
         <Route path="/product" element={<Product/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
     </Routes>

      {/*  data coming from superchild to parent */}
      <h1>App component {day}</h1>

       {/* using context hook --> parent to child*/}
      {/* <Changecolor></Changecolor> */}


    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
