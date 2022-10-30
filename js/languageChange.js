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
