import { NavLink } from "react-router-dom";
import Users from "./Users";

const Home = ()=>{
    let Json  = JSON.stringify(Users);
    let obj = JSON.parse(Json);
    
    localStorage.setItem("Users",Json);
    return(
        <div>
          <NavLink to={"/create"}><button>Create</button></NavLink>  
            <table border={"2px"}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                        <td>Passowrd</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                   {
                        obj.map((ele,index)=>{
                            return(
                                <tr key={index} >
                                    <td>{ele.id}</td>
                                    <td>{ele.Sname}</td>
                                    <td>{ele.age}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.password}</td>
                                    <td>
                                        <button>Update</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )

                        })
                   }
                </tbody>
            </table>

        </div>
    )
}

export default Home;