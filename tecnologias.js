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
     [   
        { src: './assets/icons/github.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/python.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/pngwing.com.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/php.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/c-.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/do-sustenido.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/gnu-bash.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/scala.png', alt: 'imagem'},
    ],
     [   
        { src: './assets/icons/java.png', alt: 'imagem'},
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
    [
        {description: 'O GitHub é uma plataforma de desenvolvimento colaborativo que aloja projetos na nuvem utilizando o sistema de controle de versões chamado Git. A plataforma ajuda os desenvolvedores a armazenar e administrar o código e faz o registro de mudanças.'}
    ],
    [
        {description: 'Python é uma linguagem de programação versátil e popular, conhecida pela sua sintaxe clara e legibilidade. É uma linguagem de alto nível, interpretada, orientada a objetos e com tipagem dinâmica. Suporta múltiplos paradigmas de programação, incluindo programação orientada a objetos, procedural e funcional. '}
    ],
    [
        {description: 'Ruby é uma linguagem de programação versátil e popular, conhecida por sua simplicidade, legibilidade e foco na produtividade do desenvolvedor. É uma linguagem orientada a objetos, de tipagem dinâmica, e interpretada, o que a torna flexível e fácil de aprender. Ruby é amplamente utilizada em desenvolvimento web, especialmente com o framework Ruby on Rails, mas também tem aplicações em scripts, análise de dados e muito mais.'}
    ],
    [
        {description: 'PHP (sigla para "PHP: Hypertext Preprocessor") é uma linguagem de script do lado do servidor, amplamente utilizada para o desenvolvimento web e criação de aplicações dinâmicas. Permite a criação de páginas web que respondem de forma interativa a diferentes contextos e usuários. O PHP é um código aberto e de fácil utilização, o que o torna popular e versátil.'}
    ],
    [
        {description: 'C++ é uma linguagem de programação de propósito geral, amplamente utilizada no desenvolvimento de software de alto desempenho. Ela é conhecida por seu controle de baixo nível sobre o hardware, sua eficiência e sua capacidade de suportar diferentes paradigmas de programação, incluindo orientada a objetos. C++ foi desenvolvido como uma extensão da linguagem C, adicionando recursos como classes e programação orientada a objetos. '}
    ],
    [
        {description: 'C# é uma linguagem de programação multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. É uma linguagem de uso geral, moderna e de código aberto, que permite o desenvolvimento de diversas aplicações, desde aplicações de desktop e web até jogos e aplicativos móveis. '}
    ],
    [
        {description: 'Bash é um interpretador de linha de comandos e uma linguagem de script utilizada em sistemas Unix e Linux. É uma ferramenta poderosa para automatizar tarefas e interagir com o sistema operacional, permitindo que usuários executem comandos, naveguem pelo sistema de arquivos e criem scripts personalizados. '}
    ],
    [
        {description: 'Scala é uma linguagem de programação multiparadigma, ou seja, suporta diferentes abordagens de programação, como orientada a objetos e funcional. É uma linguagem de alto nível, tipada estaticamente, que roda na JVM (Java Virtual Machine), o que permite que se beneficie da vasta biblioteca do Java. Scala é conhecida por sua sintaxe concisa e elegante, e é frequentemente utilizada para desenvolvimento de aplicações que exigem escalabilidade e alta performance, como em sistemas distribuídos e big data. '}
    ],
    [
        {description: 'Java é uma linguagem de programação orientada a objetos e multiplataforma, amplamente utilizada em diversas aplicações. Ela é conhecida por sua versatilidade, permitindo o desenvolvimento de softwares em diferentes áreas, desde aplicações web e móveis até sistemas de grande porte e software empresarial. A Java Virtual Machine (JVM) garante a independência de plataforma, permitindo que o código seja executado em qualquer sistema que suporte a JVM. '}
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