document.addEventListener('DOMContentLoaded', function() {
    const introGif = document.getElementById('intro-gif');
    const introContainer = document.querySelector('.intro-container');

    const gifDuration = 3000; 
    
    setTimeout(function() {

        introContainer.classList.add('fade-out');
        
        setTimeout(function() {
            window.location.href = 'Home.html'; 
        }, 500); 
    }, gifDuration);
});



