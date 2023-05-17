const adviceNumbers = document.getElementById("numbers");
const advice = document.getElementById("advice")
const button = document.getElementById("reload");


// fetch('https://api.adviceslip.com/advice')
// .then((res) => res.json())
// .then((data) => {
//     adviceNumbers.innerHTML = data.slip.id;
//     advice.innerHTML = `"${data.slip.advice}"`
// })

button.addEventListener("click", () => {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
        adviceNumbers.innerHTML = data.slip.id;
        advice.innerHTML = `"${data.slip.advice}"`
    })
})


