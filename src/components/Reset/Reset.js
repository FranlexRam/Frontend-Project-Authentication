import Input from "../input/input";
import {MdVisibility} from 'react-icons/md';
import {MdVisibilityOff} from 'react-icons/md';
import { useState } from "react";

const Reset = () => {
    const [visible, setVisible] = useState(false);

    const handleClick = ()=> {
        setVisible(!visible);
    };

    return ( <form>
        <Input
            type={visible ? "text" : "password"}
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            text="New Password"
            handleClick={handleClick} />
        <Input
            type={visible ? "text" : "password"}
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            text="Confirm New Password"
            handleClick={handleClick} />
            <div className="login_btn">
                <button>reset</button>
            </div>
    </form> );
};
 
export default Reset;