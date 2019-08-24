// -------------------- HEADER -----------------------//

const HeaderC = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY === 0) {
        HeaderC.style.backgroundColor = "transparent"
    } else {
        HeaderC.style.backgroundColor = "#55b4e4"

    }
});

const Button = document.querySelector(".navbar-toggler");

function TG(){
    Button.firstElementChild.classList.toggle("navbar-close-icon");
};

Button.addEventListener("click", function(){
    window.setTimeout(TG, 450);
})

const drop = document.querySelector(".dropdown-toggle");

 drop.addEventListener("click", function(){
     window.open('Lista1.html');
 });

 const xxx = document.querySelector(".dropdown-toggle");

 drop.addEventListener("mouseover", function(){
     $('.dropdown-toggle').dropdown("show")
 })


// ------------------------ IMAGENES BODY ---------------------//

const cuerpo = document.querySelector("#foticos");

const imagenes = [{img: "mapita.png", nombre: "Encuentra tu lugar", descripcion: "Busca el alojamiento que se ajusta a tus necesidades"},
{img: "camara.png", nombre: "Comunícate con tu anfitrión" , descripcion: "Contacta nuestros anfitriones, confirma detalles y reserva de forma segura"},
{img: "cel.png", nombre: "Vive la experiencia" , descripcion: "¡Ábrete al mundo!, vive la experiencia como un local"}]

for(let imagen of imagenes){
    cuerpo.insertAdjacentHTML('afterbegin',
    `<div class="col-md-4 col-xs-12">
        <img class="imagen" src="img/${imagen.img}" alt="mapa">
        <h3 class = "Titulo-imagen"> ${imagen.nombre} </h3>
        <p class="Descripcion-imagen"> ${imagen.descripcion} </p>
    </div>
    `)
}


// --------------------------- CARTAS --------------------------//

const cartas = document.querySelector("#carticas");

const juegos = [{img: "Dark_Souls.jpg", nombre: "Dark Souls"},
{img: "Megaman.jpg", nombre: "Megaman"},
{img: "wotlk.jpg", nombre: "World of warcraft"},
{img: "Hollow_knight.jpg", nombre: "Hollow Knight"}];


for (let juego of juegos) {
    cartas.insertAdjacentHTML('afterbegin', 
    `<div class='card-container col-lg-4 col-sm-6 col-xs-12'>
        <div class='card'>
            <a class="card-link" href="#">
                <img src='img/${juego.img}' class='card-img-top'>
            </a>
            <div class='card-body'>
                <h5 class='card-title'>${juego.nombre}</h5>
                <p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>`);
}


const asd = document.querySelector(".boton");

// header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// header("Access-Control-Allow-Headers: Origin");
// header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies

asd.addEventListener("click", function(){
    var settings = {
        // "async": true,
        // "crossDomain": true,
        "url": "https://rh-restserver-demo.herokuapp.com/login",
        "method": "POST",
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/x-www-form-urlencoded",          
            "cache-control": "no-cache",
            "postman-token": "b87215c3-18bd-e414-e559-cfdd305ddd6e",
           "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
           "Access-Control-Allow-Headers": "Origin"
        },
        "data": {
          "email": "user1@gmail.com",
          "password": "123"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
})

