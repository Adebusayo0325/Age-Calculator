function calculateAge() {
  let birthMonthInput = document.getElementById("month").value;
  let birthYearInput = document.getElementById("year").value;
  let birthDayInput = document.getElementById("day").value;

  let currentDate = new Date();

  // Calculate the difference in years, months, and days
  let years = currentDate.getFullYear() - birthYearInput;
  let months = currentDate.getMonth() + 1 - birthMonthInput;
  let days = currentDate.getDate() - birthDayInput;

  if (months < 0 || (months === 0 && days < birthDayInput)) {
    years--;
    months += 12;
  }
  if (days < 0) {
    months--;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  // Display the age result
  document.getElementById("years-result").innerText = years;
  document.getElementById("months-result").innerText = months;
  document.getElementById("days-result").innerText = days;
    
}

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  calculateAge();
});
//allinputs
let allInputs = document.querySelectorAll(".dayed");

function validateAge() {
  //inputs
  let birthMonthInput = document.getElementById("month").value;
  let birthYearInput = document.getElementById("year").value;
  let birthDayInput = document.getElementById("day").value;

  //warnings
  let dayError = document.querySelector("#day-error");
  let monthError = document.querySelector("#month-error");
  let yearError = document.querySelector("#year-error");
  //labels
  let dayLabelError = document.querySelector(".day-label");
  let monthLabelError = document.querySelector(".month-label");
  let yearLabelError = document.querySelector(".year-label");
  let currentDate = new Date();

  if (birthDayInput !== "" && (birthDayInput > 30 || birthDayInput < 0)) {
    dayError.innerText = `Must be a valid day`;
    dayLabelError.classList.add("error");
    dayError.style.opacity = "1";
  } else if (birthDayInput === "") {
    dayError.innerText = `This field is required`;
    dayLabelError.classList.add("error");
    dayError.style.opacity = "1";
  } else {
    dayLabelError.classList.remove("error");
    dayError.style.opacity = "0";
  }
  if ((birthMonthInput !== "" && birthMonthInput > 12) || birthMonthInput < 0) {
    monthError.innerText = `Must be a valid month`;
    monthLabelError.classList.add("error");
    monthError.style.opacity = "1";
  } else if (birthMonthInput === "") {
    monthError.innerText = `This field is required`;
    monthLabelError.classList.add("error");
    monthError.style.opacity = "1";
  } else {
    monthLabelError.classList.remove("error");
    monthError.style.opacity = "0";
  }
  if (birthYearInput !== "" && birthYearInput > currentDate.getFullYear()) {
    yearError.innerText = `Must be a valid year`;
    yearLabelError.classList.add("error");
    yearError.style.opacity = "1";
  } else if (birthYearInput === "") {
    yearError.innerText = `This field is required`;
    yearLabelError.classList.add("error");
    yearError.style.opacity = "1";
  } else {
    yearError.style.opacity = "0";
    yearLabelError.classList.remove("error");
  }
}

allInputs.forEach((input) =>
  input.addEventListener("input", () => validateAge())
);
