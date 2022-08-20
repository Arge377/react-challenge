import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavbrandComponent = () => {
  return (
    <Link className="navbar-brand" to="/">
      <FontAwesomeIcon icon={faHouse}/>
    </Link>
)};

export default NavbrandComponent;