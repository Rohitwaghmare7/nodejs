console.log("javascript file is loaded")

fetch("http://localhost:3000/weather?address=pune").then((response) =>{
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