import { useState } from "react";

const Form = ()=>{


    let [sName,Setsname] = useState('')
    let SubmitForm = (e)=>
    {
            e.preventDefault();        
    }

    let nameChange = (e)=>{
       Setsname(e.target.sName);
       console.log(sName);
    }



    return(
        <>
            <form action="" onSubmit={SubmitForm}>
            <input type="text" placeholder="Enter your Name" onChange={nameChange}></input>
            <input type="email" placeholder="Enter Email id"></input>
            <input type="password" placeholder="Enter Password"></input>
            <button>Submit</button>
            </form>
        </>
    )
}

export default Form;