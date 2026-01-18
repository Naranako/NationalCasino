let credits = 1000;

function enterSite() {
  document.getElementById("ageCheck").style.display = "none";
  document.getElementById("casino").classList.remove("hidden");
}

function updateCredits(amount) {
  credits += amount;
  document.getElementById("credits").innerText = credits;
}

function playSlot() {
  if (credits < 50) return alert("Нямаш кредити");
  updateCredits(-50);

  let win = Math.random() < 0.3;
  if (win) {
    updateCredits(150);
    document.getElementById("slotResult").innerText = "🎉 ПЕЧАЛБА +150";
  } else {
    document.getElementById("slotResult").innerText = "❌ Загуба";
  }
}

function playDice() {
  if (credits < 20) return alert("Нямаш кредити");
  updateCredits(-20);

  let roll = Math.floor(Math.random() * 6) + 1;
  if (roll >= 5) {
    updateCredits(60);
    document.getElementById("diceResult").innerText = "🎉 Зар: " + roll + " (+60)";
  } else {
    document.getElementById("diceResult").innerText = "❌ Зар: " + roll;
  }
}
