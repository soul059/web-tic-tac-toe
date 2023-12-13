let but = document.querySelectorAll(".bt");
let pa0 = true;
let dwin = document.querySelector(".win");
let rest = document.querySelector(".rea");
let dwinner = document.querySelector(".winner");

let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const restart = () => {
    pa0 = true;
    for (const enable of but) {
        enable.disabled = false;
        enable.textContent = "";
    }
    dwin.style.display = "none";
    dwinner.style.display = "none";
    rest.innerText = "Restart";
}

rest.addEventListener("click", restart)

but.forEach((box) => {
    box.addEventListener("click", function () {
        if (pa0) {
            pa0 = false;
            box.innerText = "O";
        }
        else {
            pa0 = true;
            box.innerText = "X";
        }
        box.disabled = true;
        chackwinner();
    })
})

const chackwinner = () => {

    for (let x of win) {
        let pos1 = but[x[0]].innerText;
        let pos2 = but[x[1]].innerText;
        let pos3 = but[x[2]].innerText;
        // console.log(pos1 + pos2 + pos3)
        
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos1 === pos3) {
                for (const y of but) {
                    y.disabled = true;
                }
                dwin.style.display = "";
                dwinner.style.display = "";
                console.log("winner is " + pos1);
                dwin.innerHTML = `Winner is ${pos1}`;
                rest.innerText = "New Game";
            }
        }
    }

}