
import { FormButtons, PrimaryActionButton, SideDrawer, TextInput } from '@patterninc/react-ui'
import React, { useReducer, useState } from 'react'



function Dummy() {

  const initialstate={
    city:'',
    statee:'',
    pincode:0

}

    const [isopen,IsOpenstate] = useState(false) 
    const [state,setState]=useState(initialstate)

    
    
    const inputHandler = (stateName: any, value: any) => {

        // console.log("hello"+stateName)
        const filedname = stateName;
        // console.log(filedname,value+"..");

          setState((prevState) => ({
            ...prevState,
            [filedname] : value
            
          }))
         
      }

      const reset = () => {
       
        setState((prevState) => ({
          ...prevState,
          ...initialstate
        }))
        console.log(JSON.stringify(state))
      }
     
     const func = ()=>
     {
      console.log(JSON.stringify(state)+"..")
        console.log(isopen)
        
     }


  return (
    
<div>
<div >
      <PrimaryActionButton buttonText="Open Form"  mainActionCallout={() => {
          IsOpenstate(!isopen) ; func();
        }}
        ></PrimaryActionButton>
       </div>
        <SideDrawer
            isOpen={isopen}
            closeCallout={()=>{IsOpenstate(!isopen)}}
            footerContent={<FormButtons 
                cancelButtonProps={{
                  onClick: () => {
                    reset()
                    IsOpenstate(!isopen)
                    func
                  },
                }}
               resetButtonProps={{
                  onClick:  ()=>{
                  reset()
                  // IsOpenstate(!isopen)
                  func
                },
                  
                }}
                saveButtonProps={{ onClick:  ()=>{
                  IsOpenstate(!isopen)
                  func
                },
                }} ></FormButtons>}
            headerContent="Basic Side Drawer"
        >
            
            <p>
            {' '}Side Drawer Content Goes here
            </p>

            <div
    style={{
      width: '300px'
    }}
  >
    <TextInput
      id="city"
      labelText="type city"
      stateName="city"
      type="text"
      value={state.city}
      callout={(stateName,value)=> inputHandler("city",value)}
    />
    <TextInput
      id="statee"
      labelText="type statee"
      stateName="statee"
      type="text"
      value={state.statee}
      callout={(stateName,value)=> inputHandler("statee",value)}
    />
     <TextInput
      id="pincode"
      labelText="type pincode"
      stateName="pincode"
      type="number"
      value={state.pincode}
      callout={(stateName,value)=> inputHandler("pincode",value)}
    />
     


  </div>
  <br></br>
          <h6>City : {state.city}</h6>
          <h6>state : {state.statee}</h6>
          <h6>pincode : {state.pincode}</h6>

            {JSON.stringify(state)}
        </SideDrawer>
    </div>
  )
}

export default Dummy


    // const init = { 
    //     city:'',
    //     state:'',
    //     country:''
        
    // };

    //  const[state,dispatch] = useReducer(reducer,init);

    //  function reducer(state: any, action: { type: any; value: any; }) {
    //     switch (action.type) {
    //       case "setCity":
    //         return {
    //           ...state,
    //           city: action.value,
    //         };
    //       case "setState":
    //         return {
    //           ...state,
    //           state: action.value,
    //         };
    //       case "reset":
    //         return init;
    //     }
    //   }
