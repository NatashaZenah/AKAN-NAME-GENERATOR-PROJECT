console.log("JS loaded");

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("akanForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const dayValue = document.getElementById("day").value;
    const monthValue = document.getElementById("month").value;
    const yearValue = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    const day = parseInt(dayValue);
    const month = parseInt(monthValue);
    const year = parseInt(yearValue);

    if (!dayValue || isNaN(day) || day < 1 || day > 31) {
      alert("Please enter a valid day (1–31)");
      return;
    }

    if (!monthValue || isNaN(month) || month < 1 || month > 12) {
      alert("Please enter a valid month (1–12)");
      return;
    }

    if (!yearValue || isNaN(year)) {
      alert("Please enter a valid year");
      return;
    }

    if (!gender) {
      alert("Please select your gender");
      return;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    const d = Math.floor(
      ((4 * CC - 2 * CC - 1) +
        (45 * YY) +
        (10 * (month + 1)) / 26 +
        day) % 7
    );

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    const akanName = gender.value === "male"
      ? maleNames[d]
      : femaleNames[d];

    result.textContent =
      `You were born on a ${days[d]}. Your Akan name is ${akanName}.`;

    form.reset();
  });

});
