document.addEventListener('DOMContentLoaded', function() {
    const euNaoButton = document.getElementById('euNao');
    const tbmButton = document.getElementById('euTbm');

    if (euNaoButton) {
        euNaoButton.addEventListener('click', function() {
            const buttonWidth = euNaoButton.offsetWidth;
            const buttonHeight = euNaoButton.offsetHeight;
            const maxX = window.innerWidth - buttonWidth;
            const maxY = window.innerHeight - buttonHeight;

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            euNaoButton.style.position = 'absolute';
            euNaoButton.style.left = randomX + 'px';
            euNaoButton.style.top = randomY + 'px';
        });
    } else {
        console.error('Elemento com ID "euNao" não encontrado.');
    }

    if (tbmButton) {
        tbmButton.addEventListener('click', function() {
            window.location.href = 'musica.html';
        });
    } else {
        console.error('Elemento com ID "euTbm" não encontrado.');
    }
});