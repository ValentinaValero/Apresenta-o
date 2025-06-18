const elementosProduto = document.querySelectorAll('.produto');

elementosProduto.forEach(produto => {
    produto.addEventListener('mouseenter', function () {
        let textoDescricao = document.createElement('p');
        textoDescricao.textContent = produto.querySelector('img').alt;
        textoDescricao.style.fontSize = '15px';
        textoDescricao.style.textAlign = 'center';
        textoDescricao.style.marginTop = '10px';
        textoDescricao.style.fontWeight = 'bold';

        if (!produto.querySelector('p')) {
            produto.appendChild(textoDescricao);
        }
    });

    produto.addEventListener('mouseleave', function () {
        let textoExistente = produto.querySelector('p');
        if (textoExistente) {
            produto.removeChild(textoExistente);
        }
    });
});


const botaoAlternarTema = document.getElementById('alternarTema');
const iconeTema = document.getElementById('iconeTema');
const corpoPagina = document.body;

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'escuro') {
    corpoPagina.classList.add('escuro');
    iconeTema.src = "https://i.ibb.co/p6PfNXhH/Luapng.png";
    iconeTema.alt = "Modo Escuro";
} else {
    corpoPagina.classList.remove('escuro');
    iconeTema.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    iconeTema.alt = "Modo Claro";
}

botaoAlternarTema.addEventListener('click', () => {
    corpoPagina.classList.toggle('escuro');

    if (corpoPagina.classList.contains('escuro')) {
        iconeTema.src = "https://i.ibb.co/p6PfNXhH/Luapng.png";
        iconeTema.alt = "Modo Escuro";
        localStorage.setItem('tema', 'escuro');
    } else {
        iconeTema.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
        iconeTema.alt = "Modo Claro";
        localStorage.setItem('tema', 'claro');
    }

    document.querySelector(`input[name="tema"][value="${localStorage.getItem('tema')}"]`).checked = true;
});


document.querySelectorAll('input[name="tema"]').forEach((radio) => {
    radio.addEventListener('change', (evento) => {
        if (evento.target.value === 'escuro') {
            corpoPagina.classList.add('escuro');
            iconeTema.src = "https://i.ibb.co/p6PfNXhH/Luapng.png";
            iconeTema.alt = "Modo Escuro";
            localStorage.setItem('tema', 'escuro');
        } else {
            corpoPagina.classList.remove('escuro');
            iconeTema.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
            iconeTema.alt = "Modo Claro";
            localStorage.setItem('tema', 'claro');
        }
    });
});

if (corpoPagina.classList.contains('escuro')) {
    document.querySelector('input[name="tema"][value="escuro"]').checked = true;
} else {
    document.querySelector('input[name="tema"][value="claro"]').checked = true;
}


const uploadImagemPerfil = document.getElementById('uploadImagemPerfil');
const imagemExibicaoPerfil = document.getElementById('imagemExibicaoPerfil');

if (uploadImagemPerfil && imagemExibicaoPerfil) {
    uploadImagemPerfil.addEventListener('change', function (evento) {
        if (evento.target.files && evento.target.files[0]) {
            const leitorArquivo = new FileReader();

            leitorArquivo.onload = function (e) {
                imagemExibicaoPerfil.src = e.target.result;
            };

            leitorArquivo.readAsDataURL(evento.target.files[0]);
        }
    });
}

// Aplica o tema salvo o mais cedo possível
  if (localStorage.getItem("tema") === "escuro") {
    document.documentElement.classList.add("dark-mode");
  }