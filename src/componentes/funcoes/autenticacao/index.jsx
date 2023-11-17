function ValidaAutenticacao() {
    const codigo_usuario = localStorage.getItem("codigo_usuario_sgap");

    if (codigo_usuario) {
        return true;
    } else {
        return false;
    }
}

export default ValidaAutenticacao