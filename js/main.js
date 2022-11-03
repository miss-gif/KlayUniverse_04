console.log("main 연결");

/* nav 메뉴 버튼 제어 */
const navMenu = document.querySelectorAll("nav>.menu>li>a");

// 클릭하면 active 클래스를 추가함
navMenu.forEach(function (element) {
  element.addEventListener("click", function () {
    navMenu.forEach(function (element) {
      element.classList.remove("active");
    });
    element.classList.add("active");
  });
});

/* section 섹션4 ROADMAP 탭메뉴 버튼 제어 */

const tabMenu = document.querySelectorAll("article>ul>li>a");
const tabList = document.querySelectorAll(".tabList");

// 클릭하면 탭메뉴에 active 클래스를 추가함
// 탭리스트도 함께 변경됨
for (let i = 0; i < tabMenu.length; i++) {
  tabMenu[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < tabMenu.length; j++) {
      tabMenu[j].classList.remove("active");
      tabList[j].classList.add("hide");
    }
    tabMenu[i].classList.add("active");
    tabList[i].classList.remove("hide");
  });
}

/* aside 버튼 제어 */

const asideBtn = document.querySelectorAll("aside>ul>li>a");
const modalNotPage = document.querySelector(".modalNotPage");

// aside 버튼을 클릭하면 모달창이 열림
asideBtn.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (e.target == asideBtn[1]) {
    } else {
      e.preventDefault();
      modalNotPage.classList.remove("hide");
    }
  });
});

// 모달창 닫기 버튼
document.querySelector(".modalClose").addEventListener("click", function () {
  modalNotPage.classList.add("hide");
});

/* btnStyle 버튼 비활성화 */

const btnStyle = document.querySelectorAll(".btnStyle");

btnStyle.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (e.target == btnStyle[0]) {
    } else {
      e.preventDefault();
      modalNotPage.classList.remove("hide");
    }
  });
});
