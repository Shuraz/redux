import React from 'react'
import { useDispatch } from "react-redux";
import {login, logout} from '../features/users'
function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{dispatch(login({name:"Suraj",age:30, email:"suraj@gmail.com"}))}}>Login</button>
            <button onClick={()=>{dispatch(logout())}}>Logout</button>
        </div>
    )
}

export default Login
