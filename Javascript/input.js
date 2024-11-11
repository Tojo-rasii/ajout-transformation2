var inputs = document.querySelectorAll("form .row input");
var spans = document.querySelectorAll("form .row span:first-child");



document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length > 0) {
        spans[i].style.marginTop = "-4.4em";
      } else {
        spans[i].style.marginTop = "0.1em";
      }
  
      inputs[i].addEventListener("click", () => {
        spans[i].style.color = "#027580";
        spans[i].style.marginTop = "-4.4em";
      });
  
      inputs[i].addEventListener("blur", () => {
        spans[i].style.color = "#000000";
        if (inputs[i].value.length > 0) {
          spans[i].style.marginTop = "-4.4em";
        } else {
          spans[i].style.marginTop = "0.1em";
        }
      });
  
      spans[i].addEventListener("click", () => {
        inputs[i].click();
        inputs[i].focus();
      });
    }})  