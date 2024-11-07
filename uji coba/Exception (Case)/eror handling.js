document.getElementById('divideButton').addEventListener('click', function () {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const resultDiv = document.getElementById('result');

  try {
    const result = divideNumbers(num1, num2);
    resultDiv.textContent = `Hasil: ${result}`;
  } catch (error) {
    resultDiv.textContent = `Kesalahan: ${error.message}`;
  }
});

function divideNumbers(a, b) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Input harus berupa angka.');
  }
  if (num2 === 0) {
    throw new Error('Pembagian dengan nol tidak diperbolehkan.');
  }

  return num1 / num2;
}
