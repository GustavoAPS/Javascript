

// mass in kg
// height = meter

mass = Number(prompt("What is your weight in kg?"))
height = Number(prompt("What is your height in meters?"))

let bmi = mass / height ** 2 
let bmi2 = mass / (height * height)

alert(`Your BMI is ${bmi.toFixed(2)}`)