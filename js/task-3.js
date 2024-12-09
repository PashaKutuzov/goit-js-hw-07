const userName = document.querySelector("#name-input")
const userOutput = document.querySelector("#name-output")
userName.addEventListener("input", handleImput)



function handleImput(event) {
    
    const savedName = event.currentTarget.value.trim();
    
    

if (savedName !== "") {
    userOutput.textContent = savedName
}
else {
    userOutput.textContent = "Anonymous"
}


}







