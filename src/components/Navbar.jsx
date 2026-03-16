import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar(){
    return(
        <header className={styles.navbar}>

            <h1 className={styles.logo}>LUMINAFLIX</h1>

            <nav className={styles.menu}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/cadastro">Cadastro</Link>
            </nav>

        </header>
    )
}

export default Navbar;