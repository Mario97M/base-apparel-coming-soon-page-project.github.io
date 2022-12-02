const form = document.getElementById("form");
const input = document.getElementById("input");
const errorMessage = document.getElementById("errorMessage");
const errorIcon = document.getElementById("errorIcon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(input.value.toLowerCase())) {
    errorMessage.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "#38fc6c";
    errorMessage.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
  }
});
