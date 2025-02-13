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
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        // Cambia el texto del botón "No" en orden
        if (noClickCount < noMessages.length) {
            document.getElementById('no-button').innerText = noMessages[noClickCount];
            noClickCount++; 
        } 
        
        // Si llega al último mensaje, oculta los botones
        if (noClickCount === noMessages.length) {
            document.getElementById('options').style.display = 'none';
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
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
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

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.style.width = '1000px'; // Ajusta el tamaño del GIF
    catHeartImage.style.height = 'auto';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();
