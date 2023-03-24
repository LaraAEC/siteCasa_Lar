//Lógica para submeter os dados dos Fomulários das Fichas de Inscrição do Evento para fazer a Lista de Presentes
//Capturando os dados do formulário e submetendo-os para a API.
//Colocando o Botão Salvar para salvar
const formEl = document.getElementById('my-event-form'); //capturando o formulário e colocando em uma constante(não vai mudar durante o tempo de execução)
formEl.addEventListener('submit', evento => { //add um evento fique atento no form, se acontecer o submit fazer a função designada
  evento.preventDefault(); //previnir o padrão, não quero que recarregue a página como o submit faz por padrão

  const formData = new FormData(formEl); //instanciando um formData, passamos nosso formulário
  const data = Object.fromEntries(formData); //criando nossos dados passando nosso formData
    //console.log(data); //dá pra ver todos os inputs capturados com chave e valor correspondente.
    
    //Transformar esses dados em json e enviar para nossa API
    //pede o parametro da URL e os dados da requisição
    //Vou usar o método fetch que é uma promessa, quando ele cumpri e pega o que prometeu digo 'então faça isso' eu daí vou usar os then no final dele.
  fetch('https://reqres.in/api/users', { 
      method: 'POST', //método post pois estamos enviando um dado novo para ser criado
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
//Pronto dá para ver no console a resposta do Servidor dizendo que foi criado essa ficha em dia e hora tal. 
//Clicando em Network -> -> status 201 que significa que o Servidor está dizendo que recebeu uma requisição e foi criado um novo recurso.
//Headers -> dá pra ver a URL que usamos, a API (que no caso foi a reqest que é de teste para frontend).
//Payload -> dá para ver a parte útil da mensagem. Sem contar com cabeçalhos e Metadados.
  
  
//Colocando o Botão Salvar e Fazer Lista para encaminhar para a página de Fazer a Lista.
  function openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
      } 
    
  openInNewTab("https://www.apotiguar.com.br/");
  
});
