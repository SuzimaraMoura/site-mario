//No document vai buscar no HTML onde vc quer alterar, guardando dentro de uma variável.
// Não esqueça de colocar o evento no HTML, como por exemplo o onclick.
const form = document.querySelector("form")
const mascara = document.querySelector(".mascara-formulario")


// Essa função é pra quando clicar no botão, aparecer o formulário, alterando o CSS no left e no transform.
// e nessa mesma função de clicar no botão a mácara que estava escondida aparece.
function cliqueiNoBotao() {
   form.style.left = "50%"
   form.style.transform = "translateX(-50%)"
   mascara.style.visibility = "visible"
}
// Essa função é para clicar na máscara, ou em qualquer lugar da tela, para o formulário e a máscara desaparecer.
// Então novamente modifica o estilo do CSS.
function cliqueiNaMasacara(){
    form.style.left = "-300px"
     mascara.style.visibility = "hidden"
   
}