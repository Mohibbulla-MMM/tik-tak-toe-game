let i = 0;
let boxItem = document.querySelectorAll(".mm-box");
boxItem.forEach((element) => {
  element.addEventListener("click", function () {
    i++;
    if (i % 2 !== 0) {
      element.classList.add("bg-emerald-800");
    } else {
      element.classList.add("bg-purple-800");
    }
  });
});
let eventA = [];
let oddB = [];

let clickCounter = 1;
document.getElementById("box-1").addEventListener("click", function () {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    oddB.push(1);
  } else {
    eventA.push(1);
  }
  checker();
});
document.getElementById("box-2").addEventListener("click", function () {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    oddB.push(2);
  } else {
    eventA.push(2);
  }
  checker();
});
document.getElementById("box-3").addEventListener("click", function () {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    oddB.push(3);
  } else {
    eventA.push(3);
  }
  checker();
});
document.getElementById("box-4").addEventListener("click", function () {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    oddB.push(4);
  } else {
    eventA.push(4);
  }
  checker();
});
document.getElementById("box-5").addEventListener("click", function () {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    oddB.push(5);
  } else {
    eventA.push(5);
  }
  checker();
});
document.getElementById("box-6").addEventListener("click", function () {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    oddB.push(6);
  } else {
    eventA.push(6);
  }
  checker();
});
document.getElementById("box-7").addEventListener("click", function () {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    oddB.push(7);
  } else {
    eventA.push(7);
  }
  checker();
});
document.getElementById("box-8").addEventListener("click", function () {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    oddB.push(8);
  } else {
    eventA.push(8);
  }
  checker();
});
document.getElementById("box-9").addEventListener("click", function () {
  clickCounter++;
  if (clickCounter % 2 !== 0) {
    oddB.push(9);
  } else {
    eventA.push(9);
  }
  checker();
});

// console.log(eventA, "event");
// console.log(oddB, "odd");
// let mainContainer = document.getElementById("main-container");
// mainContainer.addEventListener("click", function (e) {
//   if (e.type === "click") {
//     // console.log("click mmmmmmmmmm");
//     e.preventDefault();
//   }
//   // console.log(e.key);
// });

function checker() {
  let arrayCheck = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  // user one check ======================
  let mmNewArray = eventA.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arrayCheck.length; i++) {
    let valuei = arrayCheck[i];
    for (let x = 0; x < mmNewArray.length; x++) {
      let commonValuesEvent = mmNewArray.filter((value) =>
        valuei.includes(value)
      );
      for (let y = 0; y < valuei.length; y++) {
        if (
          valuei[y] === commonValuesEvent[y] &&
          commonValuesEvent.length == 3
        ) {
          let comgratulationsMessage = document.getElementById("mm-modal");
          comgratulationsMessage.style.display = "block";
          for (let success = 0; success < commonValuesEvent.length; success++) {
            let idName = "box-";
            let idCounter = commonValuesEvent[success];
            let idFullName = idName + idCounter;
            let itemStyle = document.getElementById(idFullName);
            itemStyle.classList.add("mm-border");
          }
          let userName = document.getElementById("user-name");
          userName.innerText = "User-1";

          let user1Icon = document.getElementById("user1-icon");
          user1Icon.classList.add("text-color", "fa-user-secret");
          // console.log("game end");
        }
      }
    }
  }

  // user two check ======================
  let mmNewArray2 = oddB.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arrayCheck.length; i++) {
    let valuei = arrayCheck[i];
    for (let x = 0; x < mmNewArray2.length; x++) {
      let commonValuesEvent = mmNewArray2.filter((value) =>
        valuei.includes(value)
      );
      for (let y = 0; y < valuei.length; y++) {
        if (
          valuei[y] === commonValuesEvent[y] &&
          commonValuesEvent.length == 3
        ) {
          let comgratulationsMessage = document.getElementById("mm-modal");
          comgratulationsMessage.style.display = "block";
          for (let success = 0; success < commonValuesEvent.length; success++) {
            let idName = "box-";
            let idCounter = commonValuesEvent[success];
            let idFullName = idName + idCounter;
            let itemStyle = document.getElementById(idFullName);
            itemStyle.classList.add("mm-border");
          }
          let userName = document.getElementById("user-name");
          userName.classList.add("text-purple-800");
          userName.innerText = "User-2";
          let user2Icon = document.getElementById("user2-icon");
          user2Icon.classList.add("text-color", "fa-user-secret");
          return;
        }
      }
    }
  }
  if (clickCounter >= 10) {
    let comgratulationsMessage = document.getElementById("mm-modal");
    comgratulationsMessage.style.display = "block";
    let img = document.getElementById("img");
    img.src = "image/opps.jpg";
    let userName = document.getElementById("user-name");
    userName.classList.add("text-red-700");
    userName.innerText = "this match draw";
    let congragtulationTextDelete = document.getElementById(
      "congragtulation-text"
    );
    congragtulationTextDelete.innerText = " ";

    document.getElementById("ok-btn").addEventListener("click", function () {
      location.href = "index.html";
    });
  }
}
