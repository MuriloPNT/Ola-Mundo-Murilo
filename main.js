let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while (nomeUsuario == ""){
    nomeUsuario = prompt("Qual seu nome");
}

if(nomeUsuario == null){
    elemento.textContent = "seja bem vindo"
}else {
    elemento.textContent = nomeUsuario;
}