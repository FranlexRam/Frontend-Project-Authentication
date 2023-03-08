import './sidebar.scss';

const Sidebar = () => {
    return ( <div className="sidebar">
        <div className="sidebar_menu">
            <ul>
                <li>
                    <p>feed</p>
                </li>
                <li>
                    <p>profile</p>
                </li>
                <li>
                    <p>logout</p>
                </li>
            </ul>
        </div>
    </div> );
}
 
export default Sidebar;