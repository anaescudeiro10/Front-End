import styles from "../styles/Footer.module.css";
import LogoImg from "../img/logo.png"; // 🔥 Coloque seu logo na pasta /img

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <img src={LogoImg} alt="Logo Luminaflix" className={styles.logo} />

                <div className={styles.links}>
                    <div className={styles.contato}>
                        <h5>CONTATO</h5>
                        <p>Luminaflix@gmail.com</p>
                    </div>

                    <div className={styles.atendimento}>
                        <h5>Central de Atendimento</h5>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p className={styles.politica}>
                    Política de Privacidade | Termos de Uso
                </p>
                <p className={styles.cop}>© 2026 LuminaFlix</p>
            </div>
        </footer>
    );
}

export default Footer;