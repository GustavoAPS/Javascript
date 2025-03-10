// Create the reference to the form and to the h3 to show the answer
const form = document.querySelector("form")
const response = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    const name = form.inName.value           // Get the name in the form
    response.innerText = `hi ${name}`        // Show the answer
    e.preventDefault()                       // Prevent the form to be sent
})