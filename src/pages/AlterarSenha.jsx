import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/AlterarSenha.module.css";

function AlterarSenha() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");  // agora o usuário digita o email
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function handleAlterarSenha(e) {
        e.preventDefault();

        if (novaSenha.trim() !== confirmarSenha.trim()) {
            alert("As senhas não coincidem");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Normaliza o email
        const emailNormalizado = email.trim().toLowerCase();

        const index = usuarios.findIndex(
            u => String(u.email).trim().toLowerCase() === emailNormalizado
        );

        if (index === -1) {
            alert("Usuário não encontrado");
            return;
        }

        // Atualiza a senha com trim
        usuarios[index].senha = String(novaSenha).trim();

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Senha alterada com sucesso");

        navigate("/login", {
            state: { mensagem: "Senha alterada com sucesso" }
        });
    }

    return (
        <div className={styles.page}>
            {/* HEADER */}
            <header className={styles.header}>
                <h1 className={styles.logo}>LUMINAFLIX</h1>
                <button className={styles.voltar} onClick={() => navigate("/")}>
                    Voltar
                </button>
            </header>

            {/* CONTEÚDO */}
            <div className={styles.content}>
                <h1 className={styles.title}>ALTERAR SENHA</h1>

                <form className={styles.form} onSubmit={handleAlterarSenha}>

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Nova senha</label>
                    <input
                        type="password"
                        placeholder="Digite sua nova senha"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                        required
                    />

                    <label>Confirmar senha</label>
                    <input
                        type="password"
                        placeholder="Confirme sua nova senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                    />

                    <button type="submit">Salvar</button>

                </form>
            </div>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div>
                    <p>Telefone</p>
                    <p>(14) 99890-8095</p>
                </div>
                <div className={styles.footerCenter}>
                    <p>Copyright © 2024 Luminaflix</p>
                </div>
                <div className={styles.footerRight}>
                    <p>Email</p>
                    <p>luminaplay@gmail.com</p>
                </div>
            </footer>
        </div>
    )
}

export default AlterarSenha;