// Theme toggle logic
(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    // Set default theme to dark
    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    function getPreferredTheme() {
        return localStorage.getItem('theme') || 'dark';
    }
    function updateIcons(theme) {
        if (theme === 'dark') {
            themeToggle.querySelector('.fa-moon').style.display = 'none';
            themeToggle.querySelector('.fa-sun').style.display = 'inline';
        } else {
            themeToggle.querySelector('.fa-moon').style.display = 'inline';
            themeToggle.querySelector('.fa-sun').style.display = 'none';
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        const theme = getPreferredTheme();
        setTheme(theme);
        updateIcons(theme);
        themeToggle.addEventListener('click', function() {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
            updateIcons(next);
        });
    });
})();
