const weapons = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Hoà!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win!      Bạn : ${playerSelection} vs Máy: ${computerSelection}`;
    } else {
        return `You Lose!     Bạn: ${playerSelection} vs Máy : ${computerSelection}`;
    }
}

function game() {
    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = this.id;
    //     const computerSelection = computerPlay();
    //     const result = playRound(playerSelection, computerSelection);
    //     const message = document.createElement("p");
    //     message.textContent = result;
    //     document.querySelector("#result").appendChild(message);
    // }
    const playerSelection = this.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        const message = document.createElement("p");
        message.textContent = result;
        document.querySelector("#result").appendChild(message);
}

document.querySelectorAll("button").forEach(button => button.addEventListener("click", game));
