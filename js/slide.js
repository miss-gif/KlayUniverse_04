/* section 섹션3 UNIVERSE 슬라이드 컨트롤 */
const swiper1 = new Swiper(".UNIVERSE .swiper", {
  direction: "horizontal", // 수평 슬라이드
  autoplay: {
    // 자동 재생 여부
    delay: 3500, // 3.5초마다 슬라이드 교체
  },
  loop: true, // 반복 재생 여부
  spaceBetween: 20, // 슬라이드 사이 여백
  slidesPerGroup: 1, // 한 번에 슬라이드 할 개수
  // 반응형 $size이상에서 적용
  breakpoints: {
    1275: {
      slidesPerView: 4.7,
    },
    940: {
      slidesPerView: 3.7,
    },
  },
  slidesPerView: 2, // 한 번에 보여줄 슬라이드 개수
});

/* section 섹션5 TEAM 슬라이드 컨트롤 */
const swiper2 = new Swiper(".TEAM .swiper", {
  direction: "horizontal", // 수평 슬라이드
  autoplay: {
    // 자동 재생 여부
    delay: 3500, // 3.5초마다 슬라이드 교체
  },
  loop: true, // 반복 재생 여부
  spaceBetween: 20, // 슬라이드 사이 여백
  slidesPerGroup: 1, // 한 번에 슬라이드 할 개수
  // 반응형 $size이상에서 적용
  breakpoints: {
    1400: {
      slidesPerView: 6.7,
    },
    1275: {
      slidesPerView: 5.7,
    },
    740: {
      slidesPerView: 3.7,
    },
    320: {
      slidesPerView: 2,
    },
  },
  slidesPerView: 2, // 한 번에 보여줄 슬라이드 개수
});

/* section 섹션7 GALLERY 슬라이드 컨트롤 */
const swiper3 = new Swiper(".GALLERY .swiper", {
  direction: "horizontal", // 수평 슬라이드
  autoplay: {
    // 자동 재생 여부
    delay: 3500, // 3.5초마다 슬라이드 교체
  },
  loop: true, // 반복 재생 여부
  spaceBetween: 20, // 슬라이드 사이 여백
  slidesPerGroup: 1, // 한 번에 슬라이드 할 개수
  // 반응형 $size이상에서 적용
  breakpoints: {
    1275: {
      slidesPerView: 3.7,
    },
    720: {
      slidesPerView: 2.7,
    },
  },
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  pagination: {
    // 페이지 번호 사용 여부
    el: ".swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 페이지 버튼 활성화
  },
});
