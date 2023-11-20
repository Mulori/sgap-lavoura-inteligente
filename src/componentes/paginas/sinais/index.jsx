
import { Link } from "react-router-dom"

function Sinais() {   
    


    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h2>Meus Sinais</h2>
                    </div>
                    <div className="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Sel</th>
                                <th scope="col">Nº Série</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Data de Compra</th>
                                <th scope="col">Data de Validade</th>
                                <th scope="col">Situação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  /></td>
                                    <th scope="row">9536543826</th>
                                    <td>CENTER POINT</td>
                                    <td>05/04/2023</td>
                                    <td>05/04/2024</td>
                                    <td><span class="badge bg-success">Ativo</span></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /></td>
                                    <th scope="row">8562485685</th>
                                    <td>CENTER POINT</td>
                                    <td>01/09/2022</td>
                                    <td>01/09/2023</td>
                                    <td><span class="badge bg-danger">Vencido</span></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  /></td>
                                    <th scope="row">8965745236</th>
                                    <td>RANGER POINT</td>
                                    <td>14/07/2023</td>
                                    <td>14/07/2024</td>
                                    <td><span class="badge bg-success">Ativo</span></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  /></td>
                                    <th scope="row">3684125792</th>
                                    <td>CENTER POINT</td>
                                    <td>14/07/2023</td>
                                    <td>14/07/2024</td>
                                    <td><span class="badge bg-success">Ativo</span></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  /></td>
                                    <th scope="row">6854732569</th>
                                    <td>RANGER POINT</td>
                                    <td>15/11/2023</td>
                                    <td>15/11/2024</td>
                                    <td><span class="badge bg-success">Ativo</span></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /></td>
                                    <th scope="row">5987436589</th>
                                    <td>CENTER POINT</td>
                                    <td>10/04/2021</td>
                                    <td>10/04/2022</td>
                                    <td><span class="badge bg-danger">Vencido</span></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  /></td>
                                    <th scope="row">9874565865</th>
                                    <td>CENTER POINT</td>
                                    <td>19/11/2023</td>
                                    <td>19/11/2024</td>
                                    <td><span class="badge bg-success">Ativo</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                    <div className="cad-footer p-3">
                        <div className="row w-100">
                            <div className="col-12  justify-content-end">
                                <Link to="/renovacao"><button type="button" class="btn btn-success mr-3">Renovar</button></Link> 
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default Sinais