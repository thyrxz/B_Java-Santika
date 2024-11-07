// SOAL 1 OUR FIRST FOR LOOP PRACTICE
// const chorusContainer = document.getElementById('chorus-container');
// for (let i = 0; i < 6; i++) {
//   const chorusLine = document.createElement('div');
//   chorusLine.textContent = 'Da ba dee da ba daa';
//   chorusContainer.appendChild(chorusLine);
// }

// FOR LOOPS PRACTICE
// Loop untuk menghitung mundur dari 25 ke 0
for (let i = 25; i >= 0; i -= 5) {
  const countdownLine = document.createElement('div');
  countdownLine.textContent = i;
  chorusContainer.appendChild(countdownLine);
}
