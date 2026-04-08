// Hide Splash Logo - SillyTavern extension
// Removes the .splash-logo node as early as possible as a JS fallback
// in case CSS loads too late to prevent a frame of flashing.

(function hideSplashLogo() {
    const removeLogos = () => {
        const logos = document.querySelectorAll('#loader .splash-logo, .splash-logo');
        logos.forEach((el) => {
            try {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
                el.style.opacity = '0';
                if (el.parentNode) {
                    el.parentNode.removeChild(el);
                }
            } catch (e) { /* no-op */ }
        });
        return logos.length;
    };

    // Run immediately.
    removeLogos();

    // Watch for late-inserted logos until the loader is gone.
    try {
        const observer = new MutationObserver(() => {
            removeLogos();
            if (!document.getElementById('loader')) {
                observer.disconnect();
            }
        });

        if (document.documentElement) {
            observer.observe(document.documentElement, {
                childList: true,
                subtree: true,
            });
        }

        // Safety: stop observing after 30 seconds no matter what.
        setTimeout(() => observer.disconnect(), 30000);
    } catch (e) { /* no-op */ }
})();

export {};
