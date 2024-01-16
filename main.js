const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirmPassword");
const theLabel = document.getElementById("theLabel");
const myForm = document.getElementById("submit");
const create = document.getElementById("create");
pass.onkeyup = () => {
  if (
    pass.value !== confirmPass.value &&
    confirmPass.value.length > 0 &&
    pass.value.length > 0
  ) {
    pass.style.border = "1px solid red";
    pass.style.outline = "1px solid red";
    confirmPass.style.border = "1px solid red";
    confirmPass.style.outline = "1px solid red";
    theLabel.style.color = "red";
    theLabel.style.display = "block";
    theLabel.innerText = "passwords don't match!!";
    create.disabled = true;
  } else if (
    pass.value === confirmPass.value &&
    confirmPass.value.length > 0 &&
    pass.value.length > 0
  ) {
    pass.style.border = "1px solid lightgreen";
    pass.style.outline = "1px solid lightgreen";
    confirmPass.style.border = "1px solid lightgreen";
    confirmPass.style.outline = "1px solid lightgreen";
    theLabel.style.fontSize = "17px";
    theLabel.style.display = "none";
    create.disabled = false;
  }
};
confirmPass.onkeyup = () => {
  if (
    pass.value !== confirmPass.value &&
    confirmPass.value.length > 0 &&
    pass.value.length > 0
  ) {
    pass.style.border = "1px solid red";
    pass.style.outline = "1px solid red";
    confirmPass.style.border = "1px solid red";
    confirmPass.style.outline = "1px solid red";
    theLabel.style.animation = "shake 0.3s linear";
    theLabel.style.color = "red";
    theLabel.innerText = "passwords don't match";
    theLabel.style.display = "block";
    create.display = "none";
  } else if (
    pass.value === confirmPass.value &&
    confirmPass.value.length > 0 &&
    pass.value.length > 0
  ) {
    pass.style.border = "1px solid lightgreen";
    pass.style.outline = "1px solid lightgreen";

    confirmPass.style.border = "1px solid lightgreen";
    confirmPass.style.outline = "1px solid lightgreen";
    theLabel.style.display = "none";
    create.disabled = false;
    create.display = 'block';
  }
};

myForm.onsubmit = (e) => {
  e.preventDefault();
  if (confirmPass.value.length < 8 && pass.value.length < 8) {
    theLabel.style.color = "grey";
    theLabel.style.display = "block";
    theLabel.style.animation = "shake 0.3s linear";
    theLabel.style.fontSize = "14px";
    theLabel.innerText = "password must be atleast 8 characters!!";
  } else if (confirmPass.value.length >= 8 && pass.value.length >= 8) {
    window.location.href = "home.html";
  }
};


