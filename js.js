// Lista de palabras o frases
const palabras = [
  "Te quiero ❤️",
  "Eres especial ✨",
  "Gracias por existir 💖",
  "Siempre contigo 💫",
  "Sonríe 😊",
  "Momentos eternos 🌸"
];

// Contenedor principal
const contenedor = document.createElement("div");
contenedor.style.position = "fixed";
contenedor.style.top = "0";
contenedor.style.left = "0";
contenedor.style.width = "100%";
contenedor.style.height = "100%";
contenedor.style.pointerEvents = "none";
document.body.appendChild(contenedor);

// Crear palabra flotante
function crearPalabra() {
  const palabra = document.createElement("span");
  palabra.innerText = palabras[Math.floor(Math.random() * palabras.length)];

  // Estilos
  palabra.style.position = "absolute";
  palabra.style.left = Math.random() * 100 + "vw";
  palabra.style.bottom = "-50px";
  palabra.style.fontSize = (14 + Math.random() * 16) + "px";
  palabra.style.color = "rgba(221, 11, 116, 0.8)";
  palabra.style.fontFamily = "Poppins, sans-serif";
  palabra.style.animation = "flotar 6s linear";

  contenedor.appendChild(palabra);

  // Eliminar después de la animación
  setTimeout(() => {
    palabra.remove();
  }, 6000);
}

// Crear palabras cada cierto tiempo
setInterval(crearPalabra, 800);

// Animación CSS inyectada desde JS
const style = document.createElement("style");
style.innerHTML = `
@keyframes flotar {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(-110vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
