console.log("main 연결");

/* nav 네비 메뉴 버튼 제어 */
const navMenu = document.querySelectorAll("nav>ul>li>a");

navMenu[0].addEventListener("click", function () {
  navMenu[0].classList.add("active");
  navMenu[1].classList.remove("active");
  navMenu[2].classList.remove("active");
  navMenu[3].classList.remove("active");
  navMenu[4].classList.remove("active");
  navMenu[5].classList.remove("active");
});

navMenu[1].addEventListener("click", function () {
  navMenu[0].classList.remove("active");
  navMenu[1].classList.add("active");
  navMenu[2].classList.remove("active");
  navMenu[3].classList.remove("active");
  navMenu[4].classList.remove("active");
  navMenu[5].classList.remove("active");
});

navMenu[2].addEventListener("click", function () {
  navMenu[0].classList.remove("active");
  navMenu[1].classList.remove("active");
  navMenu[2].classList.add("active");
  navMenu[3].classList.remove("active");
  navMenu[4].classList.remove("active");
  navMenu[5].classList.remove("active");
});

navMenu[3].addEventListener("click", function () {
  navMenu[0].classList.remove("active");
  navMenu[1].classList.remove("active");
  navMenu[2].classList.remove("active");
  navMenu[3].classList.add("active");
  navMenu[4].classList.remove("active");
  navMenu[5].classList.remove("active");
});

navMenu[4].addEventListener("click", function () {
  navMenu[0].classList.remove("active");
  navMenu[1].classList.remove("active");
  navMenu[2].classList.remove("active");
  navMenu[3].classList.remove("active");
  navMenu[4].classList.add("active");
  navMenu[5].classList.remove("active");
});

navMenu[5].addEventListener("click", function () {
  navMenu[0].classList.remove("active");
  navMenu[1].classList.remove("active");
  navMenu[2].classList.remove("active");
  navMenu[3].classList.remove("active");
  navMenu[4].classList.remove("active");
  navMenu[5].classList.add("active");
});

/* section 섹션4 ROADMAP 탭메뉴 버튼 제어 */

const tabMenu = document.querySelectorAll("article>ul>li>a");
const tabList = document.querySelectorAll(".tabList");

tabMenu[0].addEventListener("click", function (e) {
  e.preventDefault();
  tabMenu[0].classList.add("active");
  tabMenu[1].classList.remove("active");
  tabMenu[2].classList.remove("active");
  tabList[0].classList.remove("hide");
  tabList[1].classList.add("hide");
  tabList[2].classList.add("hide");
});

tabMenu[1].addEventListener("click", function (e) {
  e.preventDefault();
  tabMenu[0].classList.remove("active");
  tabMenu[1].classList.add("active");
  tabMenu[2].classList.remove("active");
  tabList[0].classList.add("hide");
  tabList[1].classList.remove("hide");
  tabList[2].classList.add("hide");
});

tabMenu[2].addEventListener("click", function (e) {
  e.preventDefault();
  tabMenu[0].classList.remove("active");
  tabMenu[1].classList.remove("active");
  tabMenu[2].classList.add("active");
  tabList[0].classList.add("hide");
  tabList[1].classList.add("hide");
  tabList[2].classList.remove("hide");
});

/* aside 버튼을 클릭하면 모달창이 열림 */

const asideBtn = document.querySelectorAll("aside>ul>li>a");
const modalNotPage = document.querySelector(".modalNotPage");

asideBtn[0].addEventListener("click", function (e) {
  e.preventDefault();
  modalNotPage.classList.remove("hide");
});

asideBtn[2].addEventListener("click", function (e) {
  e.preventDefault();
  modalNotPage.classList.remove("hide");
});

/* 모달창 닫기 */

const modalClose = document.querySelector(".modalClose");
modalClose.addEventListener("click", function () {
  modalNotPage.classList.add("hide");
});

/* 언어 변경 버튼*/
const languageBtn = document.querySelectorAll(".languageBtn>li>button");

languageBtn[0].addEventListener("click", function () {
  languageBtn[0].classList.add("active");
  languageBtn[1].classList.remove("active");
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
});

languageBtn[1].addEventListener("click", function () {
  languageBtn[0].classList.remove("active");
  languageBtn[1].classList.add("active");
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
});
