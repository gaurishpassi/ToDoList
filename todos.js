let input = prompt("What would you like to do?")
const tasks = []

while (input !== "QUIT" && input !== "quit" && input !== "Quit" && input !== "Q" && input !== "q") {
    if (input === "NEW" || input === "new" || input === "New") {
        const inp = prompt("What would you like to add?")
        tasks.push(inp);
        console.log(`${inp} added to the list`)
    }
    else if (input === "DELETE" || input === "delete" || input === "Delete") {
        const index = parseInt(prompt("Which index would you like to delete?"));
        if (!Number.isNaN(index)) {
            const deleted = tasks.splice(index-1, 1);
            console.log(`${deleted[0]} deleted from the list`)
        } else {
            console.log("Unknown Index")
        }
    }
    else if (input === "LIST" || input === "list" || input === "List") {
        console.log("************")
        for (let i = 0; i < tasks.length; i++) {
            console.log(`${i+1}: ${tasks[i]}`)
        }
        console.log("************")
    }
    input = prompt("What would you like to do?")
}
console.log("Sure! Quitting the app")

