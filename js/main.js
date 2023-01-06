const bthDarkMode = document.querySelector(".dark-mode-bth");

if (localStorage.getItem('darcMode') === 'dark') {
    bthDarkMode.classList.add("dark-mode-bth--active");
    document.body.classList.add("dark");
} 


bthDarkMode.onclick = function () {
    bthDarkMode.classList.toggle("dark-mode-bth--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode','dark')
    } else {
        localStorage.setItem('darkMode',"light");
    }
}

AOS.init();