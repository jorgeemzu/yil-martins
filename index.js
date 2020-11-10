const hamburgerBtn = document.querySelector('.hamburger__menu');
const xIcon = document.querySelector('.x__icon')
const navMenu = document.querySelector('.nav__menu')
const mapTiles = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
const catalogoGrid = document.querySelector('.catalogo__grid');
const marca = document.querySelectorAll('.marca')




hamburgerBtn.addEventListener('click', () =>{
    navMenu.classList.toggle('show__menu')
})

xIcon.addEventListener('click', () =>{
    navMenu.classList.toggle('show__menu')
})


fetch("autos.json")
.then(response => response.json())
.then(data => {
    let diplayAutos = data.map(item => {

        return `<div class="catalogo__card">
        <img class="auto__img" src="${item.img}" alt="">
       <div class="auto__info">
           <div>
               <h5>${item.nombre}</h5> 
               <span>${item.precio}</span>
           </div>
          <div class="info__hover">
              <div>
                  <ul>
                      <li>${item.año}</li>
                      <li>${item.info1}</li>
                      <li>${item.info2}</li>
                  </ul>            
                 <div class="card__btns">
                     <a class="btn__fotos" href="${item.link}" target="_blank">Mas Fotos</a>
                     <a class="card__contacto" href="">Contacto</a>
                 </div>

              </div>
          </div>
           
       </div>
   </div>`
   
    });

    
    catalogoGrid.innerHTML = diplayAutos.join('');
})

const options = {
	threshold: 0.1,
	rootMargin: '0px 0px -20px 0px',
};


const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('apear');
            gsap.to('.apear',{duration: 2, scale:1, opacity:1, stagger: 0.5})
            appearOnScroll.unobserve(entry.target);
		}
	});
}, options);


marca.forEach(fader => {
	appearOnScroll.observe(fader);
});




let mymap = L.map('map').setView([18.39794921875,-66.16350555419922], 20);
L.tileLayer(mapTiles, {
    
}).addTo(mymap)

let market = L.marker([18.39794921875,-66.16350555419922]).addTo(mymap)


let tl = gsap.timeline({defaults : {ease: 'power1.out'}});

// tl.from('.hero h1', {y: '30px', opacity: 0, duration: 2})





