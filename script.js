// Lista de URLs das imagens de fundo
const imagens = [
    'barber-4618697_1280.jpg',
    'salao2.png',
    'salao_interior_3.png',
    'produtos_2.png',
  ];
  
  let indiceAtual = 0; // Índice da imagem atual
  
  function trocarImagem() {
    // Seleciona o elemento com o ID "Destaque"
    const destaque = document.getElementById('Destaque');
  
    // Atualiza o estilo de background-image com a próxima imagem
    destaque.style.backgroundImage = `url('${imagens[indiceAtual]}')`;
  
    // Avança para a próxima imagem, voltando ao início se necessário
    indiceAtual = (indiceAtual + 1) % imagens.length;
  }
  
  // Troca a imagem a cada 5 segundos (5000 ms)
  setInterval(trocarImagem, 3000);
  
  // Inicializa com a primeira imagem
  trocarImagem();