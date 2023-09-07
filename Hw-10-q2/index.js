const btn = document.querySelector(".btn");
const alert = document.querySelector(".alert");
const alertDiv = document.querySelector(".alertDiv");
// ---------------------------------------

function getInput() {
  const input = document.querySelectorAll(".form-control");
  const weight = input[0].value;
  const height = input[1].value;
  bmiCreat(weight, height);
}
// ---------------------------------------

function bmiCreat(weight, height) {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  bmiResult(bmi);
}
// ---------------------------------------

function bmiResult(bmi) {
  let resault;
  if (bmi < 18.5) {
    resault = `Under Weight`;
    show(bmi, resault, "alert-primary");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resault = `Normal`;
    show(bmi, resault, "alert-success");
  } else if (bmi >= 25 && bmi < 29.9) {
    resault = `Over Weight`;
    show(bmi, resault, "alert-warning");
  } else if (bmi >= 30 && bmi < 34.9) {
    resault = `Obesity (Class I)`;
    show(bmi, resault, "alert-danger");
  } else if (bmi >= 35.5 && bmi < 39.9) {
    resault = `Obesity (Class II) `;
    show(bmi, resault, "alert-danger");
  } else {
    resault = `Extreme Obesity`;
    show(bmi, resault, "alert-danger");
  }
}
// ---------------------------------------
function removeOrAddClass(classItem) {
  let remove;
  if (remove) {
    alert.classList.add(classItem);
    remove = classItem;
  } else {
    alert.classList.remove(remove);
    alert.classList.add(classItem);
    remove = classItem;
  }
}
// ---------------------------------------

function show(bmi, resault, classItem) {
  removeOrAddClass(classItem);
  alert.innerText = `
    Your BMI is ${bmi} which means You are ${resault}`;
  alertDiv.classList.remove("d-none");
  alertDiv.classList.add("d-flex");
}

btn.addEventListener("click", getInput);
