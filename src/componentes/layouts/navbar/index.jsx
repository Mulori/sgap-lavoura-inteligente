import { Link, useLocation, useNavigate } from 'react-router-dom'
import './styles.css'

function Navbar() {
    var Navegacao = useNavigate();

    function desconectar(){
      localStorage.clear();
      Navegacao("/login");
    }
    
    var caminho_atual = useLocation();
    if (caminho_atual.pathname !== '/login') {
        return (

            <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor": "#1b504d"}}>
              <div className="container-fluid ">
                <a className="navbar-brand text-light" href="#">SGAPP</a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item">
                      <Link to="/">
                        <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
                      </Link> 
                    </li>
                    <li className="nav-item">
                      <Link to="/sinais">
                        <a className="nav-link text-light">Meus Sinais</a>
                      </Link>                      
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Minha Conta
                      </a>
                      <ul className="dropdown-menu text-light" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item text-dark" href="#">Meu Perfil</a></li>
                        <li className="dropdown-divider text-dark"></li>
                        <li><a className="dropdown-item text-dark" onClick={() => desconectar()}>Desconectar</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        )
    }
}

export default Navbar