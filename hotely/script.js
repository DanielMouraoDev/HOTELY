function mostrarBoasVindas() {
  var mensagemExibida = false; // Variável de controle movida para dentro da função

  if (mensagemExibida) {
    return; // Sai da função se a mensagem já foi exibida
  }

  const agora = new Date();
  const hora = agora.getHours();
  let mensagem = "";

  if (hora >= 5 && hora < 12) {
    mensagem = "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde!";
  } else {
    mensagem = "Boa noite!";
  }

  alert(mensagem); // Exibe a mensagem em um alerta
  mensagemExibida = true; // Marca que a mensagem foi exibida
}
document.addEventListener('DOMContentLoaded', (event) => {

  // Verifica se a mensagem já foi exibida na sessão
  if (sessionStorage.getItem('mensagemExibida') !== 'true') { 
    mostrarBoasVindas();
    sessionStorage.setItem('mensagemExibida', 'true');
  }

  // ... (restante do seu código JavaScript) ...
});

function mostrarBoasVindas() {
  // ... (código da função mostrarBoasVindas) ...
}

// Chama a função mostrarBoasVindas após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  mostrarBoasVindas(); 

  // Inicializa o Swiper após o carregamento do DOM
  const swiper = new Swiper('.mySwiper', {
    // Opções do carrossel
    slidesPerView: 1, // Número de slides visíveis por vez
    spaceBetween: 30, // Espaçamento entre os slides
    loop: true, // Permite que o carrossel seja infinito
    pagination: { // Configura a paginação
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: { // Configura os botões de navegação
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  const swiper = new Swiper('.mySwiper', {
    // ... outras opções ...

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    keyboard: { 
      enabled: true,
    },

    // ... outras opções ...
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  // Seleciona o formulário
  const formulario = document.getElementById('formulario-pesquisa');

  // Adiciona um evento de submit ao formulário
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede o envio do formulário

    // Seleciona os campos
    const nomeHotel = document.getElementById('nome-hotel').value;
    const localizacao = document.getElementById('localizacao').value;

    // Valida os campos
    if (nomeHotel === '') {
      alert('Por favor, digite o nome do hotel.');
      return;
    }

    if (localizacao === '') {
      alert('Por favor, selecione a localização.');
      return;
    }

    // Se todos os campos estiverem preenchidos, exiba um alerta com os valores
    alert(`Nome do hotel: ${nomeHotel}\nLocalização: ${localizacao}`);

    // TODO: Redirecionar para a página de resultados da pesquisa
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  // Seleciona o formulário
  const formulario = document.getElementById('formulario-pesquisa');

  // Adiciona um evento de submit ao formulário
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const nomeHotel = document.getElementById('nome-hotel').value.toLowerCase();
    const localizacao = document.getElementById('localizacao').value.toLowerCase();

    // Lógica para redirecionar para a página do hotel
    if (nomeHotel === 'hotel vista mar' || (localizacao === 'copacabana' && nomeHotel === '')) {
      window.location.href = 'hotel-vista-mar.html';
    } else if (nomeHotel === 'hotel charmoso boutique' || (localizacao === 'ipanema' && nomeHotel === '')) {
      window.location.href = 'hotel-charmoso-boutique.html';
    } else if (nomeHotel === 'hotel família feliz' || (localizacao === 'copacabana' && nomeHotel === '')) {
      window.location.href = 'hotel-familia-feliz.html';
    } else if (nomeHotel === 'hotel bom preço' || (localizacao === 'leblon' && nomeHotel === '')) {
      window.location.href = 'hotel-bom-preco.html';
    } else if (nomeHotel === 'hotel solar antigo' || (localizacao === 'centro' && nomeHotel === '')) {
      window.location.href = 'hotel-solar-antigo.html';
    } else {
      alert('Hotel não encontrado.');
    }
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  // ... (código do carrossel e do formulário) ...

  // Lista de hotéis
  const hoteis = [
    "Hotel Vista Mar",
    "Hotel Charmoso Boutique",
    "Hotel Família Feliz",
    "Hotel Bom Preço",
    "Hotel Solar Antigo"
  ];

  // Campo de busca
  const campoBusca = document.getElementById('nome-hotel');

  // Cria a lista de sugestões
  const listaSugestoes = document.createElement('ul');
  listaSugestoes.classList.add('sugestoes');
  campoBusca.parentNode.appendChild(listaSugestoes); // Adiciona a lista ao DOM

  // Mostra as sugestões ao clicar no campo
  campoBusca.addEventListener('click', () => {
    listaSugestoes.innerHTML = ''; // Limpa a lista

    hoteis.forEach(hotel => {
      const itemLista = document.createElement('li');
      itemLista.textContent = hotel;
      listaSugestoes.appendChild(itemLista);

      // Adiciona evento de clique no item da lista
      itemLista.addEventListener('click', () => {
        campoBusca.value = hotel;
        listaSugestoes.innerHTML = ''; // Esconde a lista
      });
    });

    listaSugestoes.style.display = 'block'; // Mostra a lista
  });

  // Esconde as sugestões ao clicar fora do campo
  document.addEventListener('click', (event) => {
    if (!campoBusca.contains(event.target)) {
      listaSugestoes.style.display = 'none';
    }
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  // ... (código do carrossel) ...

  // Lista de hotéis e suas localizações
  const hoteis = {
    "Hotel Vista Mar": "copacabana",
    "Hotel Charmoso Boutique": "ipanema",
    "Hotel Família Feliz": "copacabana",
    "Hotel Bom Preço": "leblon",
    "Hotel Solar Antigo": "centro"
  };

  // Campo de busca e select de localização
  const campoBusca = document.getElementById('nome-hotel');
  const selectLocalizacao = document.getElementById('localizacao');

  // Cria a lista de sugestões
  const listaSugestoes = document.createElement('ul');
  listaSugestoes.classList.add('sugestoes');
  campoBusca.parentNode.appendChild(listaSugestoes); // Adiciona a lista ao DOM

  // Mostra as sugestões ao clicar no campo
  campoBusca.addEventListener('click', () => {
    listaSugestoes.innerHTML = ''; // Limpa a lista

    for (const hotel in hoteis) {
      const itemLista = document.createElement('li');
      itemLista.textContent = hotel;
      listaSugestoes.appendChild(itemLista);

      // Adiciona evento de clique no item da lista
      itemLista.addEventListener('click', () => {
        campoBusca.value = hotel;
        selectLocalizacao.value = hoteis[hotel]; // Preenche o select com a localização
        listaSugestoes.innerHTML = ''; // Esconde a lista
      });
    }

    listaSugestoes.style.display = 'block'; // Mostra a lista
  });

  // Esconde as sugestões ao clicar fora do campo
  document.addEventListener('click', (event) => {
    if (!campoBusca.contains(event.target)) {
      listaSugestoes.style.display = 'none';
    }
  });

  // ... (código do formulário) ...
});
// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar a classe "visivel" às ofertas quando elas estiverem visíveis na tela
function mostrarOfertas() {
  const ofertas = document.querySelectorAll('#ofertas-rotativas .oferta');

  ofertas.forEach(oferta => {
    if (isElementInViewport(oferta)) {
      oferta.classList.add('visivel');
    }
  });
}

// Chama a função mostrarOfertas quando a página carregar e quando o usuário rolar a tela
window.addEventListener('DOMContentLoaded', mostrarOfertas);
window.addEventListener('scroll', mostrarOfertas);

document.addEventListener('DOMContentLoaded', function() {
  // Manipula o envio do formulário de reserva
  document.querySelector('form[action="#"]').addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Obtém os dados do formulário
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const dataCheckin = document.getElementById('data_checkin').value;
      const dataCheckout = document.getElementById('data_checkout').value;
      const tipoQuarto = document.getElementById('tipo_quarto').value;

      // Armazena os dados no localStorage
      const reserva = {
          nome,
          email,
          dataCheckin,
          dataCheckout,
          tipoQuarto
      };

      localStorage.setItem('reserva', JSON.stringify(reserva));

      // Opcional: Exibe uma mensagem de sucesso
      alert('Reserva armazenada com sucesso!');

      // Limpa o formulário
      this.reset();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const today = new Date().toISOString().split('T')[0]; // Obtém a data de hoje no formato YYYY-MM-DD
  document.getElementById('data_checkin').setAttribute('min', today); // Define o min para check-in
  document.getElementById('data_checkout').setAttribute('min', today); // Define o min para check-out

  // Manipula o envio do formulário de reserva
  document.querySelector('form[action="#"]').addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Obtém os dados do formulário
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const dataCheckin = document.getElementById('data_checkin').value;
      const dataCheckout = document.getElementById('data_checkout').value;
      const tipoQuarto = document.getElementById('tipo_quarto').value;

      // Verifica se a data de check-out é posterior à data de check-in
      if (new Date(dataCheckin) >= new Date(dataCheckout)) {
          alert('A data de check-out deve ser posterior à data de check-in.');
          return;
      }

      // Armazena os dados no localStorage
      const reserva = {
          nome,
          email,
          dataCheckin,
          dataCheckout,
          tipoQuarto
      };

      localStorage.setItem('reserva', JSON.stringify(reserva));

      // Opcional: Exibe uma mensagem de sucesso
      alert('Reserva armazenada com sucesso!');

      // Limpa o formulário
      this.reset();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const today = new Date().toISOString().split('T')[0]; // Obtém a data de hoje no formato YYYY-MM-DD
  document.getElementById('data_checkin').setAttribute('min', today); // Define o min para check-in
  document.getElementById('data_checkout').setAttribute('min', today); // Define o min para check-out

  // Manipula o envio do formulário de reserva
  document.querySelector('form[action="#"]').addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Obtém os dados do formulário
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const dataCheckin = document.getElementById('data_checkin').value;
      const dataCheckout = document.getElementById('data_checkout').value;
      const tipoQuarto = document.getElementById('tipo_quarto').value;

      // Verifica se a data de check-out é posterior à data de check-in
      if (new Date(dataCheckin) >= new Date(dataCheckout)) {
          alert('A data de check-out deve ser posterior à data de check-in.');
          return;
      }

      // Armazena os dados no localStorage
      const reserva = {
          nome,
          email,
          dataCheckin,
          dataCheckout,
          tipoQuarto
      };

      localStorage.setItem('reserva', JSON.stringify(reserva));

      // Opcional: Exibe uma mensagem de sucesso
      alert('Reserva armazenada com sucesso!');

      // Limpa o formulário
      this.reset();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('criarContaForm');

  form.addEventListener('submit', (event) => {
      event.preventDefault();  // Previne o envio tradicional do formulário

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      if (!nome || !email || !senha) {
          alert('Preencha todos os campos!');
          return;
      }

      fetch('/criarconta', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              nome: nome,
              email: email,
              senha: senha
          })
      })
      .then(response => response.json())
      .then(data => {
          if (data.message) {
              alert(data.message);
          }
      })
      .catch(err => {
          console.error('Erro ao enviar dados:', err);
          alert('Erro ao criar conta. Tente novamente.');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('logarContaForm');

  form.addEventListener('submit', (event) => {
      event.preventDefault();  // Previne o envio tradicional do formulário

      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      // Verifica se os campos não estão vazios
      if (!email || !senha) {
          alert('Por favor, preencha todos os campos!');
          return;
      }

      // Enviar dados de login para o servidor
      fetch('/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, senha })
      })
      .then(response => response.json())
      .then(data => {
          if (data.message) {
              alert(data.message);  // Exibe o feedback do servidor
          }
          if (data.message === "Login bem-sucedido") {
            window.location.href = 'index.html';
          }
      })
      .catch(error => {
          console.error('Erro ao tentar fazer login:', error);
          alert('Erro ao tentar fazer login. Tente novamente.');
      });
  });
});