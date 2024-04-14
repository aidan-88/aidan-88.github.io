let totalPot = 0;

function addToPot(player) {
    const inputAmount = parseInt(document.getElementById(`input${player}`).value);
    const balance = parseInt(document.getElementById(`balance${player}`).textContent);
    const addedToPot = parseInt(document.getElementById(`addedToPot${player}`).textContent);
    if (inputAmount > balance) {
        alert('Not enough balance.');
    } else {
        document.getElementById(`balance${player}`).textContent = balance - inputAmount;
        document.getElementById(`addedToPot${player}`).textContent = addedToPot + inputAmount;
        totalPot += inputAmount;
        document.getElementById('totalPot').textContent = totalPot;
    }
}

function win(player) {
    const balance = parseInt(document.getElementById(`balance${player}`).textContent);
    const addedToPot = parseInt(document.getElementById(`addedToPot${player}`).textContent);
    const newBalance = balance + totalPot;
    document.getElementById(`balance${player}`).textContent = newBalance;
    totalPot = 0;
    document.getElementById('totalPot').textContent = totalPot;
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`addedToPot${i}`).textContent = 0;
    }
    alert(`Player ${player} win`);
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