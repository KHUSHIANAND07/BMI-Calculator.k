function calculate() {
  let feet = parseFloat(document.getElementById("feet").value);
  let inches = parseFloat(document.getElementById("inches").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (
    isNaN(feet) ||
    isNaN(inches) ||
    isNaN(weight) ||
    feet <= 0 ||
    inches < 0 ||
    weight <= 0
  ) {
    alert("Please enter valid positive numbers for height and weight.");
    return;
  }

  let heightInMeters = feet * 0.3048 + inches * 0.0254;
  let bmi = weight / (heightInMeters * heightInMeters);

  let status = "";
  let page = "";
  if (bmi < 18.5) {
    status = "Underweight";
    page = "underweight.html";
  } else if (bmi <= 24.9) {
    status = "Normal weight";
    page = "normalweight.html";
  } else if (bmi < 30) {
    status = "Overweight";
    page = "overweight.html";
  } else {
    status = "Obese";
    page = "obese.html";
  }

document.getElementById("result").innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Status: ${status}`;

  let dietPlanBtn = document.getElementById("diet-plan-btn");
  dietPlanBtn.style.display = "inline-block";
  dietPlanBtn.setAttribute("data-page", page);
}

function redirectToDietPlan() {
  let dietPlanBtn = document.getElementById("diet-plan-btn");
  let page = dietPlanBtn.getAttribute("data-page");

  if (page) {
    window.location.href = page;
  } else {
    alert("Please calculate BMI first!");
  }
}
