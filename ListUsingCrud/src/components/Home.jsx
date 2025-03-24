import React from "react";
import {Button,Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from"./Users"

const App =()=>{

  

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
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item. MobileNumber}</td>
                                <td>{item.Age}</td>
                            </tr>
                      })
                    }

            </tbody>
        </Table>
    </div>
    )

}

export default App;