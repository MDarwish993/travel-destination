import './Header.css'
import NavBar from '../navBar/NavBar';

function Header(){
    return(
        <div className="header">
             <h1>
                Travel Destination
            </h1>
            <NavBar />
        </div>
       
    );
}

export default Header;