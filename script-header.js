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
        <a href="../index.html">Home</a>
        <a href="../about">About</a>
        <a href="../watch">Watch</a>
        <a href="../creations">Creations</a>
        
          
    </div>
    
    
</header>`;
