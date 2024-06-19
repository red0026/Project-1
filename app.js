const colors = ["green", "red", "blue", "yellow", "white"];
const images = {
  green: "green.png",
  red: "red.png",
  blue: "blue.png",
  yellow: "yellow.png",
  white: "white.png",
};

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colorImage = document.getElementById("colorImage");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  const selectedColor = colors[randomNumber];

  document.body.style.backgroundColor = selectedColor;
  color.textContent = selectedColor;
  colorImage.src = images[selectedColor];
  colorImage.alt = selectedColor + " image";
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
