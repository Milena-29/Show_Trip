
/* =========================
   LOGIN
========================= */

const formLogin = document.getElementById('formLogin');

if (formLogin) {

    formLogin.addEventListener('submit', function (event) {

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

    formCadastro.addEventListener('submit', function (event) {

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

iconesSenha.forEach(function (icone) {

    icone.addEventListener('click', function () {

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
ClienteSelecionado.addEventListener('change', function () {

    iconeTurista.src = 'img/TuristaAtivo.png';
    iconeParceiro.src = 'img/ParceiroNaoAtivo.png';

});

// Quando selecionar Parceiro
ParceiroSelecionado.addEventListener('change', function () {

    iconeTurista.src = 'img/TuristaNaoAtivo.png';
    iconeParceiro.src = 'img/ParceiroAtivo.png';

});


const DisponivelSelecionado = document.getElementById('DisponivelSelecionado');
const UtilizadoSelecionado = document.getElementById('UtilizadoSelecionado');

const cuponsDisponiveis = document.getElementById('cuponsDisponiveis');
const cuponsUtilizados = document.getElementById('cuponsUtilizados');

DisponivelSelecionado.addEventListener('click', function () {

    cuponsDisponiveis.style.display = 'grid';
    cuponsUtilizados.style.display = 'none';

    DisponivelSelecionado.classList.add('ativo');
    UtilizadoSelecionado.classList.remove('ativo');

});

UtilizadoSelecionado.addEventListener('click', function () {

    cuponsDisponiveis.style.display = 'none';
    cuponsUtilizados.style.display = 'grid';

    UtilizadoSelecionado.classList.add('ativo');
    DisponivelSelecionado.classList.remove('ativo');

});
