//automaticaly change background image
let count = 0;
const intervalTime = 5000;
const indicatorCircle = "●";
const indicatorDot = "・";

const imageSourcesHorizontal = [
  "Images/original-horizontal.jpg",
  "Images/italian-sausage-horizontal.jpg",
  "Images/homemade-meatball-horizontal.jpg",
  "Images/hawaiian-horizontal.jpg",
];

const imageSourcesVertical = [
  "Images/original-vertical.jpg",
  "Images/italian-sausage-vertical.jpg",
  "Images/homemade-meatball-vertical.jpg",
  "Images/hawaiian-vertical.jpg",
];

const paragraphs = [
  "SLICE OF YOUR LIFE",
  "ITALIAN SAUSAGE",
  "HOMEMADE MEETBALL",
  "HAM & CAMEMBERT",
];

function changeImageByInterval() {
  let index = count % (imageSourcesHorizontal.length - 1);
  count += 1;
  changeIndicator(index);
  changeImage(index);
}

let interval = setInterval(changeImageByInterval, intervalTime);

function changeImageByIndicator(event) {
  let element = event.currentTarget;
  let index = parseInt(element.getAttribute("data-value"));

  if (element.innerText === indicatorCircle) {
    return;
  } else {
    count = index + 1;
    changeIndicator(index);
    changeImage(index);
  }

  clearInterval(interval);
  interval = setInterval(changeImageByInterval, intervalTime);
}

function changeImage(index) {
  let imgElement = document.getElementById("background-image");
  let srcElement = document.getElementById("background-source");
  let pElement = document.getElementById("image-overlay-title");
  let imgSourceH = imageSourcesHorizontal[index];
  let imgSourceV = imageSourcesVertical[index];
  imgElement.setAttribute("src", imgSourceH);
  srcElement.setAttribute("srcset", imgSourceV);
  pElement.innerHTML = `<b>${paragraphs[index]}</b>`;
  imgElement.classList.remove("zoom-out-animation");
  // Schedule the animation on the next frame to ensure smooth animations.
  requestAnimationFrame(() => {
    imgElement.classList.add("zoom-out-animation");
  });
}

function changeIndicator(index) {
  let indicators = document.getElementsByClassName("indicators");
  for (let i = 0; i < indicators.length; i++) {
    if (i === index) {
      indicators[i].innerText = indicatorCircle;
    } else {
      indicators[i].innerText = indicatorDot;
    }
  }
}

//scroll detection
const scrollElement = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.innerWidth <= 770) {
        //For Mobile version, remove style
        scrollElement.classList.remove("header-moved");
        return;
    }
    if (window.scrollY <= 0) {
      scrollElement.classList.remove("header-moved");
    } else {
      scrollElement.classList.add("header-moved");
    }
});