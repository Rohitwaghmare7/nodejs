console.log("javascript file is loaded")

const weatherform = document.querySelector("form")
const search = document.querySelector("input")

weatherform.addEventListener("submit", (e) =>{
    e.preventDefault()

    const location = search.value

    fetch("http://localhost:3000/weather?address=" +location).then((response) =>{
        response.json().then((data) =>{
            if(data.error){
                console.log(data.error)
            }
            else{
                console.log("Location: "+data.location)
                console.log("Forecast: "+data.forecast)
            }
        })
    })
})

