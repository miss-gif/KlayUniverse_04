/* section UNIVERSE 슬라이드 컨트롤 */

const swiper1 = new Swiper(".UNIVERSE .swiper", {
  direction: "horizontal", // 수평 슬라이드
  autoplay: {
    // 자동 재생 여부
    delay: 3500, // 3.5초마다 슬라이드 교체
  },
  loop: true, // 반복 재생 여부
  spaceBetween: 20, // 슬라이드 사이 여백
  slidesPerView: 2, // 한 번에 보여줄 슬라이드 개수
  slidesPerGroup: 1, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  breakpoints: {
    1275: {
      slidesPerView: 4.7,
    },
    940: {
      slidesPerView: 3.7,
    },
  },
});
