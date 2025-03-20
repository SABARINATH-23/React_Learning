import { NavLink } from "react-router-dom";

const Navbar= ()=>{
    return(
        <>
           <div className="nav">
                <NavLink to={"/props"}><li>Props</li></NavLink>
                <NavLink to={"/Conditional"}><li>Conditional</li></NavLink>
                <NavLink to={"/list"}><li>List and Key</li></NavLink>
                <NavLink to={"/form"}><li>Form</li></NavLink>
                <li>useState</li>

           </div>
        </>
    )
}

export default Navbar;