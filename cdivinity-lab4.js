// Courtland Divinity
// Undergraduate 441
// 1
(function(){
    document.getElementById("hero").querySelector("h1").textContent = "Uplift Your Brand with Stellar Marketing";
  })();
//2
  (function() {
    const paragraph = document.querySelector('p');
    paragraph.innerHTML = '“Utilize cutting-edge strategies from Stellar Marketing to help your business <b><em>thrive</em></b> and <b><em>excel</em></b>.”';
  })();
//3
(function() {
    const hero = document.getElementById("hero");
    hero.style.backgroundImage = `url(https://picsum.photos/id/683/1280/720)`;
  })();

//4
(function () {
    const header = document.querySelector('header');
    header.style.backgroundColor = 'rgb(31 41 55 / 1)';
})();

//5
(function() {
    const heroSection = document.getElementById('hero');
    const getStartedButton = heroSection.querySelector('a[href="contact.html"]');
    getStartedButton.remove();
})();

//6
  (function() {
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
      heading.style.textAlign = 'center';
    });
  })();

  //7
  (function() {
    const icons = document.querySelectorAll('[data-icon]');
    icons.forEach(icon => {
      icon.style.color = '#47C714';
    });
  })();

  //8
  (function() {
    const icons = document.querySelectorAll('[data-icon="digital"]');
    icons.forEach(icon => {
      icon.innerHTML = 'ads_click';
    });
  })();
  //9
  (function() {
    const productCards = document.querySelectorAll('.product_card');
    const section = document.querySelector('[data-section="product_cards"]');
    
    function updateLayout() {
        if (window.innerWidth >= 1024) {
            section.classList.add('md:grid-cols-4');
            section.classList.remove('md:grid-cols-2');
        } else {
            section.classList.remove('md:grid-cols-4');
            section.classList.add('md:grid-cols-2');
        }
    }
    
    updateLayout();
    window.addEventListener('resize', updateLayout);
})();
 
  //10
  (function() {
    const musicianCard = document.querySelector('[data-section="product_cards"] div:nth-child(4)');
    musicianCard.querySelector('img').src = 'https://picsum.photos/id/453/400/300';
})();