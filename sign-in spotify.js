let formContainerEl = document.querySelector("#formContainer");
let otpEl = document.querySelector("#otp");
let nameEl = document.querySelector("#name");
let gmailEl = document.querySelector("#gmail");
let passwordEl = document.querySelector("#password");
let logInEl = document.querySelector("#login");
let verifyEl = document.querySelector("#verify");
console.log(formContainerEl);
console.log(otpEl);
let optGenerate = Math.floor(Math.random() * 5000);
console.log(optGenerate);
verifyEl.addEventListener("click", () => {
  if (nameEl.value == ''){
    alert("Type Your Name");
  }else if (gmailEl.value == '') {
    alert("Type your Gmail Id")
  }
  else if (passwordEl.value == ''){
    alert("Type Your Password");
  }
  else {
    alert("OTP is   " + optGenerate);
  }
});

logInEl.addEventListener("click", () => {
  if (optGenerate == otpEl.value) {
    let formData = new FormData(formContainerEl);

    let formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
      let convertToString = JSON.stringify(formDataObject);
      localStorage.setItem("formData", convertToString);
      alert("thanks for sign up");
    });
  } else {
    alert("provide full and accurate information with right OTP");
  }
  window.parent;
});

// var companyDetails = {
//     company : "tesla",
//     product : "car",
//     location : "america",
//     CEO : "Elon Musk",

// }
// function provideCompanyData (info){
//     let strigify = JSON.stringify(info);
//     localStorage.setItem("companyDetails", strigify)

// }
// provideCompanyData(companyDetails);
// Create a new FormData object to get the form data
// let formData = new FormData(formContainerEl);

// // Convert the FormData object to a plain object
// let formDataObject = {};
// formData.forEach((value, key) => {
//     formDataObject[key] = value;
// });

// // Convert the object to a JSON string
// let jsonString = JSON.stringify(formDataObject);

// // Save the JSON string in local storage
// localStorage.setItem("formData", jsonString);
