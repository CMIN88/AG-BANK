const purchasePrice = document.getElementById("purchasePrice");
const priceRange = document.getElementById("priceRange");
const downPayment = document.getElementById("downPayment");
const downRange = document.getElementById("downRange");
const rateDisplay = document.getElementById("rate");
const totalPayment = document.getElementById("totalPayment");

function calculatePayment() {
  const loanAmount = purchasePrice.value - downPayment.value;
  const rate = document.querySelector('input[name="period"]:checked').value;
  const monthlyRate = rate / 100 / 12;
  const term = 30 * 12; // 30 years

  const monthlyPayment =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));

  totalPayment.textContent = `$${Math.round(monthlyPayment)}`;
  rateDisplay.textContent = `${rate}%`;
}

purchasePrice.addEventListener("input", () => {
  priceRange.value = purchasePrice.value;
  calculatePayment();
});

priceRange.addEventListener("input", () => {
  purchasePrice.value = priceRange.value;
  calculatePayment();
});

downPayment.addEventListener("input", () => {
  downRange.value = downPayment.value;
  calculatePayment();
});

downRange.addEventListener("input", () => {
  downPayment.value = downRange.value;
  calculatePayment();
});

document.querySelectorAll('input[name="period"]').forEach((radio) => {
  radio.addEventListener("change", calculatePayment);
});

calculatePayment();
