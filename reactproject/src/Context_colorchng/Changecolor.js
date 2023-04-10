import React, { useContext } from 'react'
import {GlobalInfo} from '../App';
import Chnagecolorchild from './Chnagecolorchild';

const Changecolor = () => 
{
    const {h1color} = useContext(GlobalInfo);
    console.log(h1color);
  return (
    <div>
        <h1 style={{color : h1color}}>child component</h1>
        <Chnagecolorchild></Chnagecolorchild>
    </div>
  )
}

export default Changecolor
