setTimeout(()=>{
    console.log("2 second up!")
},2000)

const names = ["Rohit","Rafat","Sakshi"]
const shortNames = names.filter((name)=>{
    return name.length <= 5
})

console.log(shortNames)

const getcode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    },1000)
}
getcode("Aurangabad",(data) =>{
    console.log(data)
})