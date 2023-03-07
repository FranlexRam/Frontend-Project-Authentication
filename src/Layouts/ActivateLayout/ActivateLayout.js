import './activateLayout.scss';
import { useNavigate } from "react-router-dom";

const ActivateLayout = ({history}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="activate">
            <p>
                Ready To Login ? 👉 <span onClick={handleClick}>Here</span>
            </p>
        </div>
    );
};
 
export default ActivateLayout;