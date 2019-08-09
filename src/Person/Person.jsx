import React from 'react';
import './Person.css';
const person = (props) => {
    // console.log("two way data binding is working check ",props)
  // eslint-disable-next-line react/react-in-jsx-scope
  return  (
            <div className='Person'>
            {/* <p onClick={()=>{props.click("sdarshan")}}>hy I am {props.name} and I am {props.age} years old</p> */}

            <p>hy I am {props.name} and I am {props.age} years old</p>
            <h4>
                hi {props.children}
                here is input
                <input onChange={props.changed} value={props.name} />
            </h4>
            </div>
    )
}
export default person;