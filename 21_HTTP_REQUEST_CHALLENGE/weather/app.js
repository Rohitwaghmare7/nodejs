import request from "request"

const url ="http://api.weatherstack.com/current?access_key=604abe85ac83401dd2bf2a396853d237&query=19.8762,75.3433"
const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/aurangabad.json?access_token=pk.eyJ1Ijoicm9oaXR3YWdobWFyZSIsImEiOiJjbDAzajZhbTAxYmQ3M2tvMHF0aWE4MzRrIn0.Bx-DuNY_Rv77p8xoo5H-fg&limit=1"

request({url: url,json:true},(error,responce)=>{
  
    console.log(responce.body.current.weather_descriptions +" it is currently "+responce.body.current.temperature + " degrees out. it is feels like "+ responce.body.current.feelslike +" degrees out")
}) 

request({url : geoCodeURL,json: true},(error,response) => {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]

    console.log(latitude,longitude)
})
