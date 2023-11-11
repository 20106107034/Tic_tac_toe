console.log("Welcome in console");

let enterbeep = new Audio("./beep-02.mp3");
let success = new Audio("./tadaa-47995.mp3");
let music = new Audio("./music.mp3");
let rstm = new Audio("./beep-03.mp3");
let drow = new Audio("./drow.mp3");

let turn = "x";
let win = "false";

// count of the wining count of x,0 and tie
let xc = 0;
let oc = 0;
let tie = 0;

let img = document.getElementsByClassName("imge");

const change_turn = () => {
  return turn === "x" ? "o" : "x";
};

//  write a function for check the wining condition
let checkTie = () => {
  let textbox = document.getElementsByClassName("boxitem");
  for (let a = 0; a <= 8; a++) {
    if (textbox[a].innerHTML === "") return;
  }
  //   console.log("Drow");
  tie++;
  let count = document.getElementsByClassName("con");
  count[2].innerHTML = tie;

  // updatate data
  let dro = document.getElementById("win");
  dro.style.display = "flex";
  dro.innerHTML = "Match Drow";
  dro.style.backgroundColor = "blue";
  dro.style.color = "white";
  drow.play();

  Array.from(textbox).forEach((element) => {
    element.innerHTML = "";
  });

  // update the turn
  turn = "x";
  document.getElementById("turn_w").innerHTML = turn;
};

let checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let boxTexts = document.getElementsByClassName("boxitem");
  Array.from(wins).forEach((ele) => {
    if (
      boxTexts[ele[0]].innerHTML === boxTexts[ele[1]].innerHTML &&
      boxTexts[ele[1]].innerHTML === boxTexts[ele[2]].innerHTML &&
      boxTexts[ele[0]].innerHTML !== ""
    ) {
      // turn=boxTexts[ele[0]].innerHTML;
      if (boxTexts[ele[0]].innerHTML === "x") xc++;
      else oc++;
      //   console.log(xc, oc, tie);
      let count = document.getElementsByClassName("con");
      count[0].innerHTML = xc;
      count[1].innerHTML = oc;
      count[2].innerHTML = tie;
      //

      document.getElementById("win").innerHTML =
        boxTexts[ele[0]].innerHTML + " win";
      img[0].style.display = "flex";
      win = true;

      success.play();

      if (win) {
        let textbox = document.getElementsByClassName("boxitem");
        Array.from(textbox).forEach((element) => {
          element.innerHTML = "";
        });
        win = false;
      }

      turn = "x";
      document.getElementById("turn_w").innerHTML = turn;
    }
  });
};

let Box = document.getElementsByClassName("box");

// console.log(Box[0].innerHTML);

Array.from(Box).forEach((element) => {
  // console.log(element.querySelector(".boxitem"))
  let boxText = element.querySelector(".boxitem");
  element.addEventListener("click", (e) => {
    if (boxText.innerHTML === "") {
      boxText.innerHTML = turn;
      turn = change_turn();
      document.getElementById("turn_w").innerHTML = turn;
      enterbeep.play();
      checkWin();
      checkTie();
    }
  });
});

//music button
let btn_m = document.getElementById("btn_m");
// console.log(btn_m.innerHTML)
btn_m.addEventListener("click", (e) => {
  if (btn_m.innerHTML === "Play") {
    btn_m.innerHTML = "Mute";
    music.play();
  } else {
    btn_m.innerHTML = "Play";
    music.pause();
  }
});

// using Reset Button

let rst = document.getElementById("rst");
rst.addEventListener("click", () => {
  let textbox = document.getElementsByClassName("boxitem");
  Array.from(textbox).forEach((element) => {
    element.innerHTML = "";
  });
  img[0].style.display = "none";
  win = false;
  turn = "x";
  document.getElementById("turn_w").innerHTML = turn;
  rstm.play();
  xc = 0;
  oc = 0;
  tie = 0;
  let count = document.getElementsByClassName("con");
  count[0].innerHTML = xc;
  count[1].innerHTML = oc;
  count[2].innerHTML = tie;

  document.getElementById("win").style.display = "none";
});
