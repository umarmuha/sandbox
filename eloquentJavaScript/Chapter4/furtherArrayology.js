let todolist = [];

function remember(obj) {
    todolist.push(obj);
}

function getTask() {
    todolist.shift();
}

function rememverUrgently(task) {
    todolist.unshift(task);
}

remember("groceries");
remember("milk");
remember("eggs");

getTask()
getTask()

rememverUrgently("bread");
//console.log(todolist);


let array1 = ["a", "b", "c", "d", "e"];
console.log(array1.slice(0, 2).concat(array1.slice(3)));
console.log(array1.slice(3));


