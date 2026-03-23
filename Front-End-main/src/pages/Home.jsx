import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx"; // 🔥 Footer importado
import styles from "../styles/Home.module.css";
import { useLocation } from "react-router-dom";
import Bannerimg from "../img/Banner.png";

function Home() {
    const location = useLocation();

    const emCartaz = [
        { titulo: "Pânico 7", descricao: "Um novo assassino começa a aterrorizar a cidade.", ano: "2025", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/panico-7/30da3b1d-7b38-492c-85c3-790fcb5dbb7f.webp" },
        { titulo: "POV: Presença Oculta", descricao: "Presença invisível persegue jovens", ano: "2024", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/pov-presenca-oculta/4e50b252-56a7-48c6-a602-ffbe2db6b7df.webp" },
        { titulo: "Iron Lung", descricao: "Submarino preso em oceano de sangue", ano: "2023", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/iron-lung/419d02a3-7188-41d5-a890-290df091e720.webp" },
        { titulo: "Pecadores", descricao: "Mistério e suspense do começo ao fim.", ano: "2023", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/pecadores/7f6c9699-002e-43a8-adb3-49d2055014fd.webp" },
        { titulo: "Missão Refúgio", descricao: "Missão Refúgio", ano: "2023", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/missao-refugio/317e08d1-5553-424f-b07b-30b67a3e5d73.webp" },
        { titulo: "Kill Bill: The Whole Bloody Affair (Relançamento)", descricao: "Vingança sangrenta da Noiva assassina", ano: "2023", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/kill-bill-the-whole-bloody-affair-relancamento/d0c84b12-7637-4642-a453-3e2372e31692.webp" },
    ];

    const emBreve = [
        { titulo: "Turbulência", descricao: "Sequestro aéreo com serial killer", ano: "19/03", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/turbulencia/a7f9e048-0273-4709-bdb5-834733bc6e46.webp" },
        { titulo: "Eles Vão Te Matar", descricao: "Sobrevivência contra assassinos implacáveis", ano: "26/03", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/eles-vao-te-matar/7ce088e5-7235-45a7-98bd-13d319b1d194.webp" },
        { titulo: "Super Mario Galaxy - O Filme", descricao: "Aventura espacial para salvar universo", ano: "01/04", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/super-mario-galaxy-o-filme/00978658-0fb5-4b25-a397-7257fad34cf0.webp" },
        { titulo: "Os Estranhos: Capítulo Final", descricao: "Ataque brutal de estranhos mascarados", ano: "09/04", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/os-estranhos-capitulo-final/df8ee4a3-0bb4-466b-961c-df2b0695fc09.webp" },
        { titulo: "A Odisseia", descricao: "Jornada épica de retorno para casa", ano: "16/07", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/a-odisseia/cbb9db31-a9ad-4487-b4af-3e771e5e71e5.webp" },
        { titulo: "Mestres Do Universo", descricao: "Heróis lutam contra vilão poderoso", ano: "04/06", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/mestres-do-universo/deec0101-32cd-46cd-a579-c304f8fab994.webp" },
    ];

    const maisAssistidos = [
        { titulo: "Avatar", descricao: "Humano vive entre alienígenas Pandora", ano: "2009", imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg" },
        { titulo: "Vingadores: Ultimato", descricao: "Batalha final para salvar universo", ano: "2019", imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg" },
        { titulo: "Shrek", descricao: "Soldado revive batalha contra alienígenas", ano: "2001", imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg" },
        { titulo: "No Limite do Amanha", descricao: "Aventura espacial para salvar universo", ano: "2014", imagem: "https://br.web.img2.acsta.net/c_310_420/pictures/14/05/27/15/43/549754.jpg" },
        { titulo: "Ilha do Medo", descricao: "Investigação revela segredos perturbadores", ano: "2010", imagem: "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg" },
        { titulo: "Batman - Cavaleiro das Trevas", descricao: "Herói enfrenta vilão caótico implacável", ano: "2008", imagem: "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01448-dbf50c14e2a7dc11f217181324985634-1024-1024.webp" },
    ];

    const recomendado = [
        { titulo: "O Agente Secreto", descricao: "Espião envolvido em conspiração mortal", ano: "2025", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/o-agente-secreto/47039d63-8d09-4ab4-a6b3-4ae242d22c2b.webp" },
        { titulo: "Blue Moon & O Bom Bandido", descricao: "Romance marcado por encontros e destino", ano: "2025", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/os-estranhos-capitulo-final/df8ee4a3-0bb4-466b-961c-df2b0695fc09.webp" },
        { titulo: "Bugonia & Código Preto", descricao: "Conspiração alienígena com humor estranho", ano: "2025", imagem: "https://br.web.img3.acsta.net/c_310_420/img/cb/cc/cbcc71a56e3f3743269027af475cba66.jpg" },
        { titulo: "Apocalypto (Mel Gibson)", descricao: "Fuga intensa para sobreviver à captura", ano: "2006", imagem: "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/86/97/41/19870692.jpg" },
        { titulo: "Soul (Pixar)", descricao: "Professor busca propósito além da vida", ano: "2020", imagem: "https://br.web.img2.acsta.net/c_310_420/pictures/20/10/09/10/12/0923276.jpg" },
        { titulo: "Oppenheimer", descricao: "Criação da bomba e dilemas morais", ano: "2023", imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/23/05/08/10/29/0695770.jpg" },
    ];

    function renderLinha(lista) {
        return (
            <div className={styles.linha}>
                {lista.map((filme, index) => (
                    <div key={index} className={styles.card}>
                        <img src={filme.imagem} alt={filme.titulo} />
                        <div className={styles.overlay}>
                            <h3>{filme.titulo}</h3>
                            <p>{filme.descricao}</p>
                            <span>{filme.ano}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Navbar />

            {location.state?.mensagem && (
                <div className={styles.alert}>{location.state.mensagem}</div>
            )}

            {/* BANNER */}
            <section
                className={styles.hero}
                style={{ backgroundImage: `url(${Bannerimg})` }}
            >
                <div className={styles.overlayBanner}></div>
                <div className={styles.heroContent}>
                    <h1>LUMINAFLIX</h1>
                    <p>Catálogo de filmes exclusivos. Sempre haverá um destaque para sua semana.</p>
                    <div className={styles.buttons}>
                        <button className={styles.play}>Ver Promoções</button>
                        <button className={styles.info}>Mais informações</button>
                    </div>
                </div>
            </section>

            {/* SEÇÕES */}
            <section className={styles.section}>
                <h2>Em cartaz</h2>
                {renderLinha(emCartaz)}
            </section>

            <section className={styles.section}>
                <h2>Em breve</h2>
                {renderLinha(emBreve)}
            </section>

            <section className={styles.section}>
                <h2>Mais assistidos</h2>
                {renderLinha(maisAssistidos)}
            </section>

            <section className={styles.section}>
                <h2>Recomendado pra você</h2>
                {renderLinha(recomendado)}
            </section>

            {/* 🔥 Footer como componente */}
            <Footer />
        </div>
    );
}

export default Home;