import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './avatar.scss';

const Avatar = ({avatar}) => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return ( 
        <div className="avatar">
            <img src={avatar ? avatar : user.avatar} alt="avatar" />
        </div> 
    );
};
 
export default Avatar;