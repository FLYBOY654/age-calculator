import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@3.5.0/build/es6/luxon.js';

document.getElementById('calculate-btn').addEventListener('click', () => {
  const inputDate = document.getElementById('datepicker').value;

  if (!inputDate) {
    alert("Please enter a valid date.");
    return;
  }

  const jsDate = new Date(inputDate).toISOString().split('T')[0];

  const birthDate = DateTime.fromISO(jsDate);
  const now = DateTime.now();

  if (birthDate > now) {
    alert("Birthdate cannot be in the future.");
    return;
  }

  const diff = now.diff(birthDate, ['years', 'months', 'days']).toObject();

  document.getElementById('result').innerText =
    `You are ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days old.`;
});