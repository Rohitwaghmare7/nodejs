const task = {
    tasks: [
    {
        text: "Shopping",
        completed: true,
    },
    {
        text: "cleaning",
        completed: false,   
    },
    {
        text: "Recording",
        completed: false,
    }],
    getTaskToDo() {

        return this.tasks.filter((task) => task.completed === false)
    }
}
console.log(task.getTaskToDo())