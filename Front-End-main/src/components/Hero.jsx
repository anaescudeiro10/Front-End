import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.imageOverlay}></div>
            <div className={styles.content}>
                <span className={styles.badge}>Curadoria Exclusiva</span>

                <p>
                    Catálogo de filmes exclusivos. Sempre Haverá um destaque para sua semana.
                </p>
                <div className={styles.buttons}>
                    <a href="#catalogo" className={styles.primaryBtn}>
                        Explorar Catálogo
                    </a>
                    <a href="#promo" className={styles.secondaryBtn}>
                        Ver Promoções
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero