const themeToggleBtn = document.getElementById('theme-toggle-btn');
const currentTheme = localStorage.getItem('theme');
const theme_css = document.getElementById('theme')
if (currentTheme === 'dark') {
    themeToggleBtn.classList.add('btn-light-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    theme_css.href = 'style/dark.css'
} else {
    themeToggleBtn.classList.add('btn-dark-theme');
    theme_css.href = 'style/style.css'
}

function toggleTheme() {
    const theme_css = document.getElementById('theme')
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        localStorage.setItem('theme', 'light');
        theme_css.href = 'style/style.css'
    } else {
        localStorage.setItem('theme', 'dark');
        theme_css.href = 'style/dark.css'
    }
    location.reload();
}
themeToggleBtn.addEventListener('click', toggleTheme);




let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


menuItem.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
})



