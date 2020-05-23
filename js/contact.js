const contactForm = document.querySelector("#formDesign");

contactForm.addEventListener("submit", validateForm);

const submitMessage = document.querySelector("#confirmation");

contactForm.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("Submitted");

  const Name = document.querySelector("#name");
  const NameError = document.querySelector("#NameError");
  const NameValue = Name.value;
  let NameHasError = false;

  if (checkInputLength(NameValue) === true) {
    NameError.style.display = "none";
    NameHasError = false;
  } else {
    NameError.style.display = "block";
    NameHasError = true;
  }

  const email = document.querySelector("#email");
  const emailFault = document.querySelector("#emailFault");
  const emailInvalid = document.querySelector("#emailInvalid");
  let emailHasError = false;
  let invalidEmailHasError = false;

  const valueEmail = email.value;

  if (checkInputLength(valueEmail) === true) {
    emailFault.style.display = "none";
    emailHasError = false;
  } else {
    emailFault.style.display = "block";
    emailHasError = true;
  }

  if (validateEmail(valueEmail) === true) {
    emailInvalid.style.display = "none";
    invalidEmailHasError = false;
  } else {
    emailInvalid.style.display = "block";
    invalidEmailHasError = true;
  }

  const message = document.querySelector("#message");
  const nomessage = document.querySelector("#nomessage");
  const messageValue = message.value;
  let messageHasError = false;

  if (checkInputLength(messageValue) === true) {
    nomessage.style.display = "none";
    messageHasError = false;
  } else {
    nomessage.style.display = "block";
    messageHasError = true;
  }

  if (
    NameHasError === true ||
    messageHasError === true ||
    emailHasError === true ||
    invalidEmailHasError === true
  ) {
    submitMessage.style.display = "none";
  } else {
    submitMessage.style.display = "block";
  }
}

function checkInputLength(value) {
  const valueTrimm = value.trim();

  if (valueTrimm.length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
