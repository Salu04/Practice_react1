import React, { useContext } from 'react'
import { GlobalInfo } from '../App';

const Login = () => {

    const {changeStatus} = useContext(GlobalInfo);
  return (
    <div>
        <h1>login component : </h1>
        <p>Plaease logine here</p>
      <button onClick={()=>changeStatus(true)}>login</button>
    </div>
  )
}

export default Login
