import reactlogo from "../../assets/react.svg"
import "./Header.css"

const Header = () =>{
    return(
        <div className="logo-container">
            <img src={reactlogo} alt="react-logo" />
        </div>
    )
}

export default Header