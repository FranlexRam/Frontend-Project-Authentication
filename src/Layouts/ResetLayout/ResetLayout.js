// import { useParams } from "react-router-dom";
import Reset from "../../components/Reset/Reset";
import "./ResetLayout.scss";
import { useNavigate } from "react-router-dom";

const ResetLayout = ({history}) => {
    // const test = useParams()
    // console.log(test)
    let navigate = useNavigate();
    const handleClick = ()=> {
        navigate("/");
    };

    return ( <div className='authlayout'>
        {/* logo */}
        <div className='authlayout_logo'>
            <img src="../../assets/img/shuttle.svg" alt="logo" />
        </div>
        {/* form */}
        <Reset />
        {/* actions */}
        <p className='reset_p' onClick={handleClick}>login ?</p>
    </div> );
}
 
export default ResetLayout;