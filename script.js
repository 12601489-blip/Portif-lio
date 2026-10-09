const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeText = document.querySelector('.theme-text');

function atualizarBotaoTema() {
    const modoEscuroAtivo = document.body.classList.contains('dark-mode');

    if (modoEscuroAtivo) {
        themeIcon.textContent = '☀';
        themeText.textContent = 'Modo claro';
        themeToggle.setAttribute('aria-label', 'Ativar modo claro');
    } else {
        themeIcon.textContent = '☾';
        themeText.textContent = 'Modo escuro';
        themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
    }
}

function carregarTemaSalvo() {
    const temaSalvo = localStorage.getItem('tema');

    if (temaSalvo === 'escuro') {
        document.body.classList.add('dark-mode');
    }

    atualizarBotaoTema();
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const modoEscuroAtivo = document.body.classList.contains('dark-mode');

    if (modoEscuroAtivo) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }

    atualizarBotaoTema();
});
carregarTemaSalvo();