import Sidebar from "../../components/Sidebar/Sidebar.js";
import Appbar from "../../components/Appbar/Appbar.js";
import './profilelayout.css';
import { useState } from "react";

// const ProfileLayout = ({isLoggedIn,setIsLoggedIn}) => {
    const ProfileLayout = () => {
        // const {isLoggedIn,setIsLoggedIn} = props
        const [sidebar, setSidebar] = useState(false)

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
                {/* profile */}
            </div>
        </div>
    );
}
 
export default ProfileLayout;