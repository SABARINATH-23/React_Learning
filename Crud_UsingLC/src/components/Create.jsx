import { useState } from "react";

const Create = ()=>{
    let [uset, setUser] = useState();
    let handleInput = (e)=>{
        
    }

    return(
        <>
            <form>
                <input type="tel" name="id" placeholder="Enter id" onClick={handleInput}></input>
                <input type="text" name="Sname" placeholder="Enter Name"  onClick={handleInput}></input>
                <input type="tel" name="age" placeholder="Enter Age" onClick={handleInput}></input>
                <input type="email" name="email" placeholder="Enter Email" onClick={handleInput}></input>
                <input type="password" name="password" placeholder="Enter Password" onClick={handleInput}></input>
                <button>Create</button>
            </form>
        </>
    )
}
export default Create;