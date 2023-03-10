import {BiMenuAltLeft} from 'react-icons/bi'
import Avatar from "../Avatar/Avatar.js"
import './appbar.scss';

const Appbar = ({handleSidebar}) => {
    return ( <div className="appbar">
        <div className="appbar_wrapper">
            {/* logo */}
            <div className="appbar_logo">
                <img src="./assets/img/shuttle.svg" alt="logo" />
                <p>mernauth</p>
            </div>
            {/* avatar */}
            <div className="appbar_avatar">
                <Avatar />
                <BiMenuAltLeft onClick={handleSidebar} />
            </div>
        </div>
    </div> );
}

export default Appbar;