import request from "request"
import { geocode } from "./utils/geocode.js"

geocode('Aurangabad',(error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})









// const url ="http://api.weatherstack.com/current?access_key=604abe85ac83401dd2bf2a396853d237&query=19.8762,75.3433"
// const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/aurangabad.json?access_token=pk.eyJ1Ijoicm9oaXR3YWdobWFyZSIsImEiOiJjbDAzajZhbTAxYmQ3M2tvMHF0aWE4MzRrIn0.Bx-DuNY_Rv77p8xoo5H-fg&limit=1"

// request({url: url,json:true},(error,responce)=>{
  
//     if(error){
//         console.log("unable to connect to weather service!!")
//     }
//     else if (responce.body.error){
//         console.log("unable to find locations")
//     }
//     else{
//         console.log(responce.body.current.weather_descriptions[0] +". it is currently "+responce.body.current.temperature + " degrees out. it is feels like "+ responce.body.current.feelslike +" degrees out.")
//     }
// }) 
// request({url : geoCodeURL,json: true},(error,response) => {
//     if (error){
//         console.log("unable to connect to Location services")
//     }
//     else if (response.body.features == ""){
//         console.log("unable to find location. try another search")
//     }
//     else{
//         const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]

//     console.log(latitude,longitude)

//     }
// })


