// 1. Create a style element to hold your global CSS
const style = document.createElement('style');
style.textContent = `
    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-height: 100dvh; 
        margin: 0;
    }


`;

document.head.appendChild(style);

document.getElementById('header-placeholder').innerHTML = `
<header class="site-header">
    <div class="header-logo">
        <a href="../index.html" target="_blank" class="header-logo"><img src="../images/frogandbearpublishing_nobg.png" alt="Frog and Bear Publishing"></a>
    </div>
    <div class="header-links">
        <a href="../index.html">Home</a>
        <a href="../about">About</a>
        <a href="../watch">Watch</a>
        <a href="../creations">Creations</a>    
    </div>
</header>`;

document.getElementById('footer-placeholder').innerHTML = `
<footer class="site-footer">
    <div class="footer-links">
        <a href="https://www.twitch.com/frognbear" target="_blank" class="footer-social-icon"><img src="../images/icon_twitch.png" alt="Twitch">
        <a href="https://www.youtube.com/@frognbearpub" target="_blank" class="footer-social-icon"><img src="../images/icon_youtube.png" alt="YouTube">
        <a href="https://www.instagram.com/frogandbearpub" target="_blank" class="footer-social-icon"><img src="../images/icon_instagram.png" alt="Instagram">
        <a href="https://www.patreon.com/cw/FrognBear" target="_blank" class="footer-social-icon"><img src="../images/icon_patreon.png" alt="Patreon">
        </div>
    <div class="footer-links">
        <a href="../index.html">Home</a>
        <a href="../about">About</a>
        <a href="../watch">Watch</a>
        <a href="../creations">Creations</a>
        <a href="../contact">Contact</a>
    </div>
    <p>&copy; 2026 Frog and Bear Publishing™. All rights reserved.
    &copy; Weird games for wonderful people 🐸🐻™</p>
    
</footer>`;
