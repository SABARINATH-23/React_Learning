import React from "react";
import {Button,Table} from "react-bootstrap";
import Users from"./Users"
import { NavLink } from "react-router-dom";



const Home =()=>{

  function setId(id,Name,Email,MobileNumber,Age)
  {

  }

  function deleted(id)
  {

  }

    return(
      <div style={{}}>
        <Table striped   bordered hover size="sm">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>MobileNumber</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
                    {
                      Users.map((item)=>{
                        return(
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.MobileNumber}</td>
                                <td>{item.Age}</td>
                                <td>
                                    <NavLink to={"/edit"} >
                                        <Button onClick={(e)=>setId(item.id,item.Name,item.Email,item.MobileNumber,item.Age)}  variant="primary">Edit</Button> 
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink to={"/delete"}>
                                     <Button onClick={(e)=>deleted(item.id)} variant="danger">Delete</Button>
                                    </NavLink>
                                </td>
                            </tr>
                        )
                      })
                    }

            </tbody>
        </Table>
      <NavLink className="d-grid gap-2" to={"/create"}>Create</NavLink>
    </div>
    )

}

export default Home;