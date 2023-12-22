const mass = document.getElementById("mass");
const height = document.getElementById("height");
const res = document.getElementById("result");
const calc = document.getElementById("calc");
const reset = document.getElementById("res");

let m = false;
let m_type = "";
let h = false;
mass.addEventListener("input", function () {
  if (!isNaN(mass.value) && mass.value !== "") {
    m = +mass.value;
  } else {
    m = false;
  }
  console.log();
});
height.addEventListener("input", function () {
  if (!isNaN(height.value) && height.value !== "") {
    h = +height.value;
  } else {
    h = false;
  }
});

calc.addEventListener("click", function onClick() {
  console.log(m);
  console.log(h);
  res.classList.remove("normal");
  res.classList.remove("tooHigh");
  res.classList.remove("tooLow");
  let kmi = null;
  if (m !== false && h !== false) {
    if (h == 0 || h > 300)
      res.innerText =
        "YOUR HEIGHT CAN'T BE ZERO OR IS TOO HIGH (height > 3). \n PLEASE TRY AGAIN";
    else if (m == 0)
      res.innerText = "YOUR MASS CAN'T BE ZERO.\n PLEASE TRY AGAIN";
    else {
      kmi = (m / (h * h)) * 10000;
      if (kmi < 18.5) {
        if (res.classList.contains("normal"))
          res.classList.replace("normal", "tooLow");
        else if (res.classList.contains("tooHigh"))
          res.classList.replace("tooHigh", "tooLow");
        else res.classList.add("tooLow");
        m_type = "TOO LOW";
      } else if (kmi < 25) {
        if (res.classList.contains("tooLow"))
          res.classList.replace("tooLow", "normal");
        else if (res.classList.contains("tooHigh"))
          res.classList.replace("tooHigh", "normal");
        else res.classList.add("normal");
        m_type = "NORMAL";
      } else {
        if (res.classList.contains("tooLow"))
          res.classList.replace("tooLow", "tooHigh");
        else if (res.classList.contains("normal"))
          res.classList.replace("normal", "tooHigh");
        else res.classList.add("tooHigh");
        m_type = "TOO HIGH";
      }
      reset.classList.add("b_resActive");
      res.innerText = `You weight is: ${m}kg. Your body weight is ${m_type}.\n Your BODY MASS INDEX is: ${kmi.toFixed(
        2
      )} `;
    }
  } else if (height.value == "" || mass.value == "") {
    res.innerText =
      "FOR CALCULATION YOU SHOULD ENTER BOTH \n WEIGHT AND HEIGHT";
  } else {
    res.innerText = "YOUR MASS/HEIGHT MUST BE NUMBERS!";
  }
});

reset.addEventListener("click", function onClick() {
  mass.value = "";
  height.value = "";
  m = false;
  h = false;
  res.innerText = "";
  reset.classList.remove("b_resActive");
});
