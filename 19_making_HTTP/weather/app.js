import request from "request"

const url ="http://api.weatherstack.com/current?access_key=604abe85ac83401dd2bf2a396853d237&query=19.8762,75.3433"

request({url: url},(error,responce)=>{
    const data=JSON.parse(responce.body)
    console.log(data.current)
})