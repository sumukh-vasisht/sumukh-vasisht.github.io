// Dark-only site: force true black theme and ignore legacy light preference.
(function () {
    document.documentElement.setAttribute('data-theme', 'dark');
    try {
        localStorage.setItem('theme', 'dark');
    } catch (e) {
        /* ignore */
    }
})();
