const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
event.preventDefault()

    console.log(event);
    
    
   const elements = event.currentTarget.elements

   if (elements.email.value.trim() === "" || elements.password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

const info = {
    Email: elements.email.value.trim(),
    Password: elements.password.value.trim()
}

console.log(info);

event.currentTarget.reset()
}