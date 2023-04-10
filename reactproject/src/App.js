import logo from './logo.svg';
import './App.css';
import Changecolor from './Context_colorchng/Changecolor';
import { createContext,useState } from 'react';
export const GlobalInfo = createContext();

function App() {
const [color , setColor]=useState('green');
const [day , setDay]=useState('Monday');
  const getDay=(item)=>
  {
    console.log(item);
    setDay(item);
  }
  return (
    <GlobalInfo.Provider value={{ h1color : color,getDay : getDay}}>
    <div className="App">
      
      {/*  data coming from superchild to parent */}
      <h1>App component {day}</h1>

       {/* using context hook --> parent to child*/}
      <Changecolor></Changecolor>


    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
