const arr = [4, 5, 8, 9, 2, 2, 6];
const str = "Shalom i'm grate.";

// exe-1
const evenUp = (arr) => {
    return arr.filter(e => e %2 == 0).sort();
}

// exe-2
const noDoual = (arr) => {
    const newArr = [];
    for (const el of arr) {
        if (!newArr.includes(el)) {
            newArr.push(el);
        }
    }
    return newArr
}

// exe-3
const uperCase = (str) => {
    const strArr = str.split(" ");
    let newStr = ""
    for (let word of strArr) {
        if(word.endsWith(".")){
            newStr += word
            continue
        }
        newStr += word[0].toLocaleUpperCase() + word.slice(1)  + " ";
    }
}

uperCase(str)