import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Cadastro.module.css";
import Footer from "../components/Footer.jsx"; // Footer linkado

function Cadastro() {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");

    function handleCadastro(e) {
        e.preventDefault();

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const emailNormalizado = email.trim().toLowerCase();

        const usuarioExiste = usuarios.find(
            u => String(u.email).trim().toLowerCase() === emailNormalizado
        );

        if (usuarioExiste) {
            alert("Email já cadastrado");
            return;
        }

        const novoUsuario = {
            cpf: cpf.trim(),
            email: emailNormalizado,
            telefone: telefone.trim(),
            senha: String(senha).trim(),
        };

        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");
        navigate("/login");
    }

    return (
        <div className={styles.page}>
            {/* HEADER */}
            <header className={styles.header}>
                <img src="/logo.png" alt="Luminaflix" className={styles.logo} />
                <button className={styles.voltar} onClick={() => navigate("/login")}>
                    Voltar
                </button>
            </header>

            <main className={styles.content}>
                <h1 className={styles.title}>CADASTRO</h1>

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

            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default Cadastro;