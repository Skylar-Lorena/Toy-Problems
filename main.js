// The calculateGrade function uses a simple if-else statement to determine the grade based 
// on the value of the marks input. Once the grade is determined, it is displayed in the 
// #grade paragraph element using the textContent property.
function calculateGrade() {
    const marks = parseInt(document.getElementById("marks").value);
    let grade;

    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }

    document.getElementById("grade").textContent = `Grade: ${grade}`;
  }
// SPEED DETECTOR
  function calculate() {
    // get the value of an input field with an id of speed using the document.getElementById() method
    // value is then parsed as an integer using parseInt() and assigned to a variable named speed
    const speed = parseInt(document.getElementById('speed').value);
    let points = 0;
    //checks whether the speed is less than 70. If it is, the text content of an HTML element with an id of result is set to "Ok
    if (speed < 70) {
      document.getElementById('result').textContent = 'Ok';
    } else {
    // driver receives 1 point for every 5 km/h over the speed limit of 70 km/h 
      points = Math.floor((speed - 70) / 5);
    //checks whether the number of points exceeds 12. If it does, the text content of the HTML element with an id of result is set to "License suspended"   
      if (points > 12) {
        document.getElementById('result').textContent = 'License suspended';
      } else {
        document.getElementById('result').textContent = 'Points: ' + points;
      }
    }
  }
  
// NET SALARY CALCULATOR
// Function to calculate and display net salary
function calculateNetSalary() {
  // Get the input values
  let basicSalary = parseFloat(document.getElementById("basic-salary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);

  //Calculate payee (i.e. Tax)
  let payee = Math.floor((basicSalary + benefits) * 0.25);

  //Calculate NHIF deductions
  let NHIFDeductions = Math.floor(basicSalary * 0.02);

  //Calculate NSSF deductions
  let NSSFDeductions = Math.floor(basicSalary * 0.12);

  //Calculate gross salary
  let grossSalary = Math.floor(basicSalary + benefits);

  //Calculate net salary
  let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

  //Display the net salary
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    <p>Your P.A.Y.E is ${payee}</p>
    <p>Your gross salary is ${grossSalary}</p>
    <p>Your NHIF Deduction is ${NHIFDeductions}</p>
    <p>Your NSSF Deduction is ${NSSFDeductions}</p>
    <p>Your net salary is: Ksh. ${netSalary}</p>
    `;
}

// Add an event listener to the calculate button
let calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateNetSalary);