let g = 0;
let i = 0;
let gamedone = false;
let game = document.getElementsByClassName("game");
for (let i = 1; i <= 9; i++) {
  let box = document.getElementById("b" + i);

  box.addEventListener("click", function () {
    if(gamedone) return
    if (g == 0) {
      box.innerHTML = '<img src="ticX.jpg" alt="Tic Tac X">';
      box.dataset.value = 0;
      g = 1;
    } else {
      box.innerHTML = '<img src="ticO.jpg" alt="Tic Tac O">';
      box.dataset.value = 1; 
      g = 0;
    }
    setTimeout(() => {
        check();
    },500)
    box.style.pointerEvents = "none";
  });
}
check = () => {
    if(gamedone) return;
    const wins = [
    ["b1", "b2", "b3"],
    ["b4", "b5", "b6"],
    ["b7", "b8", "b9"],
    ["b1", "b4", "b7"],
    ["b2", "b5", "b8"],
    ["b3", "b6", "b9"],
    ["b1", "b5", "b9"],
    ["b3", "b5", "b7"]
  ];

  for(let i of wins) {
    [x,y,z] = i.map(id => document.getElementById(id));
    if(x.dataset.value && x.dataset.value == y.dataset.value && x.dataset.value == z.dataset.value) {
        gamedone = true;
        if(x.dataset.value == 1) {
            alert("O WON");
        }
        else {
            alert("X WON");
        }
        for(let i = 1; i<=9 ; i++) {
            let box = document.getElementById("b"+i);
            box.style.pointerEvents = "none";
        }
    }
  }
}
