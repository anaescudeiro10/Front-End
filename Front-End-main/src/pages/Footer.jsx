import styles from "../styles/Footer.module.css";

function Footer(){
    return(
        <footer className={styles.footer}>
            <img src="/logo.png" alt="Logo" className={styles.logo}/>
            <p className={styles.cop}>Copyright © 2026 LuminaFlix</p>

            <div className={styles.contato}>
                <h5>CONTATO</h5>
                <p>Luminaflix@gmail.com</p>
            </div>

            <div className={styles.atendimento}>
                <h5>Central de Atendimento</h5>
                <p>FAQ</p>
            </div>


            <p className={styles.politica}>Política de Privacidade | Termos de uso</p>
        </footer>
    )
}

export default Footer