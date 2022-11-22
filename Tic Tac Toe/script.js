isgameover = false
let turn = "X"
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]
    win.forEach(e => {
        if (boxtext[e[0]].innerText == boxtext[e[1]].innerText && boxtext[e[1]].innerText == boxtext[e[2]].innerText && boxtext[e[0]].innerText != '') {
            document.getElementsByClassName('info')[0].innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px'
        }
    })

}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText == '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (isgameover == false) {
                document.getElementsByClassName('info')[0].innerText = "Turn of " + turn;
            }
        }
    })
});

document.querySelector('.reset').addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName('info')[0].innerText = "Turn of " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px'
})