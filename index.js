const arr = [4, 5, 8, 9, 2, 2, 6]

const evenUp = (arr) => {
    return arr.filter(e => e %2 == 0).sort();
}

const noDoual = (arr) => {
    const newArr = []
    for (const el of arr) {
        if (!newArr.includes(el)) {
            newArr.push(el)
        }
    }
    return newArr
}

console.log(noDoual(arr));

