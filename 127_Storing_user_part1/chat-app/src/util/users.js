const users = []

const addUser = ({ id, username, room }) =>{
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room) {
        return{
            error:"Usernsme ana room are required!"
        }
    }
    const existingUsers = users.find((user) =>{
        return user.room === room && user.username === username
    })
    
    if(existingUsers){
        return{
            error:"Username is already in use!!"
        }
    }
    
    const user = { id, username, room }
    users.push(user)
    return {user}
}
const removeUser = (id)=>{
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1){
        return users.splice(index, 1)[0]
    }
}

addUser({
    id:20,
    username:"Rohit",
    room:"caneda"
})

console.log(users)

const removedUser = removeUser(20)

console.log(removedUser)
console.log(users)

