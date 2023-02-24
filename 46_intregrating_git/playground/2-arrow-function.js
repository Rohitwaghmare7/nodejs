// const square = function(x)
// {
//     return x*x
// }

// const square = (x) => //arrow syntzax
// {
//     return x*x
// }

const square = (x) => x*x //es6 syntax
console.log(square(2))

const event = {
    name: "Birthday Party",
    guestList: ["Rohit","Rafat","Sakshi"],
    printGuestList: function()
    {
        console.log("Guest List for "+this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name)
        })
    }
}
event.printGuestList()
