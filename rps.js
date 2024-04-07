function getComputerChoice () {
    const random = 1 + Math.floor(Math.random() * 3);
    switch (random) {
        case 1:
            return "rock";
        case 2: 
            return "paper";
        default:
            return "scissors";
    }
}

function playRound (ps, cs) {
    ps = ps.toLowerCase().trim();
    const psCsContact = ps + " " + cs;
    switch (psCsContact) {
        case "rock paper":
            return "You lose. Paper beats rock." 
        case "rock scissors":
            return "You win. Rock beats scissors."  
        case "rock rock":
            return "Tie."
        case "paper paper":
            return "Tie." 
        case "paper scissors":
            return "You lose. Scissors beat paper."  
        case "paper rock":
            return "You win. Paper beats rock."
        case "scissors paper":
            return "You win. Scissors beat paper." 
        case "scissors scissors":
            return "Tie."  
        case "scissors rock":
            return "You lose. Rock beats scissors."
        default:
            return "";
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        console.log("** Round " + i + "**");
        const ps = prompt("Type your selection");
        console.log(playRound(ps, getComputerChoice()));
    }
}