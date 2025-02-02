// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeartWithMessage(); // Display cat-heart.gif with message
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'Estás segura? :c';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

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

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeartWithMessage() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
        displayLoveMessage();
    };
}

function displayLoveMessage() {
    var messageContainer = document.createElement('div');
    messageContainer.id = 'love-message';
    messageContainer.innerText = 'Eres mi niña favorita en el mundo, te amo mucho ❤️';
    messageContainer.style.fontSize = '34px';
    messageContainer.style.marginTop = '20px';
    messageContainer.style.color = '#ff4081';
    messageContainer.style.fontFamily = 'Sacramento, cursive';
    document.getElementById('container').appendChild(messageContainer);
}

displayCat();
