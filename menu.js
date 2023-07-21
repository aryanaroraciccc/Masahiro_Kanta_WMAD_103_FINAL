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