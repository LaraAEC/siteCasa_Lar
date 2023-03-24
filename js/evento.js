//Lógica da page Evento 'Escolha seu Evento' para encaminhar o usuário para a Ficha de personalização correspondente ao Evento escolhido.

const buttonChooseEvent = document.querySelector('#button-chooseEvent-category');
const selectChooseEvent = document.getElementsByTagName('select');

//Função que abre uma URL em outra página. Basta inserir a url relativa ou absoluta.
function openInNewTab(url) {
var win = window.open(url, '_blank');
win.focus();
}

//Colocando o botão Personalizar evento para ficar atento e abrir a url correspondente ao select escolhido
buttonChooseEvent.addEventListener('click', function(){
  if((selectChooseEvent[0].options[selectChooseEvent[0].selectedIndex]).textContent == "Casamento"){ //pegando o texto do select escolhido e comparando com as palavras determinantes.
    openInNewTab("fichaCasamento.html");
} else if((selectChooseEvent[0].options[selectChooseEvent[0].selectedIndex]).textContent == "Chá de Casa Nova"){
  openInNewTab("fichaChaCasaNova.html");
} else {
  openInNewTab("fichaChaBebe.html");
}
});
