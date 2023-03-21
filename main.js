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