import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/AlterarSenha.module.css";
import Footer from "../components/Footer.jsx"; // Footer linkado

function AlterarSenha() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function handleAlterarSenha(e) {
        e.preventDefault();

        if (novaSenha.trim() !== confirmarSenha.trim()) {
            alert("As senhas não coincidem");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const emailNormalizado = email.trim().toLowerCase();
        const index = usuarios.findIndex(
            u => String(u.email).trim().toLowerCase() === emailNormalizado
        );

        if (index === -1) {
            alert("Usuário não encontrado");
            return;
        }

        usuarios[index].senha = String(novaSenha).trim();
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Senha alterada com sucesso");
        navigate("/login", { state: { mensagem: "Senha alterada com sucesso" } });
    }

    return (
        <div className={styles.page}>
            {/* HEADER */}
            <header className={styles.header}>
                <img src="/logo.png" alt="Luminaflix" className={styles.logo} />
                <button className={styles.voltar} onClick={() => navigate("/")}>
                    Voltar
                </button>
            </header>

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
            <Footer />
        </div>
    );
}

export default AlterarSenha;