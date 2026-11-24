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

    #footer-placeholder {
        margin-bottom: auto; /* This pushes footer to bottom */
        width: 100%;
    }

    .site-footer {
        text-align: center;
        padding: 20px 0; /* Use a smaller, uniform padding */
    }

    .site-footer p {
        margin: 0;
        font-size: 0.9rem;
    }


    .footer-links {
        display: flex;
        justify-content: center;
         
    }

    .footer-links a {
        display: inline-block !important;
        text-decoration: none;
        padding: 5px 10px;
        font-size: .9rem;
        color: darkred; /* Keeping your theme consistent */
    }

    .footer-social-icon img {
    width: 30px;
    height: 30px;
}

#header-placeholder {
        margin-bottom: auto; /* This pushes footer to bottom */
        width: 100%;
    }

    .site-header {
        text-align: center;
        padding: 20px 0; /* Use a smaller, uniform padding */
    }

    .site-header p {
        margin: 0;
        font-size: 0.9rem;
    }


    .header-links {
        display: flex;
        justify-content: center;
         
    }

    .header-links a {
        display: inline-block !important;
        text-decoration: none;
        padding: 5px 10px;
        font-size: .9rem;
        color: darkred; /* Keeping your theme consistent */
    }

    .header-social-icon img {
    width: 30px;
    height: 30px;
}

`;

document.head.appendChild(style);

document.getElementById('header-placeholder').innerHTML = `
<header class="site-header">
    
    <div class="header-links">
    here
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
          test 2
    </div>
    <p>&copy; 2026 Frog and Bear Publishing™. All rights reserved.
    &copy; Weird games for wonderful people 🐸🐻™</p>
    
</footer>`;
