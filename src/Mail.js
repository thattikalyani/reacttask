import React from 'react'
import './App.css';
import { useState } from 'react';

const Mail = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "20px",
        fontFamily: "Sans-Serif"
    };
    const myStyles = {
        color: "white",
        backgroundColor: "honeydew",
        padding: "20px",
        fontFamily: "Sans-Serif"
    };
    const [data, setDate] = useState({
        UserName: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
    })
    const { UserName, Email, Password, ConfirmPassword } = data;
    const changeHandler = e => {
        setDate({ ...data, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault();
        if (UserName.length <= 5) {
            alert("username must be atleast 5 characters")
        }
        else if (Password !== ConfirmPassword) {
            alert("Password not matched")
        }
        else {
            console.log(data)
        }
    }


    return (
        <div className='form'>
            <center>
                <form style={myStyles} onSubmit={submitHandler}>
                    <h1 style={myStyle}>Sign In</h1>

                    <label>UserName:</label><br/>
                    <input type="text" name="UserName" value={UserName} placeholder="UserName" onChange={changeHandler} /><br />
                    {UserName.length <= 5 ? <p style={{ "color": "red" }}>Username greater than 5 characters</p> : null}
                    <label>Email:</label><br/>
                    <input type="email" name="Email" value={Email} placeholder="Email" onChange={changeHandler} /><br />
                    <label>Password</label><br/>
                    <input type="password" name="Password" value={Password} placeholder="Password" onChange={changeHandler} /><br />
                    <label>ConfirmPassword:</label><br/>
                    <input type="password" name="ConfirmPassword" value={ConfirmPassword} placeholder="ConfirmPassword" onChange={changeHandler} /><br />
                    {Password !== ConfirmPassword ? <p style={{ "color": "red" }}>password not matching</p> : null}
                    <input type="submit" name="submit" />


                </form>
            </center>
        </div>
    )
}

export default Mail