document.addEventListener('DOMContentLoaded', function() {
  
// Navigation Bar Scroll Detection
        let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function() {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop && scrollTop > 50) {
            navbar.style.top = '-150px'; 
          }
        
          else if (scrollTop < lastScrollTop) {
            navbar.style.top = '0'; 
          }
          lastScrollTop = scrollTop;
        });

        const logo = document.querySelector('.logo');
logo.addEventListener('click', function() {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Make the cursor change to pointer when hovering over the logo
logo.style.cursor = 'pointer';


 // working with yukai 

    const reviews = [
        {
            text: "Yukai work is filled with bold colours and graphic patterns that's well suited for the page and screen.",
            image: "asset /work1.png",
            color: "#EE4830" 
        },
        {
            text: "Yukai's artistic talent has truly brought our vision to life, and we are thrilled to share the final result!",
            image: "asset /work2.png",
            color: "#4244E9" 
        },
        {
            text: "Yukai is an animator and illustrator, but also a translator, she distills complex topics down to their beautiful core.",
            image: "asset /work3.png",
            color: "#05AB9A" 
        }
    ];
    
    let currentIndex = 0; 
    
    const reviewText = document.querySelector('.review-text');
    const reviewImage = document.querySelector('.review-image');
    const infoBox = document.querySelector('.info-box');
    
    document.querySelector('.left-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length; 
        updateContent();
    });
    
    document.querySelector('.right-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateContent();
    });
    
    function updateContent() {
        reviewText.textContent = reviews[currentIndex].text;
        reviewImage.src = reviews[currentIndex].image; 
        infoBox.style.backgroundColor = reviews[currentIndex].color;
    
        infoBox.classList.add('scale');

       
        setTimeout(() => {
            infoBox.classList.remove('scale');
        }, 300); 
    }

 // cursor
 const cursor = document.querySelector('.cursor');
        var timeout;
        
        document.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;
            
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
            cursor.style.display = "block";
            
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                cursor.style.display = "none";
            }, 8000);
        });
        
        document.addEventListener("mouseout", () => {
            cursor.style.display = "none";
        });


    });
