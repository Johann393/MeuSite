//funcionalidade dos botões
function DisplayHome() {
    document.getElementById("Home").style.display = "block";
    document.getElementById("Projetos").style.display = "none";
    document.getElementById("Contatos").style.display = "none";
}

function DisplayProjetos() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Projetos").style.display = "block";
    document.getElementById("Contatos").style.display = "none";
}

function DisplayContatos() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Projetos").style.display = "none";
    document.getElementById("Contatos").style.display = "block";
}
