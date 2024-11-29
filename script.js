// Lista de URLs das imagens de fundo
const imagens = [
    'barber-4618697_1280.jpg',
    'salao2.png',
    'salao_interior_3.png',
    'produtos_2.png',
  ];
  
  let indiceAtual = 0; // �ndice da imagem atual
  
  function trocarImagem() {
    // Seleciona o elemento com o ID "Destaque"
    const destaque = document.getElementById('Destaque');
  
    // Atualiza o estilo de background-image com a pr�xima imagem
    destaque.style.backgroundImage = `url('${imagens[indiceAtual]}')`;
  
    // Avan�a para a pr�xima imagem, voltando ao in�cio se necess�rio
    indiceAtual = (indiceAtual + 1) % imagens.length;
  }
  
  // Troca a imagem a cada 5 segundos (5000 ms)
  setInterval(trocarImagem, 3000);
  
  // Inicializa com a primeira imagem
  trocarImagem();