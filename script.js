function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.style.display = "none";
  });
  document.getElementById(tabId).style.display = "block";
}

// Sample subject mapping
const subjects = {
  IT: {
    1: ["Mathematics I", "Programming", "Digital Logic"],
    2: ["Data Structures", "Computer Networks", "OOP"],
    3: ["DBMS", "Operating Systems", "Web Dev"],
    4: ["AI", "ML", "Cloud Computing"]
  },
  CS: {
    1: ["Discrete Math", "C Programming", "Digital Systems"],
    2: ["Algorithms", "Microprocessors", "OOP"],
    3: ["Compiler Design", "CN", "DBMS"],
    4: ["AI", "Blockchain", "Big Data"]
  },
  // Add more mappings for EE, ME, AIML, MBA, BBA similarly
};

document.getElementById("a_department").addEventListener("change", loadSubjects);
document.getElementById("a_year").addEventListener("change", loadSubjects);

function loadSubjects() {
  const dept = document.getElementById("a_department").value;
  const year = document.getElementById("a_year").value;
  const subjectDiv = document.getElementById("subjectInputs");

  subjectDiv.innerHTML = "";

  if (dept && year && subjects[dept] && subjects[dept][year]) {
    subjects[dept][year].forEach((subject, index) => {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `${subject} Marks`;
      input.required = true;
      input.name = `subject_${index}`;
      subjectDiv.appendChild(input);
    });
  }
}
let captchaText = "";

function generateCaptcha() {
  // Generate a random string of letters and numbers
  captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
  
  // Display the CAPTCHA text
  document.getElementById("captchaText").innerText = captchaText;
}

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const userInput = document.getElementById("captchaInput").value;
  
  // Check if the entered CAPTCHA matches the generated one
  if (userInput.toUpperCase() === captchaText) {
    alert("CAPTCHA verified! Proceeding with result submission.");
    // Proceed with result submission logic
  } else {
    alert("CAPTCHA incorrect! Please try again.");
    generateCaptcha();  // Regenerate CAPTCHA
  }
});

// Initial CAPTCHA generation on page load
generateCaptcha();
 
document.getElementById("adminForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Result submitted successfully!");
});

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("resultDisplay").innerHTML = `
    <h3>Result Status</h3>
    <p><strong>Marks:</strong> 80, 85, 90</p>
    <p><strong>Status:</strong> Passed</p>
  `;
});
