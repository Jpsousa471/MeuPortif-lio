const images = [
  [
    { src: './assets/Captura de tela 2024-05-21 190537.png', alt: 'Imagem 1' },
    { src: './assets/video.png', alt: 'Imagem 2' },
    { src: './assets/tresCards.png', alt: 'Imagem 3' },
  ],
  [
    { src: './assets/advinha.png', alt: 'Imagem 1' },
    { src: './assets/advinha2.png', alt: 'Imagem 2' },
    { src: './assets/advinha3.png', alt: 'Imagem 3' },
  ],
  [
    { src: './assets/Captura de tela 2024-05-21 190442.png', alt: 'Imagem 1' },
    { src: './assets/personT.png', alt: 'Imagem 2' },
    { src: './assets/planeta.png', alt: 'Imagem 3' },
    { src: './assets/planetaT.png', alt: 'Imagem 4' },
    { src: './assets/Nave.png', alt: 'Imagem 5' },
    { src: './assets/naveT.png', alt: 'Imagem 6' },
],
[
    { src: './assets/Calendario.png', alt: 'Imagem 1' },
    { src: './assets/Calendario2.png', alt: 'Imagem 2' },
    { src: './assets/Calendario3.png', alt: 'Imagem 3' },
  ],
];

let currentImageIndex = 0;
let currentModalIndex = 0;

function openModal(index) {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  currentModalIndex = index;
  currentImageIndex = 0;
  updateImage();
}

function updateImage() {
  const modalImg = document.getElementById('modal-img');
  modalImg.src = images[currentModalIndex][currentImageIndex].src;
  modalImg.alt = images[currentModalIndex][currentImageIndex].alt;
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images[currentModalIndex].length) % images[currentModalIndex].length;
  updateImage();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images[currentModalIndex].length;
  updateImage();
}

document.getElementsByClassName('close')[0].addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

