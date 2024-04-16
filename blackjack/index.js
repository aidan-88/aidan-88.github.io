function saveBalances() {
    for (let i = 1; i <= 4; i++) {
        const balance = parseInt(document.getElementById(`balance${i}`).textContent);
        localStorage.setItem(`balance${i}`, balance);
    }
}

function loadBalances() {
    for (let i = 1; i <= 4; i++) {
        const balance = localStorage.getItem(`balance${i}`);
        if (balance !== null) {
            document.getElementById(`balance${i}`).textContent = balance;
        }
    }
}
window.onload = loadBalances;

window.addEventListener('beforeunload', (event) => {
    saveBalances();
    event.preventDefault();
    return '';
});

function bet(player) {
    const inputAmount = parseInt(document.getElementById(`input${player}`).value);
    const balance = parseInt(document.getElementById(`balance${player}`).textContent);
    const amtBetted = parseInt(document.getElementById(`amtBetted${player}`).textContent);
    if (inputAmount > balance) {
        alert('Not enough balance.');
    } 
    else if (inputAmount < 0) {
        alert('Please do not put a negative number')
    }
    else if (inputAmount > 0) {
        document.getElementById(`balance${player}`).textContent = balance - inputAmount;
        document.getElementById(`amtBetted${player}`).textContent = amtBetted + inputAmount;
    }
    else {
        alert('That input value will not be accepted')
    }
}

function win(player) {
    const balance = parseInt(document.getElementById(`balance${player}`).textContent);
    const amtBetted = parseInt(document.getElementById(`amtBetted${player}`).textContent);
    const newBalance = (amtBetted * 2) + balance;
    document.getElementById(`balance${player}`).textContent = newBalance;
    newAddedBet = 0
    document.getElementById(`amtBetted${player}`).textContent = newAddedBet;
}

function timesTwo(player) {
    const amtBetted = parseInt(document.getElementById(`amtBetted${player}`).textContent);
    const balance = parseInt(document.getElementById(`balance${player}`).textContent)
    const newAdded = amtBetted * 2
    if (newAdded > balance){
        alert('Not enough balance')
    }
    else {   
    document.getElementById(`amtBetted${player}`).textContent = newAdded
    document.getElementById(`balance${player}`).textContent = balance - amtBetted
    }
}

function lose(player) {
    const amtBetted = parseInt(document.getElementById(`amtBetted${player}`).textContent);
    document.getElementById(`amtBetted${player}`).textContent = 0
}

function blackJack(player) {
    const amtBetted = parseInt(document.getElementById(`amtBetted${player}`).textContent);
    const balance = parseInt(document.getElementById(`balance${player}`).textContent);
    document.getElementById(`balance${player}`).textContent = balance + (amtBetted*1.5) + amtBetted
    document.getElementById(`amtBetted${player}`).textContent = 0
}

function resetBalance() {
    const resetAmount = parseInt(document.getElementById('resetAmount').value);
    document.getElementById('balance1').textContent = resetAmount;
    document.getElementById('balance2').textContent = resetAmount;
    document.getElementById('balance3').textContent = resetAmount;
    document.getElementById('balance4').textContent = resetAmount;
}

function setCustomBalance(player) {
    const customAmount = parseInt(document.getElementById(`customPlayer${player}`).value);
    document.getElementById(`balance${player}`).textContent = customAmount;
}

function setCustomName(player) {
    const customName = document.getElementById(`customName${player}`).value;
    document.getElementById(`name${player}`).textContent = customName
}