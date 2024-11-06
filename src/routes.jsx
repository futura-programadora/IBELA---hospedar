import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "../src/pages/cadastro/index";
import Login from "../src/pages/login/index";
import LoginAdmin from '../src/pages/login admin/index'
import Inicio from '../src/pages/inicio/index';
import InicioAdmin from "../src/pages/inicio do admin";
import Notificacoes from '../src/pages/notificacoes admin/index';
import VejaSeusCultos from '../src/pages/veja seus cultos agendados admin/index';
import BibliotecaDeCultos from '../src/pages/biblioteca de cultos admin/index';
import VerTextos from '../src/pages/ver textos do admin/index'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/login-admin" element={<LoginAdmin />} />

                <Route path="/cadastro" element={<Cadastro />} />


                <Route path="/inicio" element={<Inicio />} />

                <Route path="/inicio-admin" element={<InicioAdmin />} />

                <Route path="/notificacoes" element={<Notificacoes />} />

                <Route path="/veja-seus-cultos-adimin" element={<VejaSeusCultos />} />

                <Route path="/biblioteca-de-cultos" element={<BibliotecaDeCultos />} />

                <Route path="/ver-textos-do-admin" element={<VerTextos />}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
