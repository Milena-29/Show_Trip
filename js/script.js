
/* =========================
   LOGIN
========================= */

const formLogin = document.getElementById('formLogin');

if (formLogin) {

    formLogin.addEventListener('submit', function(event) {

        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (email === '' || senha === '') {
            alert('Preencha todos os campos!');
            return;
        }

        window.location.href = 'TelaInicial.html';

    });

}


/* =========================
   CADASTRO
========================= */

const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {

    formCadastro.addEventListener('submit', function(event) {

        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;
        const termosAceitos = document.getElementById('termos').checked;

        if (senha !== confirmarSenha) {
            alert('As senhas não são iguais!');
            return;
        }

        if (!termosAceitos) {
            alert('Aceite os termos de uso!');
            return;
        }

        alert('Cadastro realizado com sucesso!');

        window.location.href = 'index.html';

    });

}


/* =========================
   MOSTRAR E ESCONDER SENHA
========================= */

const iconesSenha = document.querySelectorAll('.VerSenha');

iconesSenha.forEach(function(icone) {

    icone.addEventListener('click', function() {

        const campoSenha = icone.parentElement.querySelector('input');

        if (campoSenha.type === 'password') {

            campoSenha.type = 'text';
            icone.src = 'img/EyeOff.png';
            icone.alt = 'Esconder senha';

        } else {

            campoSenha.type = 'password';
            icone.src = 'img/EyeOn.png';
            icone.alt = 'Mostrar senha';

        }

    });

});

const ClienteSelecionado = document.getElementById('usuario');
const ParceiroSelecionado = document.getElementById('empresa');

const iconeTurista = document.querySelector('.iconeTurista');
const iconeParceiro = document.querySelector('.iconeParceiro');

// Quando selecionar Turista
ClienteSelecionado.addEventListener('change', function() {

    iconeTurista.src = 'img/TuristaAtivo.png';
    iconeParceiro.src = 'img/ParceiroNaoAtivo.png';

});

// Quando selecionar Parceiro
ParceiroSelecionado.addEventListener('change', function() {

    iconeTurista.src = 'img/TuristaNaoAtivo.png';
    iconeParceiro.src = 'img/ParceiroAtivo.png';

});

/*MAPA*/
// Criar o mapa centralizado em Vitória
const mapa = L.map('mapa').setView([-20.3155, -40.3128], 13);

// Adicionar o mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(mapa);

// Criar um marcador
const marcador = L.marker([-20.3155, -40.3128]).addTo(mapa);

// Informações do marcador
marcador.bindPopup("<strong>Vitória - ES</strong><br>Localização central");

// Encontrar localização do usuário
function encontrarLocalizacao() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(posicao) {

            const latitude = posicao.coords.latitude;
            const longitude = posicao.coords.longitude;

            mapa.setView([latitude, longitude], 16);

            L.marker([latitude, longitude])
                .addTo(mapa)
                .bindPopup("Você está aqui!")
                .openPopup();

        }, function() {
            alert("Não foi possível encontrar sua localização.");
        });

    } else {
        alert("Seu navegador não suporta localização.");
    }
}