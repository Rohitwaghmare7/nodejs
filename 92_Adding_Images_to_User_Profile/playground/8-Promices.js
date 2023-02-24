const doWorkCallback = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([ 7,4,1])
        reject("thing went wrong")
    },2000)
})

doWorkCallback.then((result)=>{
    console.log("success"+result)
}).catch((error)=>{
    console.log("error"+error)
})