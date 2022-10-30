/* GALLERY 라이트박스 */
const lightboxImg = document.querySelectorAll(".GALLERY>.swiper>ul>li>img");

for (let i = 0; i < lightboxImg.length; i++) {
  lightboxImg[i].addEventListener("click", function (e) {
    const zoomInArea = document.querySelector(".zoomInArea");
    const zoomInImg = document.querySelector(".zoomInImg");
    if (lightboxImg[i].hasAttribute("data-lightboximg")) {
      zoomInArea.classList.remove("hide");
      const imageSrc = lightboxImg[i].getAttribute("data-lightboximg");
      zoomInImg.setAttribute("src", imageSrc);
    }
    zoomInImg.addEventListener("click", function () {
      zoomInArea.classList.add("hide");
      zoomInImg.setAttribute("src", "");
    });
  });
}
