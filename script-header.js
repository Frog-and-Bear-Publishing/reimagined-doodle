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
    
    <div class="header-links">
        <a href="../index.html">Home</a>
        <a href="../about">About</a>
        <a href="../watch">Watch</a>
        <a href="../creations">Creations</a>    
    </div>
</header>`;
