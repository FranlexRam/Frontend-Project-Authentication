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
    const {name, email, password, cf_password} = data //min 5:55

    const handleClick = ()=> {
        setVisible(!visible);
    };

    return ( <form>
        <Input type="text" text="Name"/>
        <Input type="text" text="Email"/>
        <Input
            type={visible ? "text" : "password"}
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            text="Password"
            handleClick={handleClick}
        />
        <Input
            type={visible ? "text" : "password"}
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            text="Confirm Password"
            handleClick={handleClick}
        />
        <div className="login_btn">
            <button>register</button>
        </div>
    </form> );
}
 
export default Register;