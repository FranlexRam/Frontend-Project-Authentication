import Profile from "../../components/Profile/Profile.js";
import Feed from "../../components/Feed/Feed.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Appbar from "../../components/Appbar/Appbar.js";
import './profilelayout.css';
import { useState } from "react";


// const ProfileLayout = ({isLoggedIn,setIsLoggedIn}) => {
    const ProfileLayout = () => {
        // const {isLoggedIn,setIsLoggedIn} = props
        const [sidebar, setSidebar] = useState(false)
        
        /* Funcion que permite al usuario dar click en el icono menu
         para desplegar el sidebar */
        const handleSidebar = () =>{
            setSidebar(!sidebar)
        }


    return (
        <div className="profilelayout"  >
            {/* appbar */}
            <Appbar handleSidebar={handleSidebar} />
            {/* sidebar */}
            <div className={sidebar ? "profilelayout_sidebar open" : "profilelayout_sidebar"}>
                <Sidebar />
            </div>
            {/* content */}
            <div className="profilelayout_content">
                {/* feed */}
                <div className="profilelayout_content-feed">
                    <Feed />
                </div>
                {/* profile */}
                <div className="profilelayout_content-profile">
                    <Profile />
                </div>
            </div>
        </div>
    );
}
 
export default ProfileLayout;