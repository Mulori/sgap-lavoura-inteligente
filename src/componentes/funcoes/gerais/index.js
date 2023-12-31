function removerMascara(texto) {
    return texto.replace(/\D/g, "");
}

function formataStringData(data) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
}
  
function formatarCPFCNPJ(v) {
    v = v.replace(/\D/g, "");
  
    if (v.length <= 11) {
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
      v = v.replace(/^(\d{2})(\d)/, "$1.$2");
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
      v = v.replace(/(\d{4})(\d)/, "$1-$2");
    }
  
    return v;
}

function formataDataHora(dataHora) {
      
    var obj = dataHora.toString().substring(0, 10);
    var obj_year = obj.split("-")[0];
    var obj_mouth = obj.split("-")[1];
    var obj_day = obj.split("-")[2];

    return obj_day + '/' + obj_mouth + '/' + obj_year;
}


export { removerMascara, formataStringData, formatarCPFCNPJ, formataDataHora };