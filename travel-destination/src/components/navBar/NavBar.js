import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div>
             <nav>
             <Link to="/" className='links'>Home</Link>
            </nav>
        </div>
       
    )
}

export default NavBar;