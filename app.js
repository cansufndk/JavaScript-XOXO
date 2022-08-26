let playerText = document.querySelector('#player')
let reStartBtn = document.querySelector('#restart')
let blocks = Array.from(document.querySelectorAll('.block'))

const text_o = 'O'
const text_x = 'X'
let currentPlayer = text_x
let boxes = Array(9).fill(null)

const startGame = () => {
    blocks.forEach(block => block.addEventListener('click', boxClick))
}
function boxClick(e){
    const id = e.target.id

    if(!boxes[id]){
        boxes[id] = currentPlayer
        e.target.innerText = currentPlayer
        
        if(playerWon() !== false){
            playerText.textContent = `${currentPlayer} Has Won :)`
            let winnig = playerWon()
          
            winnig.map(box => blocks[box].style.backgroundColor = 'red')
            return
        }
        currentPlayer = currentPlayer == text_o ? text_x : text_o
    }
}

const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function playerWon(){
    for( let condition of winner){
        let [a, b, c] = condition

        if(boxes[a] && (boxes[a] == boxes[b] && boxes[a] == boxes[c])){
            return [a, b, c]
        }
    }
    return false
}

reStartBtn.addEventListener('click', restart)
function restart(){
    boxes.fill(null)

    blocks.forEach(block => {
        block.innerText = ''
        block.style.backgroundColor = ''
        playerText.textContent = ''
    });
    
    currentPlayer = text_x
}

startGame()