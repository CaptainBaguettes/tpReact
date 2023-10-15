import ply from '../logo.jpg';
import { Link } from 'react-router-dom';
function Header(){
    return (
    <header>
        <img src={ply} alt ="log_ESGI"/>
        <nav>
            <Link to="/Accueil">Accueil !</Link>
            <Link to="/About">A propos !</Link>
            <Link to="/Contact">Contact !</Link>
            <Link to="/Guest">invités !</Link>
        </nav>
    </header>);
}

export default Header;