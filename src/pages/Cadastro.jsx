import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Cadastro.module.css";

function Cadastro() {
    const navigate = useNavigate();

    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");

    function handleCadastro(e) {
        e.preventDefault();

        // Pega os usuários ou cria um array vazio
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Normaliza email e senha
        const emailNormalizado = email.trim().toLowerCase();
        const senhaNormalizada = String(senha).trim();

        // Checa se já existe
        const usuarioExiste = usuarios.find(
            (u) => String(u.email).trim().toLowerCase() === emailNormalizado
        );

        if (usuarioExiste) {
            alert("Email já cadastrado");
            return;
        }

        // Cria novo usuário
        const novoUsuario = {
            cpf: cpf.trim(),
            email: emailNormalizado,
            telefone: telefone.trim(),
            senha: senhaNormalizada,
        };

        usuarios.push(novoUsuario);

        // Salva no localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");

        navigate("/login");
    }

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.logo}>LUMINA FLIX</div>
                <button className={styles.voltar} onClick={() => navigate("/login")}>
                    Voltar
                </button>
            </header>

            <main className={styles.content}>
                <h1 className={styles.title}>LUMINAFLIX</h1>

                <form className={styles.form} onSubmit={handleCadastro}>
                    <label>CPF</label>
                    <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Telefone</label>
                    <input
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        maxLength={8}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit">Cadastrar</button>
                </form>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerLeft}>
                    <h2>LUMINA FLIX</h2>
                </div>
                <div className={styles.footerCenter}>
                    <h3>CONTATO</h3>
                    <p>Luminaflix@gmail.com</p>
                </div>
                <div className={styles.footerRight}>
                    <p>Central de Atendimento</p>
                    <p>FAQ</p>
                </div>
            </footer>
        </div>
    );
}

export default Cadastro;