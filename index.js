// floating menu icon toggle

const floatingMenu = document.getElementById("floating-navigation-menu");
const floatingHamburgerIcon = document.getElementById(
  "floating-hamburger-icon"
);
const floatingMenuCloseIcon = document.getElementById(
  "floating-menu-close-icon"
);
const onOpenMenu = () => {
  floatingMenu.classList = "floating-navigation-menu";
};

const onCloseMenu = () => {
  floatingMenu.classList = "invisible";
};

floatingHamburgerIcon.addEventListener("click", () => onOpenMenu());
floatingMenuCloseIcon.addEventListener("click", () => onCloseMenu());

// mobile menu page, menu image visibility toggle

for (let i = 1; i <= 8; i++) {
  const baseId = `menu-${i}`;
  const toggleEle = document.getElementById(baseId + "-toggle");
  toggleEle.addEventListener("click", () => {
    const menuImageEle = document.getElementById(baseId + "-img");
    const cameraIcon = document.getElementById("camera-icon-" + i);
    const cameraWithSlashIcon = document.getElementById(
      "camera-with-slash-icon-" + i
    );
    if (menuImageEle.classList.contains("invisible")) {
      menuImageEle.classList.remove("invisible");
      menuImageEle.classList.add("menu-img");
      cameraIcon.classList.add("invisible");
      cameraWithSlashIcon.classList.remove("invisible");
    } else {
      menuImageEle.classList.add("invisible");
      menuImageEle.classList.remove("menu-img");
      cameraIcon.classList.remove("invisible");
      cameraWithSlashIcon.classList.add("invisible");
    }
  });
}
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
