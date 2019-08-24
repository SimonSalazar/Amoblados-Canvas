// -------------------- HEADER -----------------------//

const HeaderC = document.getElementById("navbar");
const Button = document.querySelector(".navbar-toggler")

window.addEventListener("scroll", function() {
    if (window.scrollY === 0) {
        HeaderC.style.backgroundColor = "transparent"
    } else {
        HeaderC.style.backgroundColor = "#55b4e4"

    }
});

function TG(){
    Button.firstElementChild.classList.toggle("navbar-close-icon");
};

Button.addEventListener("click", function(){
    window.setTimeout(TG, 450);
})

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