import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/Login.module.css";
import Footer from "../components/Footer.jsx"; // Footer linkado

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // Cria usuário de teste se não houver nenhum
    useEffect(() => {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        if (usuarios.length === 0) {
            const usuarioTeste = { email: "teste@teste.com", senha: "123456" };
            localStorage.setItem("usuarios", JSON.stringify([usuarioTeste]));
        }
    }, []);

    function handleLogin(e) {
        e.preventDefault();

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const emailNormalizado = email.trim().toLowerCase();

        const usuario = usuarios.find(
            u => String(u.email).trim().toLowerCase() === emailNormalizado
        );

        if (!usuario) {
            alert("Email não cadastrado");
            return;
        }

        if (String(usuario.senha).trim() !== String(senha).trim()) {
            alert("Senha incorreta");
            return;
        }

        navigate("/", { state: { mensagem: "Login realizado com sucesso" } });
    }

    return (
        <div className={styles.page}>
            {/* HEADER */}
            <header className={styles.header}>
                <img src="../img/logo.png" alt="Luminaflix" className={styles.logo} />
                <button className={styles.voltar} onClick={() => navigate("/")}>
                    Voltar
                </button>
            </header>

            {/* CONTEÚDO */}
            <div className={styles.content}>
                <h1 className={styles.title}>LOGIN</h1>

                {location.state?.mensagem && (
                    <div className={styles.alert}>{location.state.mensagem}</div>
                )}

                <form className={styles.form} onSubmit={handleLogin}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit">Entrar</button>
                </form>

                <p
                    style={{ cursor: "pointer", marginTop: "20px" }}
                    onClick={() => navigate("/alterar-senha")}
                >
                    Esqueceu a senha?
                </p>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default Login;