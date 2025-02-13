// script.js

// Contador para el botón "No"
let noClickCount = 0;

// Mensajes en orden para el botón "No"
const noMessages = [
    "¿estás segura?", 
    "¿de verdad no quieres? :(", 
    "¡Estamos pololeando!", 
    "Que triste :(", 
    "¡no me importa!, di que sí >:("
];

// Function to handle button click events
function selectOption(option) {
    if (option === 'si') {
        flashRainbowColors(function() {
            showLoveMessage(); // Muestra el mensaje y el gato en grande
        });
    } else if (option === 'no') {
        if (noClickCount < noMessages.length) {
            document.getElementById('no-button').innerText = noMessages[noClickCount];
            noClickCount++; 
        } else {
            document.getElementById('no-button').innerText = noMessages[noMessages.length - 1]; 
        }

        // Aumenta el tamaño del botón "Sí" en cada intento
        let siButton = document.getElementById('si-button');
        let currentFontSize = window.getComputedStyle(siButton).getPropertyValue('font-size');
        let newSize = parseFloat(currentFontSize) * 1.5; // Aumenta el tamaño en 50%
        siButton.style.fontSize = newSize + 'px';
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); 
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; 
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the final love message and the big cat-heart gif
function showLoveMessage() {
    // Oculta la pregunta y botones
    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';

    // Muestra el mensaje
    var textContainer = document.getElementById('text-container');
    textContainer.innerHTML = '<h1 id="love-message">¡Sabía que dirías que sí! Te amo mucho ❤️</h1>';

    // Muestra el gato grande
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; 
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.style.width = '1000px'; 
    catHeartImage.style.height = 'auto';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
    };
}

// Display the cat.gif initially
displayCat();

