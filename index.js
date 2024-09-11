const arr = [4, 5, 8, 9, 2, 2, 6];
const str = "Shalom i'm grate.";

// exe-1
const filterAndSortEvenNumbers = (arr) => {
    return arr.filter(e => e %2 == 0).sort();
}

// exe-2
const removeDuplicates = (arr) => {
    const newArr = [];
    for (const el of arr) {
        if (!newArr.includes(el)) {
            newArr.push(el);
        }
    }
    return newArr
}

// exe-3
const capitalizeFirstLetter = (str) => {
    const strArr = str.split(" ");
    let newStr = ""
    for (let word of strArr) {
        if(word.endsWith(".")){
            newStr += word
            continue
        }
        newStr += word[0].toLocaleUpperCase() + word.slice(1)  + " ";
    }
    return newStr
}


// object of tasks
const tasks = [
    {
    task1: {
      id: '1',  // Unique ID
      details: 'Complete the project report',
      time: '2024-09-11 10:00'
    },
    task2: {
      id: '2',  // Unique ID
      details: 'Attend the team meeting',
      time: '2024-09-11 14:00'
    },
    task3: {
      id: '3',  // Unique ID
      details: 'Submit code review',
      time: '2024-09-11 16:00'
    }
  }
];

console.log(tasks);

  

// exe-4
const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    // return true
}

const LocalStorage = () => {
    return JSON.parse(localStorage.getItem("tasks")) || []
}

const addTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(task);
    localStorage.tasks = JSON.stringify(tasks);
}

const removeTask = (id) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")).filter(t => t.id != id) || []
    localStorage.tasks = JSON.stringify(tasks);
}

saveTasks(tasks);