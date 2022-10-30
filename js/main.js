console.log("main 연결");

/* nav 메뉴 버튼 제어 */
// nav의 li(a)를 클릭 했을 때, 해당 li(a)에 active클래스 추가

const navMenu = document.querySelectorAll("nav>.menu>li>a");
// nav의 모든 li(a)

for (let i = 0; i < navMenu.length; i++) {
  navMenu[i].addEventListener("click", function () {
    // nav의 li(a)를 클릭 했을 때,
    for (let j = 0; j < navMenu.length; j++) {
      navMenu[j].classList.remove("active");
      // nav의 li(a)의 모든 active클래스를 삭제
    }
    navMenu[i].classList.add("active");
    // 현재 index에 active 클래스를 추가
  });
}

/* section 섹션4 ROADMAP 탭메뉴 버튼 제어 */

const tabMenu = document.querySelectorAll("article>ul>li>a");
const tabList = document.querySelectorAll(".tabList");

for (let i = 0; i < tabMenu.length; i++) {
  tabMenu[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < tabMenu.length; j++) {
      tabMenu[j].classList.remove("active");
    }
    tabMenu[i].classList.add("active");

    for (let k = 0; k < tabList.length; k++) {
      tabList[k].classList.add("hide");
    }
    tabList[i].classList.remove("hide");
  });
}

/* aside 버튼을 클릭하면 모달창이 열림 */

const asideBtn = document.querySelectorAll("aside>ul>li>a");
const modalNotPage = document.querySelector(".modalNotPage");

for (let i = 0; i < asideBtn.length; i++) {
  asideBtn[i].addEventListener("click", function (e) {
    if (e.target == asideBtn[1]) {
    } else {
      e.preventDefault();
      modalNotPage.classList.remove("hide");
    }
  });
}

/* 모달창 닫기 */

const modalClose = document.querySelector(".modalClose");
modalClose.addEventListener("click", function () {
  modalNotPage.classList.add("hide");
});

/* 언어 변경 버튼*/
const languageBtn = document.querySelectorAll(".languageBtn>li>button");

for (let i = 0; i < languageBtn.length; i++) {
  languageBtn[i].addEventListener("click", function (e) {
    for (let j = 0; j < languageBtn.length; j++) {
      languageBtn[j].classList.remove("active");
    }
    languageBtn[i].classList.add("active");
    if (e.target == languageBtn[0]) {
      document.querySelector(".s01").innerHTML = lang.en.s01.desc;
      document.querySelector(".s03").innerText = lang.en.s03.desc;
      document.querySelector(".q2_01").innerText = lang.en.s04.q2_01;
      document.querySelector(".q2_02").innerText = lang.en.s04.q2_02;
      document.querySelector(".q2_03").innerText = lang.en.s04.q2_03;
      document.querySelector(".q2_04").innerText = lang.en.s04.q2_04;
      document.querySelector(".q2_05").innerText = lang.en.s04.q2_05;
      document.querySelector(".q2_06").innerText = lang.en.s04.q2_06;
      document.querySelector(".q2_07").innerText = lang.en.s04.q2_07;
      document.querySelector(".q2_08").innerText = lang.en.s04.q2_08;
      document.querySelector(".q3_01").innerText = lang.en.s04.q3_01;
      document.querySelector(".q3_02").innerText = lang.en.s04.q3_02;
      document.querySelector(".q3_03").innerText = lang.en.s04.q3_03;
      document.querySelector(".q3_04").innerText = lang.en.s04.q3_04;
      document.querySelector(".q3_05").innerText = lang.en.s04.q3_05;
      document.querySelector(".q3_06").innerText = lang.en.s04.q3_06;
      document.querySelector(".q3_07").innerText = lang.en.s04.q3_07;
      document.querySelector(".q3_08").innerText = lang.en.s04.q3_08;
      document.querySelector(".q3_09").innerText = lang.en.s04.q3_09;
      document.querySelector(".q3_10").innerText = lang.en.s04.q3_10;
      document.querySelector(".q3_11").innerText = lang.en.s04.q3_11;
      document.querySelector(".q3_12").innerText = lang.en.s04.q3_12;
      document.querySelector(".q3_13").innerText = lang.en.s04.q3_13;
      document.querySelector(".s05").innerText = lang.en.s05.desc;
      document.querySelector(".s06").innerText = lang.en.s06.desc;
      document.querySelector(".s07").innerHTML = lang.en.s07.desc;
    } else {
      document.querySelector(".s01").innerHTML = lang.kr.s01.desc;
      document.querySelector(".s03").innerText = lang.kr.s03.desc;
      document.querySelector(".q2_01").innerText = lang.kr.s04.q2_01;
      document.querySelector(".q2_02").innerText = lang.kr.s04.q2_02;
      document.querySelector(".q2_03").innerText = lang.kr.s04.q2_03;
      document.querySelector(".q2_04").innerText = lang.kr.s04.q2_04;
      document.querySelector(".q2_05").innerText = lang.kr.s04.q2_05;
      document.querySelector(".q2_06").innerText = lang.kr.s04.q2_06;
      document.querySelector(".q2_07").innerText = lang.kr.s04.q2_07;
      document.querySelector(".q2_08").innerText = lang.kr.s04.q2_08;
      document.querySelector(".q3_01").innerText = lang.kr.s04.q3_01;
      document.querySelector(".q3_02").innerText = lang.kr.s04.q3_02;
      document.querySelector(".q3_03").innerText = lang.kr.s04.q3_03;
      document.querySelector(".q3_04").innerText = lang.kr.s04.q3_04;
      document.querySelector(".q3_05").innerText = lang.kr.s04.q3_05;
      document.querySelector(".q3_06").innerText = lang.kr.s04.q3_06;
      document.querySelector(".q3_07").innerText = lang.kr.s04.q3_07;
      document.querySelector(".q3_08").innerText = lang.kr.s04.q3_08;
      document.querySelector(".q3_09").innerText = lang.kr.s04.q3_09;
      document.querySelector(".q3_10").innerText = lang.kr.s04.q3_10;
      document.querySelector(".q3_11").innerText = lang.kr.s04.q3_11;
      document.querySelector(".q3_12").innerText = lang.kr.s04.q3_12;
      document.querySelector(".q3_13").innerText = lang.kr.s04.q3_13;
      document.querySelector(".s05").innerText = lang.kr.s05.desc;
      document.querySelector(".s06").innerText = lang.kr.s06.desc;
      document.querySelector(".s07").innerHTML = lang.kr.s07.desc;
    }
  });
}

/* btnStyle 버튼 비활성화 */

const btnStyle = document.querySelectorAll(".btnStyle");

for (let i = 0; i < btnStyle.length; i++) {
  btnStyle[i].addEventListener("click", function (e) {
    if (e.target == btnStyle[0]) {
    } else {
      e.preventDefault();
      modalNotPage.classList.remove("hide");
    }
  });
}

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
