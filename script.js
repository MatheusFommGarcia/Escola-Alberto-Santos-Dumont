// MENU HAMBÚRGUER
const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('change');
    nav.classList.toggle('active');
});

// TEMA CLARO/ESCURO
const toggleThemeCheckbox = document.getElementById('toggle-theme');
const themeLabel = document.getElementById('theme-label');

// Atualiza o texto do botão
function updateLabel() {
    if (document.body.classList.contains('light')) {
        themeLabel.textContent = 'Modo Claro: On';
    } else {
        themeLabel.textContent = 'Modo Claro: Off';
    }
}

// Aplica/Remove classe 'light' e atualiza o rótulo
toggleThemeCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('light');
    updateLabel();
});

// Define o estado inicial ao carregar a página
updateLabel();
