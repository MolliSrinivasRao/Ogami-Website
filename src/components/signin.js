import { Link, useNavigate } from "react-router-dom";
import { basicUrl } from "../utils/api";
import axios from "axios";
import { useRef, useState } from "react";

function Signin() {
    const formRef = useRef(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
            email: formRef.current.email.value,
            password: formRef.current.password.value,
        }

        const loginurl = basicUrl + "/users/login";

        axios.post(loginurl, data)
            .then(result => {
                const { data } = result;
                console.log(data);
                if (data.token) {
                    const keys = Object.keys(data);
                    keys.foreach(e => localStorage.setItem(e, data[e]))
                    setError(null);
                    navigate("/");
                }
                else {
                    setError(data);
                }
            })

            .catch(err => console.log(err))
    }
    return (
        <div >
            <Link to={"/signup"}><h3>SIGN UP</h3></Link>
            <Link to={"/"}><h3>HOME</h3></Link>
            <h3> SIGN IN</h3>
            {error && <p>{error.err}</p>}
            <div>
                <form ref={formRef}>
                    <div>
                        <label>user id</label>
                        <input type="email" name="email"></input>
                    </div>
                    <div>
                        <label>password</label>
                        <input type="password" name="password"></input>
                    </div>
                    <button onClick={(e) => handleLogin(e)} >sumbit</button>
                </form>
            </div>
        </div>

    )
}
export default Signin;



