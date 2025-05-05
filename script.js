const results = {};

document.getElementById("adminForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const enroll = document.getElementById("a_enroll").value;
  results[enroll] = {
    name: document.getElementById("a_name").value,
    math: document.getElementById("a_math").value,
    science: document.getElementById("a_science").value,
    english: document.getElementById("a_english").value,
    password: document.getElementById("a_password").value,
    key: document.getElementById("a_key").value,
  };

  alert("Result submitted successfully!");
  this.reset();
});

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const enroll = document.getElementById("s_enroll").value;
  const password = document.getElementById("s_password").value;
  const key = document.getElementById("s_key").value;

  const result = results[enroll];

  if (result && result.password === password && result.key === key) {
    document.getElementById("resultDisplay").innerText =
      `Name: ${result.name}\nMath: ${result.math}\nScience: ${result.science}\nEnglish: ${result.english}`;
  } else {
    document.getElementById("resultDisplay").innerText = "Invalid credentials or result not found.";
  }

  this.reset();
});

function showTab(tabId) {
  document.getElementById("admin").style.display = "none";
  document.getElementById("student").style.display = "none";
  document.getElementById(tabId).style.display = "block";
}
