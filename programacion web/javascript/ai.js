
sendButton.addEventListener("click",()=>{
    let resultado, mensaje;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        //comprueba si es nan
        if(isNaN(prevRes)){
            throw "Gracioso";
        }
        resultado = verificarAprobacion(9,5,mensaje);
        mensaje = definirMensaje(resultado);
    }catch(e){
        resultado = "¿eres gracioso?";
        mensaje = "he descubierto que intentas hackear el sitio";
    }
    abrirModal(resultado,mensaje, prevRes); // Pass the third parameter here
})