const images = [
    [
        { src: './assets/icons/html-5.png', alt: 'imagem'},
    ],
   [ 
         { src: './assets/icons/css-3.png', alt: 'imagem'},
    ],
    [   
        { src: './assets/icons/js.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/ts.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/react.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/nodejs.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/servidor-sql.png', alt: 'imagem'},
    ],
];

const text = [
    [
        {description: 'HTML (HyperText Markup Language) é uma linguagem de marcação usada para estruturar o conteúdo de uma página web, definindo a sua estrutura e hierarquia. É o bloco de construção básico da internet, responsável por organizar textos, imagens, links e outros elementos em um documento que pode ser exibido em navegadores.'}
    ],
    [
        {description: 'CSS, que significa Cascading Style Sheets ou Folhas de Estilo em Cascata, é uma linguagem usada para definir a apresentação visual de documentos HTML, como cores, fontes, espaçamentos e layouts. Ao contrário do HTML, que estrutura o conteúdo, o CSS determina como esse conteúdo será exibido na página web. '}
    ],
    [
        {description: 'JavaScript é uma linguagem de programação interpretada de alto nível, amplamente utilizada para criar interatividade em páginas web. Ela permite aos desenvolvedores adicionar elementos dinâmicos, como animações, botões clicáveis e carrosséis, a sites e aplicações web.'}
    ],
     [
        {description: 'TypeScript é uma linguagem de programação de código aberto, desenvolvida pela Microsoft, que se baseia em JavaScript. Ele adiciona tipagem estática, orientação a objetos e outras características avançadas ao JavaScript, tornando-o mais robusto e escalável.'}
    ],
     [
        {description: 'React é uma biblioteca JavaScript de código aberto que se foca em criar interfaces de usuário complexas e interativas, utilizando componentes reutilizáveis. Ele é conhecido por sua abordagem declarativa, baseada em componentes e flexibilidade, permitindo que os desenvolvedores construam aplicações web e nativas usando as mesmas habilidades. '}
    ],
     [
        {description: 'Node.js é um ambiente de execução de JavaScript (runtime) de código aberto, que permite executar código JavaScript fora do navegador web. Ele é usado para criar aplicações do lado do servidor, ferramentas de linha de comando, e muito mais, tornando-o uma opção popular para desenvolvimento web e de aplicações de rede. '}
    ],
     [
        {description: 'SQL (Structured Query Language), ou Linguagem de Consulta Estruturada, é uma linguagem de programação padrão usada para interagir com bancos de dados relacionais. Permite armazenar, manipular e recuperar dados, criando, alterando e excluindo objetos de banco de dados, como tabelas. É uma linguagem relativamente simples, baseada em inglês, facilitando a escrita e compreensão de consultas. '}
    ],
];

let currentImageIndex = 0;
let currentTextIndex = 0;
let currentModalIndex = 0;

function openModal(index) {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  currentModalIndex = index;
  currentImageIndex = 0;
  currentTextIndex = 0;
  updateImage();
  updateText();
}

function updateImage() {
  const modalImg = document.getElementById('modal-img');
  modalImg.src = images[currentModalIndex][currentImageIndex].src;
  modalImg.alt = images[currentModalIndex][currentImageIndex].alt;
  
}

function updateText() {
  const modalText =  document.getElementById('modal-text');
  modalText.textContent = text[currentModalIndex][currentTextIndex].description;
}

document.getElementsByClassName('close')[0].addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});