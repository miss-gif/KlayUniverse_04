console.log("연결확인");

/* 네비게이션 메뉴 버튼 제어 */
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

/* 탭메뉴 버튼 제어 */

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
