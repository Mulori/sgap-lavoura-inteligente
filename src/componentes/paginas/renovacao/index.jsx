
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate, Navigate } from 'react-router-dom';

function Renovar() {   
    const Navegacao = useNavigate();

    const [pagamento, setPagamento] = useState('');
    const [select, setSelect] = useState(null);

    
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h2>Renovar</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                    <div class="mb-3">
                                        <label for="txtNumeroSerie" class="form-label">Nº Série:</label>
                                        <input type="text" class="form-control" id="txtNumeroSerie" placeholder="" value={"5987436589"} readOnly />
                                    </div>
                                    <div class="mb-3">
                                        <label for="txtNumeroSerie" class="form-label">Tipo:</label>
                                        <select class="form-select" aria-label="Default select example" onChange={() => setSelect()}>
                                            <option selected>Selecione uma opção</option>
                                            <option value="1">CENTER POINT</option>
                                            <option value="2">RANGER POINT</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="txtNumeroSerie" class="form-label">Pagamento:</label>
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setPagamento('1')} />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Cartão de Crédito
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setPagamento('2')} />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Boleto Bancário
                                        </label>
                                    </div>
                                        {
                                            !pagamento ? null :
                                            pagamento == "1" ?
                                                <div class="mb-3 mt-3">
                                                    <div class="form-check">
                                                        <label for="txtNumeroSerie" class="form-label">Numero do Cartão:</label>
                                                        <input type="text" class="form-control" id="txtNumeroCartao"  placeholder="Informe o numero do cartão" />
                                                    </div>
                                                    <div class="form-check">
                                                        <label for="txtNumeroSerie" class="form-label">Validade: (dd/mm)</label>
                                                        <input type="text" class="form-control" id="txtNumeroSerie"  placeholder="Ex: 09/28" />
                                                    </div>
                                                    <div class="form-check">
                                                        <label for="txtNumeroSerie" class="form-label">Código de Segurança: (CVC)</label>
                                                        <input type="text" class="form-control" id="txtNumeroSerie" placeholder="Ex: 999" />
                                                    </div>
                                                    <div class="form-check">
                                                        <label for="txtNumeroSerie" class="form-label">Nome como está no cartão:</label>
                                                        <input type="text" class="form-control" id="txtNumeroSerie" placeholder="Ex: Fulano de Tal" />
                                                    </div>
                                                    <div class="form-check">
                                                        <label for="txtNumeroSerie" class="form-label">CPF:</label>
                                                        <input type="text" class="form-control" id="txtNumeroSerie" placeholder="Ex: 999.999.999-99" />
                                                    </div>
                                                </div>
                                            : 
                                                <div class="mb-3 mt-3">
                                                    <div class="form-check">
                                                    <label for="txtNumeroSerie" class="form-label">CPF:</label>
                                                    <input type="text" class="form-control" id="txtNumeroSerie" placeholder="Ex: 999.999.999-99" />
                                                </div>
                                            </div>
                                                
                                        }
                                        <div class="mb-3 mt-3">
                                            <Link to="/pago"><button type="button" class="btn btn-primary w-100">Confirmar Compra</button></Link>
                                        </div>
                                    </div>                                    
                                </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>         
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Renovar