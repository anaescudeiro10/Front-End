import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import Logo from "../img/logo.png"; // ✅ Importe a logo

function Navbar() {
    return (
        <header className={styles.navbar}>
            {/* LOGO */}
            <h1 className={styles.logo}>
                <Link to="/">
                    <img src={Logo} alt="LuminaFlix" className={styles.logoImg} />
                </Link>
            </h1>

            {/* MENU */}
            <nav className={styles.menu}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/cadastro">Cadastro</Link>
            </nav>
        </header>
    );
}

export default Navbar;