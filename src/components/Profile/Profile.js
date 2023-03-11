import Avatar from '../Avatar/Avatar';
import {AiFillCamera} from 'react-icons/ai'
import { useRef } from 'react';
import './profile.scss';

const Profile = () => {
const inputFile = useRef(null)

    return ( <div className="profile">
        {/* avatar */}
        <div className="profile_avatar">
            <div className="profile_avatar-wrapper">
                <Avatar />
                <AiFillCamera />
            </div>
            <input type="file" name="avatar" ref={inputFile} className="profile_avatar-input" />
        </div>
        {/* form */}
    </div> );
}
 
export default Profile;