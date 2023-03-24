//Colocando as URL para serem acessadas através do menu 'todas as categorias' na página Produtos
let selectCategories = document.getElementsByTagName('select'); //coloco o select em uma variável
selectCategories[0].addEventListener('change', function() { //coloco ele inteiro para ficar atento ao evento mudanças; se mudar executar a função
    location.href=this.value; //a localização href vai mudar para a que estiver no value da option selecionada (esse valor foi colocado no HTML)
});

//Lógica do input para buscar em search os produtos na URL ou BD
let inputSearch = document.querySelector('#input-search');
let buttonSearch = document.querySelector('#button-search');

//definindo um rol de palavras a serem pesquisadas e colocando-os em um array.
const eletro = ["FOGAO", "ELETRONICOS", "ELETRO", "GELADEIRA", "COOKTOP", "MICROONDAS", "FREEZER", "AIRFRYE", "TELEVISAO", "GAME", "AUDIO", "SOM", "RADIO", "FONE", "TECNOLOGIA", "INFORMATICA"];
const home = ["CASA", "UTENSILIO", "UTENSILIOS"];
const paint = ["TINTAS", "TINTA", "PINTURA", "PINCEL", "ESPATULA"];
const door = ["PORTA", "PORTAS", "JANELA", "JANELAS", "FERRAGEM", "FERRAGENS"];
const hidraulic = ["HIDRAULICO", "BOMBA", "TORNEIRA", "CANO", "HIDRAULICOS", "BOMBAS", "TORNEIRAS", "CANOS"];
const bedroom = ["CAMA", "MESA", "BANHO", "BANHEIRO", "QUARTO", "LENÇOL", "TOALHA"];
const decoration = ["MOVEL", "MOVEIS", "CORTINA", "CORTINAS", "DECORAÇAO", "VASO"];
const bathroom = ["BANHEIRO", "SANITARIO", "PIA", "CUBA", "COZINHA"];
const construction = ["CONSTRUÇÃO", "CIMENTO", "GESSO", "TIJOLO"];
const floor = ["PISO", "REVESTIMENTO", "PORCELANATO"];
const lighting = ["ILUMINAÇAO", "LAMPADA", "ABAJUR"];
const tool = ["EPI", "FERRAMENTA", "SEGURANÇA", "EPIS", "FERRAMENTAS", "CHAVE", "FENDA", "MARTELO", "ALICATE", "TESOURA"];

function openInNewTab(url) { //função para ser usada a fim de abrir a URL de cada departamento
    var win = window.open(url, '_blank');
    win.focus();
  }

  //As comaprações são feitas jogando as palavras pesquisadas para letramaiuscula e tirando os acentos, para efeito de comparação das condicionais.
buttonSearch.addEventListener('click', function(){ //colocando no botão buscar um evento ouvidor, ao clicar executar a função.
    if(!(isNaN(inputSearch.value))) {//validação para que não digitem número, mas somente string
        alert("Busca inadequada. Não digite números.");
    } else if(eletro.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/eletro-e-eletronicos");
    }  else  if(home.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/casa");
    } else  if(paint.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/tintas-e-acessorios");
    } else  if(door.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/portas-janelas-e-ferragens");
    } else  if(hidraulic.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/materiais-hidraulicos-e-bombas");
    } else  if(bedroom.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/cama-mesa-e-banho");
    } else  if(decoration.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/moveis-e-decoracoes");
    } else  if(bathroom.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/banheiro-e-cozinha");
    } else  if(construction.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/materiais-de-construcao");
    } else  if(floor.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/pisos-e-revestimentos");
    } else  if(lighting.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/iluminacao");
    } else  if(tool.includes(((inputSearch.value).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
        openInNewTab("https://www.apotiguar.com.br/ferramentas-e-epis");
    } else if(inputSearch.value === "") {
        alert("Digite o que procura.");
    } else {
        alert("Não encontramos, busque com outra palavra-chave mais genérica.");
    }  
});

//Lógica dos Cards dos Produtos levarem o usuário à sua URL ou BD.
const cardPaint = document.querySelector('.card-paint'); //guardando o card em uma variável
cardPaint.addEventListener('click', function() { //evento ouvidor click
    openInNewTab("https://www.apotiguar.com.br/tintas-e-acessorios"); //função abrir a URL pasada como parâmetro
});
const cardHidraulic = document.querySelector('.card-hidraulic');
cardHidraulic.addEventListener('click', function() {
    openInNewTab("https://www.apotiguar.com.br/materiais-hidraulicos-e-bombas");
});
const cardElectronics = document.querySelector('.card-electronics');
cardElectronics.addEventListener('click', function() {
    openInNewTab("https://www.apotiguar.com.br/eletro-e-eletronicos");
});
const cardDoor = document.querySelector('.card-door');
cardDoor.addEventListener('click', function() {
    openInNewTab("https://www.apotiguar.com.br/portas-janelas-e-ferragens");
});
const cardHome = document.querySelector('.card-home');
cardHome.addEventListener('click', function() {
    openInNewTab("https://www.apotiguar.com.br/casa");
});
const cardBathroom = document.querySelector('.card-bathroom');
cardBathroom.addEventListener('click', function() {
    openInNewTab("https://www.apotiguar.com.br/banheiro-e-cozinha");
});
const cardDecoration = document.querySelector('.card-decoration');
cardDecoration.addEventListener('click', function() {
    openInNewTab("https://www.apotiguar.com.br/moveis-e-decoracoes");
});
