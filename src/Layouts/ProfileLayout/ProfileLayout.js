import Sidebar from "../../components/Sidebar/Sidebar.js";
import Appbar from "../../components/Appbar/Appbar.js";
import './profilelayout.css';

// const ProfileLayout = ({isLoggedIn,setIsLoggedIn}) => {
    const ProfileLayout = () => {
        // const {isLoggedIn,setIsLoggedIn} = props
    return (
        <div className="profilelayout"  >
            {/* appbar */}
            <Appbar />
            {/* sidebar */}
            <Sidebar />
            {/* content */}
            <div className="profilelayout_content">
                {/* feed */}
                {/* profile */}
            </div>
        </div>
    );
}
 
export default ProfileLayout;