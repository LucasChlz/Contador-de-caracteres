function contador(){
    setInterval(function(){
        var txt = document.getElementById("msg");
        var txtcont = document.getElementById("txtcont");
        var valor = txt.value;
        var result1 = valor.length;
        txtcont.innerHTML = result1;
        txt.addEventListener("keydown",contador);
    },0000);   
}

window.addEventListener("load",contador);

function limitador(){
        var limite;
        limite = prompt("Digite o limite de caracteres desejado");
        if(isNaN(limite)){
            window.alert("Digite somente numeros");
        }else{
            var txt = document.getElementById("msg");
            var txtlimit = document.getElementById("txtlimit");
            var result = limite;
            txt.setAttribute("maxLength",limite);
            txtlimit.innerHTML = "/" + result;
            
            
            txt.addEventListener("keydown",contador);
        }
        
        
        
        

}

document.getElementById("btnlimit").addEventListener("click",limitador);




