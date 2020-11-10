// const hamburgerBtn = document.querySelector('.hamburger__menu');
// const xIcon = document.querySelector('.x__icon')
// const navMenu = document.querySelector('.nav__menu')
const searchBar = document.getElementById('buscarAutos');
const catalogoAutos = document.querySelector('.catalogo__grid');

let arrayAutos = [];

fetch("autos.json")
.then(res => res.json())
.then(autos => arrayAutos.push(...autos))

function findMatch(wordToMatch, array){
    return array.filter(item => {
        const regex = new RegExp(wordToMatch, 'gi');
        return item.nombre.match(regex)
    })
}

function displayMatches(){
   const matchArray  = findMatch(this.value, arrayAutos);
   
   const html = matchArray.map(item =>{
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
   })

   catalogoAutos.innerHTML = html.join('')

}

searchBar.addEventListener('keyup', displayMatches);

// hamburgerBtn.addEventListener('click', () =>{
//     navMenu.classList.toggle('show__menu')
// })

// xIcon.addEventListener('click', () =>{
//     navMenu.classList.toggle('show__menu')
// })