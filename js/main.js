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
