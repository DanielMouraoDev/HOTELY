// Função para criar o rodapé
function criarRodape() {
    const rodape = document.createElement('footer');
    rodape.className = 'meu-rodape'; 
    rodape.innerHTML = `
      <div class="container">
        <p>&copy; 2024 Meu Site de Reservas <br> Altair <br>Bruna<br>Daniel<br> João<br>Matheus</p>
        <ul>
          <li><a href="sobre.html" target="_parent">Sobre nós</a></li>
          <li><a href="contato.html" target="_parent">Contato</a></li>
          <li><a href="sobre.html" target="_parent">Política de privacidade</a></li>
        </ul>
        <div class="redes-sociais">
          <a href="https://www.facebook.com"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
          <a href="https://www.x.com"><i class="fab fa-twitter"></i></a>
        </div>
        <button onclick="scrollToTop()" id="scroll-to-top" title="Voltar ao topo">
          <i class="fas fa-arrow-up"></i> 
        </button>
      </div>
    `;
    document.body.appendChild(rodape);
  

  
    // Scroll to top
    window.onscroll = function() { 
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.body.classList.add('scrolling');
      } else {
        document.body.classList.remove('scrolling');
      }
    }
  }
  
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
  
  // Chama a função para criar o rodapé após o carregamento do DOM
  document.addEventListener('DOMContentLoaded', criarRodape);