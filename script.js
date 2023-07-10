let hasDayError = false
let hasMonthError = false
let hasYearError = false

function calculateAge() {
  let birthMonthInput = document.getElementById("month").value;
  let birthYearInput = document.getElementById("year").value;
  let birthDayInput = document.getElementById("day").value;
  let currentDate = new Date();
  let years;
    // Calculate the difference in years, months, and days

 if(birthYearInput.length === 2){
   //bringing in the date object for year input that is two (YY)
let dateCheck = new Date()
let dateChecker = new Date(dateCheck.getFullYear(), dateCheck.getMonth(), dateCheck.getDate()).getFullYear();
//Convert to an array since slicing hrought the returned value wouldn't work
let checker = [dateChecker]
//slice through the array and returns the only element present in it and then we stringify it and then slice the first two digitd i.e 20 from 2023
let checked = checker.slice(0, 2).toString().slice(0, 2)

//we concatenate the inputted text with a length of 2 with what our checked returns then use parseInt to convert to a number 

    let  yeared =  parseInt(checked + birthYearInput)
     years = currentDate.getFullYear() - yeared;
    }
   
 else{
  //if input is 4 i.e (YYYY)
 years = currentDate.getFullYear() - birthYearInput;
 
 }
  let months = currentDate.getMonth() + 1 - birthMonthInput;
  let days = currentDate.getDate() - birthDayInput;

  if (months < 0 || (months === 0 && days < birthDayInput)) {
  
    years--;
    //12 would be added to month causee it takes 12 months to make a year...
    months += 12;
  }
  if (days < 0) {
    months--;
    // let lastMonthDetails = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    //lastMonthDays is a technique to find any details from the date object i.e new Date(current.getFullYear, 
    // currentDate.getMonth, 0).getDate() gets the last day in the previous month
    // let lastMonthDays = new Date(1984, 2, 0).getDate()
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
let hasError = false
  if (birthDayInput !== "" && (birthDayInput > 30 || birthDayInput < 0)) {
    dayError.innerText = `Must be a valid day`;
    dayLabelError.classList.add("error");
    dayError.style.opacity = "1";
    hasDayError = true;
            document.querySelector('#day').classList.add("error")

  } else if (birthDayInput === "") {
    dayError.innerText = `This field is required`;
    dayLabelError.classList.add("error");
    dayError.style.opacity = "1";
        hasDayError = true;
        document.querySelector('#day').classList.add("error")

  } else {
    dayLabelError.classList.remove("error");
    dayError.style.opacity = "0";
        hasDayError = false
        document.querySelector('#day').classList.remove("error")

      }
  if ((birthMonthInput !== "" && birthMonthInput > 12) || birthMonthInput < 0) {
    monthError.innerText = `Must be a valid month`;
    monthLabelError.classList.add("error");
    monthError.style.opacity = "1";
        hasMonthError = true
        document.querySelector('#month').classList.add("error")


  } 

  else if (birthMonthInput === "") {
    monthError.innerText = `This field is required`;
    monthLabelError.classList.add("error")
    monthError.style.opacity = "1";
        hasMonthError = true
        document.querySelector('#month').classList.add("error")


  } else {
    monthLabelError.classList.remove("error");
    monthError.style.opacity = "0";
        hasMonthError = false
        document.querySelector('#month').classList.remove("error")


  }

  if (birthYearInput !== "" && birthYearInput > currentDate.getFullYear()) {
  
    yearError.innerText = `Must be a valid year`;
    yearLabelError.classList.add("error");
    yearError.style.opacity = "1";
        hasYearError = true
        document.querySelector('#year').classList.add("error")


  } else if (birthYearInput === "") {
    yearError.innerText = `This field is required`;
    yearLabelError.classList.add("error");
    yearError.style.opacity = "1";
        hasYearError = true
        document.querySelector('#year').classList.add("error")


  } else {
    yearError.style.opacity = "0";
    yearLabelError.classList.remove("error");
        hasYearError = false
        document.querySelector('#year').classList.remove("error")

  }
 
  return !hasError
}                                                                                           
//event listeners
allInputs.forEach((input) =>
  input.addEventListener("input", () => validateAge())
);


document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  validateAge()
  formValidate()
});

function formValidate (){
//first we check if the year we are working with has viable inputs
     if(document.querySelector('#year').value.length === 3 || document.querySelector('#year').value.length === 1){
       document.querySelector("#year-error").innerText = `YY OR YYYY only`
       document.querySelector("#year-error").style.opacity = '1'
       document.querySelector(".year-label").classList.add('error')
    }

    else{
      //else we check if the validateAge parameters have any errors 
      let correctDate = new Date()
       let birthYearInput = document.getElementById("year").value;
       let birthMonthInput = document.getElementById("month").value;
 if(birthYearInput === correctDate.getFullYear()){

  if (document.getElementById('month').value > correctDate.getMonth()  ){
  document.querySelector("#year-error").innerText = `Must be a valid year`;
  document.querySelector("#month-error").innerText = `You're yet to be born`;
    document.querySelector(".year-label").classList.add("error");
    document.querySelector("#year-error").style.opacity = "1";
        document.querySelector(".month-label").classList.add("error");
        document.querySelector("#month-error").style.opacity = "1"
hasMonthError = true
        hasYearError = true;
        document.querySelector('#year').classList.add("error")

  }
  else{
    validateAge()
  }
}else{
  if(!hasDayError){
    if(  !hasMonthError){
      if(!hasYearError){
        //if no error was found we run our function to calculate age and also validatAge incase the user changes something amisdt the code
     calculateAge()
validateAge()
  }
 
}
  }
   else{
    //if the errorHandlers return true we validate age
             validateAge();

  }
}
    }
}