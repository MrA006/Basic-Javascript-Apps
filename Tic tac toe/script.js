let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");

let turn0 = true;

let winpatterns = 
[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


btns.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        if(turn0){
            btn.innerText = "0";
            turn0 = false;
        }else{
            btn.innerText = "X";
            turn0 = true;
        }
        btn.disabled = true;
        if(checkwinner()) {
            
        };
    })
})


let checkwinner = () => {
    for (let i = 0; i < winpatterns.length; i++) {
        let pattern = winpatterns[i];
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                return true;  
            }
        }
    }

    return false;
}