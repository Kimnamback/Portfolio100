
const images = ["background0000.jpg","background0001.jpg","background0002.jpg"]; 

const chosenImage = images [Math.floor(Math.random() * images.length)]; 

const image = document.createElement("img");

image.src = `img/${chosenImage}`;

image.style.width = 1520;
image.style.height = 970;



document.body.appendChild(image);

