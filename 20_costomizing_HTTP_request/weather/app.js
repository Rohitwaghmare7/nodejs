import request from "request"

const url ="http://api.weatherstack.com/current?access_key=604abe85ac83401dd2bf2a396853d237&query=19.8762,75.3433"

request({url: url,json:true},(error,responce)=>{
  
    console.log(responce.body.current.weather_descriptions +" it is currently "+responce.body.current.temperature + " degrees out. it is feels like "+ responce.body.current.feelslike +" degrees out")
}) 