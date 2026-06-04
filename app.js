/**
 * LÓGICA DE NAVEGAÇÃO DOS SLIDES (app.js)
 * Desenvolvido em Javascript Puro (ES6) para máxima performance.
 */

// --- ESTADO GLOBAL DA APLICAÇÃO ---
let currentSlideIndex = 0;
const totalSlides = slidesData.length;
let autoPlayInterval = null;
let isAutoPlaying = false;
const AUTOPLAY_DELAY = 5000; // Tempo de cada slide na reprodução automática (5 segundos)

// --- REFERÊNCIAS DO DOM ---
const appMain = document.getElementById('app-main');
const slideViewport = document.getElementById('slide-viewport');
const slideTitleHeader = document.getElementById('slide-title-header');
const slideCounter = document.getElementById('slide-counter');
const slideSelect = document.getElementById('slide-select');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnPlay = document.getElementById('btn-play');
const btnFullscreen = document.getElementById('btn-fullscreen');
const btnHelp = document.getElementById('btn-help');
const helpTooltip = document.getElementById('keyboard-help-tooltip');

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
  renderSlides();
  populateDropdown();
  updateSlideUI();
  setupEventListeners();
  
  // Registra que tudo foi iniciado com sucesso
  console.log('Apresentação iniciada com', totalSlides, 'slides.');
});

// --- CARREGAMENTO DOS SLIDES NO DOM ---
function renderSlides() {
  slideViewport.innerHTML = '';
  
  slidesData.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = `slide-wrapper ${index === 0 ? 'active' : ''}`;
    slideDiv.id = `slide-${index}`;
    slideDiv.setAttribute('data-layout', slide.layout || 'default');
    slideDiv.innerHTML = slide.content;
    slideViewport.appendChild(slideDiv);
  });
}

// Preenche o seletor dropdown no rodapé
function populateDropdown() {
  slideSelect.innerHTML = '';
  slidesData.forEach((slide, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${index + 1}: ${slide.title}`;
    slideSelect.appendChild(option);
  });
}


// --- ATUALIZAÇÃO DA INTERFACE (MUDANÇA DE SLIDE) ---
function goToSlide(index) {
  if (index < 0 || index >= totalSlides || index === currentSlideIndex) return;
  
  // Remove classe ativa do slide anterior
  const previousSlide = document.getElementById(`slide-${currentSlideIndex}`);
  if (previousSlide) previousSlide.classList.remove('active');
  
  // Atualiza o índice corrente
  currentSlideIndex = index;
  
  // Adiciona classe ativa no novo slide
  const activeSlide = document.getElementById(`slide-${currentSlideIndex}`);
  if (activeSlide) activeSlide.classList.add('active');
  
  updateSlideUI();
  
  // Renderiza equações matemáticas com o MathJax apenas para o novo slide visível
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([activeSlide]).catch((err) => console.log('MathJax error:', err));
  }
}

function updateSlideUI() {
  const currentSlide = slidesData[currentSlideIndex];
  
  // 1. Cabeçalho: Esconde o título principal na capa e exibe nos outros slides
  if (currentSlide.layout === 'title') {
    slideTitleHeader.style.opacity = '0';
    setTimeout(() => {
      if (slidesData[currentSlideIndex].layout === 'title') {
        slideTitleHeader.textContent = '';
      }
    }, 200);
  } else {
    slideTitleHeader.textContent = currentSlide.title;
    slideTitleHeader.style.opacity = '1';
  }
  
  // 2. Contador de slides
  slideCounter.textContent = `${currentSlideIndex + 1} / ${totalSlides}`;
  
  // 3. Atualizar dropdown do rodapé
  slideSelect.value = currentSlideIndex;
  
  // 4. Habilitar/Desabilitar botões
  btnPrev.disabled = currentSlideIndex === 0;
  btnNext.disabled = currentSlideIndex === totalSlides - 1;
  
  // 5. Atualizar barra de progresso
  const progressPercent = totalSlides > 1 ? (currentSlideIndex / (totalSlides - 1)) * 100 : 0;
  progressBar.style.width = `${progressPercent}%`;
}

// Funções utilitárias de navegação
function nextSlide() {
  if (currentSlideIndex < totalSlides - 1) {
    goToSlide(currentSlideIndex + 1);
  } else if (isAutoPlaying) {
    // Se estiver no autoplay e atingir o final, volta para o primeiro
    goToSlide(0);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  }
}

// --- CONTROLE DE REPRODUÇÃO AUTOMÁTICA (AUTOPLAY) ---
function toggleAutoPlay() {
  if (isAutoPlaying) {
    clearInterval(autoPlayInterval);
    isAutoPlaying = false;
    btnPlay.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      Apresentar
    `;
    btnPlay.classList.remove('active');
  } else {
    isAutoPlaying = true;
    btnPlay.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
      Pausar
    `;
    btnPlay.classList.add('active');
    
    // Inicia intervalo cíclico
    autoPlayInterval = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);
  }
}

// --- CONTROLE DE TELA CHEIA (FULLSCREEN) ---
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.error(`Erro ao ativar tela cheia: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Atualiza ícone do botão fullscreen de acordo com o estado do documento
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    btnFullscreen.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"/></svg>
      Sair de Tela Cheia
    `;
  } else {
    btnFullscreen.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
      Tela Cheia
    `;
  }
});

// --- GERENCIADOR DE EVENTOS (EVENT LISTENERS) ---
function setupEventListeners() {
  // Cliques nos botões do rodapé
  btnPrev.addEventListener('click', prevSlide);
  btnNext.addEventListener('click', nextSlide);
  btnPlay.addEventListener('click', toggleAutoPlay);
  btnFullscreen.addEventListener('click', toggleFullScreen);
  
  // Dropdown para pular slides
  slideSelect.addEventListener('change', (e) => {
    goToSlide(parseInt(e.target.value));
  });
  
  // Clique na barra de progresso para ir a um ponto proporcional
  progressContainer.addEventListener('click', (e) => {
    const clickX = e.offsetX;
    const totalWidth = progressContainer.clientWidth;
    const percentage = clickX / totalWidth;
    const targetIndex = Math.round(percentage * (totalSlides - 1));
    goToSlide(targetIndex);
  });
  
  // Tooltip de Ajuda do Teclado
  btnHelp.addEventListener('click', (e) => {
    e.stopPropagation();
    helpTooltip.classList.toggle('visible');
  });
  
  document.addEventListener('click', () => {
    helpTooltip.classList.remove('visible');
  });
  
  helpTooltip.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Atalhos de teclado
  document.addEventListener('keydown', (e) => {
    // Ignora atalhos se o foco estiver no select
    if (document.activeElement === slideSelect) return;
    
    switch (e.key) {
      case 'ArrowRight':
      case ' ': // Barra de espaço
      case 'PageDown':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
      case 'f':
      case 'F':
        // Evita conflitos de atalhos padrão
        e.preventDefault();
        toggleFullScreen();
        break;
      case 'h':
      case 'H':
      case '?':
        helpTooltip.classList.toggle('visible');
        break;
    }
  });

  // Suporte a navegação por gestos (Deslizar em telas de toque)
  let touchStartX = 0;
  let touchEndX = 0;
  
  appMain.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  appMain.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const minSwipeDistance = 50; // Distância mínima do deslize em pixels
    const deltaX = touchEndX - touchStartX;
    
    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        prevSlide(); // Deslizar para a direita = Anterior
      } else {
        nextSlide(); // Deslizar para a esquerda = Próximo
      }
    }
  }
}
