import Input from "../input/input.js";
import {MdVisibility} from 'react-icons/md'
import {MdVisibilityOff} from 'react-icons/md'
import { useState } from "react";
import {isEmpty, isEmail, isLength, isMatch} from "../helper/validate.js";
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: ''
}

const Register = () => {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(initialState);
    const {name, email, password, cf_password} = data

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleClick = ()=> {
        setVisible(!visible);
    };

    const register = async (e) => {
        e.preventDefault()
        //check fields
        if(isEmpty(name) || isEmpty(password))
        return toast("Please fill in all fields.", {
            className: 'toast-failed',
            bodyClassName: //8:21
        });
    }

    return ( <form>
        <Input type="text" text="Name" name="name" handleChange={handleChange}/>
        <Input type="text" text="Email" name="email" handleChange={handleChange}/>
        <Input
        name="password"
            type={visible ? "text" : "password"}
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            text="Password"
            handleClick={handleClick}
            handleChange={handleChange}
        />
        <Input
        name="cf_password"
            type={visible ? "text" : "password"}
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            text="Confirm Password"
            handleClick={handleClick}
            handleChange={handleChange}
        />
        <div className="login_btn">
            <button>register</button>
        </div>
    </form> );
}
 
export default Register;