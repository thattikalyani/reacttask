import React, { useState } from 'react'
import "./App.css";

import data from "./db.json";

const UserDetails = () => {
    const [details, setDetails] = useState(data);
    const [addformdata, setAddformdata] = useState({
        Id: "",
        Name: "",
        Email: "",
        Address: "",
    })
    const ChangeHandler = (e) => {
        e.preventDefault();
        const fieldname = e.target.getAttribute("Name");
        const fieldvalue = e.target.value;
        const newformdata = { ...addformdata };
        newformdata[fieldname] = fieldvalue;
        setAddformdata(newformdata);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const Newdetails = {
            Id: addformdata.Id,
            Name: addformdata.Name,
            Email: addformdata.Email,
            Address: addformdata.Address,
        };
        const newdetails = [...details, Newdetails];
        setDetails(newdetails);
    };

    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>Id:</th>
                        <th>Name:</th>
                        <th>Email:</th>
                        <th>Address:</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((details) => (
                        <tr>
                            <td>{details.Id}</td>
                            <td>{details.Name}</td>
                            <td>{details.Email}</td>
                            <td>{details.Address}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <h3>Add users</h3>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="Id"
                    placeholder='Enter Id:'
                    onChange={ChangeHandler}
                />
                <input
                    type="text"
                    name="Name"
                    placeholder='Enter Name:'
                    onChange={ChangeHandler}
                />
                <input
                    type="text"
                    name="Email"
                    placeholder='Enter Email:'
                    onChange={ChangeHandler}
                />
                <input
                    type="text"
                    name="Address"
                    placeholder='Enter Address:'
                    onChange={ChangeHandler}
                />
                <button>Submit</button>
            </form>

        </div>
    )

}

export default UserDetails