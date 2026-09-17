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
        margin-top: auto; /* This pushes footer to bottom */
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
`;

document.head.appendChild(style);

document.getElementById('footer-placeholder').innerHTML = `
<footer class="site-footer">
    
    <div class="footer-links">
        <a href="https://www.frognbear.com/index.html">Home</a>
        <a href="https://www.frognbear.com/socials.html">Socials</a>
          
    </div>
    <p>&copy; 2026 Frog and Bear Publishing™. All rights reserved.</p>
    
</footer>`;
