

let words = document.querySelectorAll(".word");
// changeText = document.querySelector(".change-text");

words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});


let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {

        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


// CIRCLE SKILLS

const circles = document.querySelectorAll(".circle");

circles.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = "";
    let rotate = 360 / dots;
    for (let i = 0; i < dots; i++) {

        points += `<div class="points" style="--i: ${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;
    const pointsMarkerd = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarkerd[i].classList.add("marked");
    }
})


// PARA EL MIX DE BUSQUEDA

var mixer = mixitup(".portafolio-gallery");


// ACTIVE MENU


const menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll(".sec");



function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 96 < section[len].offsetTop) {
        menuli.forEach(sec => {
            sec.classList.remove("active");


        });

    }
    menuli[len].classList.add("active")
}

window.addEventListener("scroll", activeMenu);

// SKILLL NABVAR{}


const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
})

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");


// toggle navbar

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// PARALLAX OBSERVER

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));


// NUEVAS FUNCIONES

function obtenerHoraActual() {
    let fecha = new Date();
    let horas = fecha.getHours();
    return horas;
}

function SaludoUsuario() {
    let hora = obtenerHoraActual();
    let cadena = "";
    console.log(hora);
    if (hora < 12) {
        cadena = "Buenos Dias!!";
    }
    if (hora >= 12 && hora <= 18) {
        cadena = "Buenas Tardes!!";
    }

    if (hora > 18 && hora < 24) {
        cadena = "Buenas Noches!!"
    }



    document.querySelector("#txtSaludo").innerHTML = cadena;
}







//IMAGENES CURSOS
let NombreImagenes = [
    {
        id: 1,
        ruta: "img/cplus.png",
        nombre: "Introduccion a c++"
    },
    {
        id: 2,
        ruta: "img/css.png",
        nombre: "Introduccion a css"
    },
    {
        id: 3,
        ruta: "img/html.png",
        nombre: "Html"
    },
    {
        id: 4,
        ruta: "img/intropython.png",
        nombre: "Introduccion a Python"
    },
    {
        id: 5,
        ruta: "img/java.png",
        nombre: "Introduccion a Java"
    },
    {
        id: 6,
        ruta: "img/js.png",
        nombre: "Introduccion a Javascript"
    },
    {
        id: 7,
        ruta: "img/responsiveweb.png",
        nombre: "Responsive web"
    },
    {
        id: 8,
        ruta: "img/sql.png",
        nombre: "Introduccion a Sql"
    }
];



function pintadoCursos() {
    let cadena = "";
    NombreImagenes.forEach(element => {
        cadena += `<div class="swiper-slide box">
     <div class="icons">
       <a href="#">
         <i class="bx bxs-happy-heart-eyes bx-tada"></i
       ></a>
       <a href="#"><i class="bx bxs-cloud-download"></i></a>
       <a href="#"><i class="bx bxs-share-alt bx-tada"></i></a>
     </div>
     <div class="image">
       <img src="${element.ruta}" alt="" />
     </div>
     <div class="content">
       <div class="">
         <h4>${element.nombre}</h4>
       </div>
       <div class="btn-box btncard service-btn">
       <button id="btnTarget" value="${element.id}" class="btncuatro">Ver</button>
       </div>
     </div>
     
   </div>`
    });
    document.querySelector("#Pintando1").innerHTML = cadena;
}

{/* <div class="btn-box btncard service-btn"> */ }



// SLIDER VIEWCARDS

function swiperCargando() {
    let swiper = new Swiper(".card-slider", {
        spaceBetween: 20,
        slidesPerView: 4,
        loop: true,
        pagination: true,
        centeredSlides: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        keyboard: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1, // 1 slide en pantallas pequeñas
            },
            480: {
                slidesPerView: 2, // 2 slides en pantallas pequeñas
            },
            768: {
                slidesPerView: 3, // 3 slides en tabletas
            },
            1024: {
                slidesPerView: 4, // 4 slides en pantallas grandes
            },
            1200: {
                slidesPerView: 5, // 5 slides en pantallas extra grandes
            },
        },

    });
}


let modalImage = document.querySelector("#dialogImage");
const boximage = document.querySelector("#boximage");

function AmpliarImagen() {
    let btnTarget = document.querySelectorAll("#btnTarget");
    for (btn of btnTarget) {
        btn.addEventListener("click", function (e) {
            let valor = this.value;
            const buscar = NombreImagenes.find((ima) => ima.id == valor);
            let pintarTarjeta = "";

            pintarTarjeta = `<div class="header">
              <h5>${buscar.nombre}</h5>
            </div>
            <div class="bodyTarget">
              <img src="${buscar.ruta}" alt="" />
            </div>`;
            boximage.innerHTML = pintarTarjeta;
            modalImage.showModal();
        });
    }
}

function cerrarModal() {
    modalImage.close();
}

document.querySelector(".cerrardialog").addEventListener("click", (e) => {
    cerrarModal();
})


// function toggleDarkMode(element) {
//     element.classList.toggle('active');
//     console.log(element);
//     document.body.classList.toggle('dark');

// }
// onclick="toggleDarkMode(this)"

const body = document.body;

const modeToggle = body.querySelector("#toggle-switch");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}


modeToggle.addEventListener("click", (e) => {
    let element = e.target; // 'element' se refiere al objetivo del evento
    let values = modeToggle.classList.toggle("active"); // Cambié 'e' por 'element' para toggle

    console.log(values);
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});





// luisfer123
// fernando123
// Casa_123



// $card.addEventListener('mouseenter', () => {
//   bounds = $card.getBoundingClientRect();
//   document.addEventListener('mousemove', rotateToMouse);
// });

// $card.addEventListener('mouseleave', () => {
//     document.removeEventListener('mousemove', rotateToMouse);
//     $card.style.transform = '';
//     $card.style.background = '';
// });


// COLORES

let colorChange = "#00f0e6";
// spectrum patronus
$("#btnColor").spectrum({
    color: "#f00",
    showPalette: false,
    showAlpha: true,
    showButtons: false,
});

var styleElement = document.createElement("style");
styleElement.rel = "stylesheet";
styleElement.href = "css/elementos.css";
document.head.appendChild(styleElement);

$("#btnColor").on("dragstop.spectrum", function (e, color) {

    styleElement.textContent = `
    :root {
  --primary-color: ${color.toHexString()} !important;
}`;

    colorChange = color.toHexString();
});

//ENVIAR MENSAKE
const btnEnviarMensaje = document.querySelector("#btnEnviarMensaje");

if (btnEnviarMensaje) {
    btnEnviarMensaje.addEventListener('click', function () {
        const numero = '+50251121954';
        // Mensaje personalizable
        const mensaje = 'Hola';
        // URL de WhatsApp con mensaje codificado
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        // Abrir en una nueva pestaña
        window.open(url, '_blank');
    });
}

const audio = new Audio('js/reproducir.mpeg');

// window.onload = function (e) {
//     SaludoUsuario();
//     pintadoCursos();
//     swiperCargando();
//     AmpliarImagen();

// }

// INICIOOO
window.onload = function () {
    // inicioAlerta(); 
    SaludoUsuario();
    pintadoCursos();
    swiperCargando();
    AmpliarImagen();
    // Esperar a que el usuario haga clic para reproducir el audio
    document.addEventListener('click', function () {
        if (audio && typeof audio.play === 'function') {
            audio.play().catch(function (error) {
                console.error('Error al intentar reproducir el audio:', error);
            });
        } else {
            console.error('El objeto audio no está definido o no tiene el método play.');
        }
    }, { once: true }); // Elimina el evento después del primer clic
};



let timerInterval;

function inicioAlerta() {
    Swal.fire({
        title: "Hackeando Cuentas De Banco (⊙ˍ⊙)",
        html: "Reenviando Datos Confidenciales En <b style='color: var(--primary-color)' ></b> Milisegundos.",
        timer: 9000,
        timerProgressBar: true,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonColor: '#e80049',
        confirmButtonText: 'Terminar Ahora',
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("La alerta fue cerrada manualmente.");
        } else if (result.dismiss === Swal.DismissReason.timer) {
            console.log("Se cerró automáticamente por el temporizador.");
        }
    });
}




const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

// playButton.addEventListener('click', () => {
// });



//ENVIAR CORREO ELECTRONIC

const btnEnviarcorreo = document.querySelector("#btnEnviarcorreo");
const nombrePersona = document.querySelector("#nombrePersona");
const correoPersona = document.querySelector("#correoPersona");
const mensajePersona = document.querySelector("#mensajePersona");

// LABELS
const labelNombre = document.querySelector("#labelNombre");
const labelCorreo = document.querySelector("#labelCorreo");
const labelMensaje = document.querySelector("#labelMensaje");

if (btnEnviarcorreo) {
    btnEnviarcorreo.addEventListener("click", (e) => {
        emailjs.init("iM_jA3VFtlpSZW9wq"); // Reemplaza con tu user_id
        // enviarCorreo(nombrePersona, correoPersona, mensajePersona);
        let retorno1 = validateCamposVacios(nombrePersona, labelNombre, "Nombres")
        let retorno2 = validarGmail();
        let retorno3 = validateCamposVacios(mensajePersona, labelMensaje, "Mensaje");
        if (retorno1 && retorno2 && retorno3 == 1) {
            enviarCorreo(nombrePersona.value, correoPersona.value, mensajePersona.value);
        }

    });
}

function validarGmail() {
    const fieldValue = correoPersona.value;
    const regex = new RegExp("^(.*)@(gmail|googlemail|(.*.)google).com");
    let retorno = 0;

    if (fieldValue.trim().length === 0) {
        labelCorreo.innerHTML = "*Por favor llenar el campo";
        labelCorreo.style.color = "red";
        retorno = 0;

    } else if (!regex.test(fieldValue)) {
        labelCorreo.innerHTML = "*No cumple como un correo válido.";
        labelCorreo.style.color = "red";
        retorno = 0;

    } else {
        labelCorreo.style.color = "var(--text-color)";
        labelCorreo.innerText = "Correo";
        retorno = 1;
    }
    return retorno;
}

function validateCamposVacios(campo, label, nombre) {
    const valor = campo.value;
    let retorno = 0;

    if (valor.trim().length === 0) {
        label.innerHTML = "*Por favor llenar el campo";
        label.style.color = "red";
        retorno = 0;
    } else {
        label.style.color = "var(--text-color)";
        label.innerText = nombre;
        retorno = 1;
    }
    return retorno;

}





function enviarCorreo(nombre, email, mensaje) {
    const templateParams = {
        nombrePersona: nombre,
        correoPersona: email,
        mensajePersona: mensaje
    };

    emailjs.send('service_r6cul01', 'template_7ipfi4q', templateParams)
        .then((response) => {
            console.log('Correo enviado con éxito!', response.status, response.text);
            alertaCorreo("Correo", "Correo enviado correctamente!!", "success");
            nombrePersona.value = "";
            correoPersona.value = "";
            mensajePersona.value = "";

        }, (error) => {
            console.error('Error al enviar correo:', error);
            alertaCorreo("Correo", "Error al enviar el mensaje", "error");
        });
}

// Ejemplo de uso

function alertaCorreo(titulo, texto, icono) {
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icono
    });
}


//LEER JSON
mostrar();

function mostrar() {
    mostrardataJson();
}


async function mostrardataJson() {
    const verJobs = document.querySelector("#verJobs");
    let data = await leerJson();
    let pintarUno = "";
    if (data.length != 0) {
        let datos = data.jobs;
        datos.forEach(element => {

            pintarUno += `
        <div class="second port-box web">
            <img
              src="${element.pathImagen}"
              alt=""
              class="imagedos"
            />
            <div class="text_container"></div>
            <div class="logoimagen">
              <i class="bx bx-cloud-download bx-tada"></i>
            </div>
            <div class="main_text">
              <p>
                ${element.descripcion}
              </p>
            </div>
            <div class="date">
              <p>${element.fechaFin}</p>
            </div>
            <button value="${element.id}" class="card_btn">Detalles</button>
          </div>
            `;

        });

    } else {
        alert("casa");
    }

    verJobs.innerHTML = pintarUno;
}


async function leerJson() {
    try {
        const response = await fetch('js/trabajos.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al leer el JSON:', error);
    }
}



