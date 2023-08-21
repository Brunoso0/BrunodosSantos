// Função para exibir o conteúdo da tela com base no nome da tela fornecido
function showScreen(screenName) {
  // Objeto que mapeia os nomes das telas para suas respectivas funções de criação de conteúdo
  var screens = {
    'screen1': createScreen1Content(),
    'screen2': createScreen2Content(),
    'screen3': createScreen3Content(),
    'screen4': createScreen4Content()
  };

  // Obtém o elemento principal de conteúdo
  var mainContent = document.getElementById('mainContent');
  
  // Define o conteúdo da tela como o conteúdo da tela correspondente no objeto "screens"
  mainContent.innerHTML = screens[screenName];
}


// Função que retorna o conteúdo da tela 1
function createScreen1Content() {
  return '<h1>Quem é Bruno Santos?</h1> <div class="center"> <div class="container"> <img id="tele" src="img/telescopio.jpg"> </div></div> <p>Bruno é um rapaz curioso e com muito desejo de aprender, apaixonado por astronomia e ciências, que sonha em ser Biólogo, Físico e programador.<br>Além desses hobbies, eu gosto muito de jogar vôlei e jogos eletronicos.</p> <ul class="image-list"> <li class="image-list-item"> <img src="img/orion7.jpg" alt="Imagem 1"> <p>NEBULOSA DE ORION</p> </li> <li class="image-list-item"> <img src="img/crianças.png" alt="Imagem 2"><p>EXPOSIÇÃO DA LUA CHEIA</p> </li> <li class="image-list-item"> <img src="img/saturno.png" alt="Imagem 3"> <p>SATURNO</p> </li> </ul>';
}

// Função que retorna o conteúdo da tela 2
function createScreen2Content() {
  return '<h1>Minas Formações</h1><p>Estudante de ADS(Analise e Desenvolvimento de Sistemas) na Universidade Uninter.<br>Estudante de Ciências Agrárias no Instituto Federal de Educação, Ciência e Tecnologia Baiano (IFBAIANO).<br></p> <h1>CURSOS</h1> <P>Python Intermediario<br>HTML e CSS Basico e Intermediario<br>JavaScript intermediario<br>Informatica avançada<br>NR-35 Trabalho em Altura<br></P>'; 
}

// Função que retorna o conteúdo da tela 3
function createScreen3Content() {
  return '<h1>MEU PORTFÓLIO</h1> <div class="ancora-container"><a class="ancora" href="https://brunoso0.github.io/Wizzard-Contents/" target="blank">Site de Harry Potter<br>(ainda em processo de desenvolvimento)</a><a class="ancora" href="https://brunoso0.github.io/Portfolio/" target="blank">Portfólio<br>(Precisando de ajustes na responsividade)</a></div>';
}

// Função que retorna o conteúdo da tela 4
function createScreen4Content() {
  return '<h1>Entre em Contato</h1><div class="contact-form"><h2>Entre em Contato</h2><form><label for="name">Nome:</label><input type="text" id="name" name="name" required><label for="email">Email:</label><input type="email" id="email" name="email" required><label for="message">Mensagem:</label><textarea id="message" name="message" rows="4" required></textarea><button type="submit">Enviar</button></form></div>';
  
}