import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap';

const Create = () => {

const [Id,setId] = useState("");
const [Name,setName] = useState("");
const [Email,setEmail] = useState("");
const [MobileNumber,setMobileNumber] = useState("");
const [Age,setAge] = useState("");

let handleSubmit = (e)=>
{
  e.preventDefault();
}
  return (
   <>
      <form>
         <input type="tel" placeholder='Enter Id' required onChange={(e)=>setId(e.target.value)} />
         <input type="text" placeholder='Enter Name' required onChange={(e)=>setName(e.target.value)} />
         <input type="email" placeholder='Enter Email' required onChange={(e)=>setEmail(e.target.value)} />
         <input type="tel" placeholder='Enter MobileNumber' required onChange={(e)=>setMobileNumber(e.target.value)} />
         <input type="tel" placeholder='Enter Age' required onChange={(e)=>setAge(e.target.value)} />
        <button onClick={(e)=> handleSubmit(e)}>Submit</button>
        <NavLink to={"/"}><button>Back</button></NavLink>
      </form>
   </>
  )
}

export default Create;