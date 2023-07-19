let count = 0;
const intervalTime = 5000;
const indicatorCircle = "●";
const indicatorDot = "・";

const imageSourcesHorizontal = [
    "Images/homemade-meatball-horizontal.jpg",
    "Images/italian-sausage-horizontal.jpg",
    "Images/homemade-meatball-horizontal.jpg",
    "Images/hawaiian-horizontal.jpg",
];

const imageSourcesVertical = [
    "Images/homemade-meatball-vertical.jpg",
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
    let index = getIndex();
    changeImage(index);
    changeIndicator(index);
    count += 1;
};

let interval = setInterval(changeImageByInterval, intervalTime);

function changeImageByIndicator(event) {
    let element = event.currentTarget;
    let index = parseInt(element.getAttribute("data-value"));

    if(element.innerText === indicatorCircle) {
        return;
    } else {
        changeImage(index);
        changeIndicator(index);
        count = index + 1;
    }

    clearInterval(interval);
    interval = setInterval(changeImageByInterval, intervalTime);
}

const getIndex = () => count % 4;

function changeImage(index) {
    let imgElement = document.getElementById("background-image");
    let srcElement = document.getElementById("background-source");
    let pElement = document.getElementById("image-overlay-title");
    let imgSourceH = imageSourcesHorizontal[index];
    let imgSourceV = imageSourcesVertical[index];
    imgElement.setAttribute("src", imgSourceH);
    srcElement.setAttribute("srcset", imgSourceV);
    pElement.innerText = paragraphs[index];
}

function changeIndicator(index) {
    let indicators = document.getElementsByClassName("indicators");
    for(let i = 0; i < indicators.length; i++) {
        if(i === index) {
            indicators[i].innerText = indicatorCircle;
        } else {
            indicators[i].innerText = indicatorDot;
        }
    }
}