import { Link } from "react-router-dom";
import NavbrandComponent from "./NavbrandComponent";
import NavTogglerComponent from "./NavtogglerComponent";

function NavbarComponent(){
    return (
        <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavbrandComponent/>
                <NavTogglerComponent/>
            </div>
        </nav>
    );
}

export default NavbarComponent; 