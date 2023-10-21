import React, { useRef } from "react";
import '../style/Signup.css'
import { Link } from "react-router-dom";
import { basicUrl } from "../utils/api";
import axios from "axios";

function Signup() {

    const formRef=useRef(null)
    const handleRegister = (e) => {
        e.preventDefault();
        const data ={
            name:formRef.current.name.value,
            email:formRef.current.email.value,
            number:formRef.current.number.value,
            password:formRef.current.password.value,
            access:formRef.current.access.value
        };
        const registerUrl = basicUrl + "/users/register";
        // fetch(registerUrl,{
        //     method:"POST",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(result => console.log(result))
        // .catch(err => console.log(err))

        // we can use one of this ...........>>>>>>>>>>>>>>> fetch or axios  //

        axios.post(registerUrl,data)
        .then(result =>console.log(result))
        .catch(err=>console.log(err))
    }
    return (
        <div className="signup-bg">
            <Link to={"/Signin"}>Sign in</Link>
            <h1>Sign up</h1>
            <form ref={formRef}>
                <label>First Name</label>
                <input name="name" type="text"></input>

                <label>Email</label>
                <input name="email" type="email"></input>

                <label>Mobile Number</label>
                <input name="number" type="number"></input>

                <label>Password</label>
                <input name="password" type="password"></input>

                <label>Access</label>
                <input name="access" type="text"></input>

                <div>
                    <button type="button" onClick={(e) => handleRegister(e)} >register</button>
                </div>
            </form>


        </div>
    )
}
export default Signup;