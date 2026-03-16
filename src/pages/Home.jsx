import Navbar from "../components/Navbar.jsx";
import MovieCard from "../components/MovieCard.jsx";
import styles from "../styles/Home.module.css";

import { useLocation } from "react-router-dom";

function Home() {

    const location = useLocation();

    return (
        <div className={styles.container}>

            <Navbar />

            {/* mensagem de sucesso do login */}
            {location.state?.mensagem && (
                <div className={styles.alert}>
                    {location.state.mensagem}
                </div>
            )}

            {/* Banner */}
            <section className={styles.banner}>
                <h2>SÓ AQUI NA LUMINAFLIX TEMOS</h2>

                <div className={styles.bannerContent}>
                    <h1>LUMINAFLIX</h1>
                    <h3>PROMOÇÃO ESPECIAL PARA FAMÍLIAS!</h3>

                    <p className={styles.discount}>25% DE DESCONTO</p>

                    <p>DESCONTO EXCLUSIVO PARA GRUPOS FAMILIARES</p>

                    <button className={styles.btn}>
                        GARANTA SEU DESCONTO AGORA
                    </button>
                </div>
            </section>

            {/* Em cartaz */}
            <section className={styles.section}>
                <h3>Em cartaz</h3>

                <div className={styles.grid}>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </section>

            {/* Em breve */}
            <section className={styles.section}>
                <h3>Em breve</h3>

                <div className={styles.grid}>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </section>

            {/* Mais assistidos */}
            <section className={styles.section}>
                <h3>Mais assistidos</h3>

                <div className={styles.grid}>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </section>

            {/* Recomendado */}
            <section className={styles.section}>
                <h3>Recomendado pra você</h3>

                <div className={styles.grid}>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>Copyright © 2024 Luminaflix</p>
            </footer>

        </div>
    );
}

export default Home;