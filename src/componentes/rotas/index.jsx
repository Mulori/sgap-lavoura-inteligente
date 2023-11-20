import { BrowserRouter, Routes, Route } from "react-router-dom";

import Painel from "../paginas/painel";
import Login from "../paginas/login";
import Sinais from "../paginas/sinais";
import Renovar from "../paginas/renovacao";
import Pago from "../paginas/pago";
import Navbar from "../layouts/navbar";

import RotaPrivada from "./rotasPrivadas";

function Rotas() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<RotaPrivada> <Painel /> </RotaPrivada>}/>       
                <Route path="/sinais" element={<RotaPrivada> <Sinais /> </RotaPrivada>}/>       
                <Route path="/renovacao" element={<RotaPrivada> <Renovar /> </RotaPrivada>}/>    
                <Route path="/pago" element={<RotaPrivada> <Pago /> </RotaPrivada>}/>   
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas