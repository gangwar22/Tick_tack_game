// ///////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////
// let boxes = document.querySelectorAll(".box");
// let resetbtn = document.querySelector("#reset-btn");
// let newGamebtn = document.querySelector("#new-btn");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true;

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];


// const resetGame = () => {
//     turnO = true;
//     enableboxesboxes(); 
//     msgcontainer.classList.add("hide");
// };

// const enableboxesboxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turnO) {
//             // Player O
//             box.innerText = "O";
//         } else {
//             // Player X
//             box.innerText = "X";
//         }

//         // Disable the box after a move
//         box.removeEventListener("click", this);

//         // Switch turns
//         turnO = !turnO;

//         // Check for a winner after each move
//         checkWinner();
//     });
// });


// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1 = boxes[pattern[0]].innerText;
//         let pos2 = boxes[pattern[1]].innerText;
//         let pos3 = boxes[pattern[2]].innerText;

//         if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
//             if (pos1 === pos2 && pos2 === pos3) {
//                 showWinner(pos1);
//             }
//         }
//     }
// };


// const showWinner = (winner) => {
//     msg.innerText = `Congratulations, winner is ${winner}`; 
//     msgcontainer.classList.remove("hide");
//     diasableboxes();
// };

// const diasableboxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// newGamebtn.addEventListener("click", resetGame);
// resetbtn.addEventListener("click", resetGame);
