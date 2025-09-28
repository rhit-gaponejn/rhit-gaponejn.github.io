document.addEventListener('DOMContentLoaded', function() {
    createNavigation();
    createFooter();
});

function createNavigation() {
    const currentPage = getCurrentPage();
    const nav = document.getElementById('navbar');
    
    nav.innerHTML = `
        <div class="nav-container">
            <div class="nav-logo">Julian Gaponenko</div>
            <ul class="nav-links">
                <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                <li><a href="resume.html" class="${currentPage === 'resume.html' ? 'active' : ''}">Resume</a></li>
                <li><a href="portfolio.html" class="${currentPage === 'portfolio.html' ? 'active' : ''}">Portfolio</a></li>
            </ul>
        </div>
    `;
}

function createFooter() {
    const footer = document.getElementById('footer');
    
    footer.innerHTML = `
        <div class="footer-links">
            <a href="https://www.linkedin.com/in/julian-gaponenko-584106387/" target="_blank">LinkedIn</a>
            <a href="https://github.com/rhit-gaponejn" target="_blank">GitHub</a>
            <a href="https://rose-hulman.joinhandshake.com/profiles/gjp4gk" target="_blank">Handshake</a>
        </div>
    `;
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    return page || 'index.html';
}