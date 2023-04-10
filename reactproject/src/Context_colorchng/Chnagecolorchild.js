import React, { useContext } from 'react'
import { GlobalInfo } from '../App';

const Chnagecolorchild = () => {

    const {h1color} = useContext(GlobalInfo);
    const {getDay} = useContext(GlobalInfo);
    const day ="sunday";
  return (
    <div>
      <h1 style={{color : h1color}}>Chnagecolorchild componnet</h1>
      <button onClick={()=>getDay(day)}> click me</button>
    </div>
  )
}

export default Chnagecolorchild
