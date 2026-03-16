import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Sucesso from "./pages/Sucesso.jsx";
import AlterarSenha from "./pages/AlterarSenha.jsx";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/cadastro" element={<Cadastro />} />

                <Route path="/sucesso" element={<Sucesso />} />

                {/* recuperação de senha */}

                <Route path="/alterar-senha" element={<AlterarSenha />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;