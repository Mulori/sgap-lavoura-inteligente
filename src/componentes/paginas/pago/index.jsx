import Lottie from "lottie-react";
import confirmarLottie from "../../../componentes/lottie/pago.json";
import qrcode from '../../../imagens/qrcode.png'

function Pago() {    
    return (
        <div className="container">
        <div className="row mt-3">
            <div className="col-md-6 mt-4 d-flex align-items-center justify-content-center">
                <div className="text-center mt-5">
                    <div className="row">
                        <Lottie animationData={confirmarLottie} className="mx-auto" loop={true} autoPlay={true} style={{ height: 300 }} />
                    </div>
                    <div className="row">
                        <h2 className="mx-auto">Compra realizada com sucesso!</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="text-center mt-5">
                    <img src={qrcode} width={350} alt="QR Code" className="mx-auto d-block" />
                    <span style={{"fontWeight": "bold"}}>Escaneie o QR Code para ativar o piloto automático do seu implemento.</span>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Pago