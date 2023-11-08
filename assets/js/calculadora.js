document.addEventListener("DOMContentLoaded", function() {
  const inputElements = document.querySelectorAll("input");
  inputElements.forEach(input => {
    input.addEventListener("input", handleInputs);
  });

  const calcularRendimientoBtn = document.getElementById("calcularRendimientoBtn");
  calcularRendimientoBtn.addEventListener("click", calculateCompoundInterest);

  calculateCompoundInterest();
  calcularNivelRiesgo();
});

// Función para manejar los cambios en los campos de entrada
function handleInputs() {
  calculateCompoundInterest();
  calcularNivelRiesgo();
}

// Función para calcular el rendimiento anual basado en el nivel de riesgo
function calcularRendimientoAnual(saldoInicial, nivelRiesgo) {
  const baseRendimiento = 15; // Rendimiento base sin considerar el nivel de riesgo

  let rendimientoPorcentaje = baseRendimiento;

  if (nivelRiesgo === "Agresivo") {
    rendimientoPorcentaje += 4;
  } else if (nivelRiesgo === "Conservador") {
    rendimientoPorcentaje -= 2;
  } // No se modifica el rendimiento en caso de ser "Moderado"

  return rendimientoPorcentaje;
}

// Función para calcular el interés compuesto
function calculateCompoundInterest() {
  const initialBalance = parseFloat(document.getElementById("initialBalance").value);
  const years = parseFloat(document.getElementById("plazoMeses").value) / 12;

  const nivelRiesgo = document.getElementById("nivelRiesgo").textContent;

  const rendimientoAnualPorcentaje = calcularRendimientoAnual(initialBalance, nivelRiesgo);

  let balance = initialBalance;

  for (let year = 1; year <= years; year++) {
    balance *= 1 + rendimientoAnualPorcentaje / 100;
  }

  const totalBalance = balance.toFixed(3);

  document.getElementById("result").textContent = `Saldo total: $${totalBalance}\nTasa de interés anual: ${rendimientoAnualPorcentaje.toFixed(2)}%`;
  document.getElementById("rendimientoAnual").textContent = `${rendimientoAnualPorcentaje.toFixed(2)}%`;
}

// Función para calcular el nivel de riesgo
function calcularNivelRiesgo() {
  const percepcionInput = document.getElementById("percepcionRiesgo");
  const nivelRiesgoSpan = document.getElementById("nivelRiesgo");
  const percepcion = parseFloat(percepcionInput.value);

  let nivel = "";

  if (percepcion >= 5 && percepcion <= 10) {
    nivel = "Conservador";
  } else if (percepcion > 10 && percepcion <= 20) {
    nivel = "Moderado";
  } else if (percepcion > 20 && percepcion <= 40) {
    nivel = "Agresivo";
  } else {
    nivel = "N/A";
  }

  nivelRiesgoSpan.textContent = nivel;

  // Recalcular el interés compuesto después de cambiar el nivel de riesgo
  calculateCompoundInterest();
}
