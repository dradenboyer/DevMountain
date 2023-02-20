const findOutlier = (integers) => {
    let evens = []
    let odds = []

    for (let i = 0; i < integers.length; i++) {
        let num = integers[i]

        if (num % 2 === 0) {
            evens.push(num)
        } else {
            odds.push(num)
        }
    }

    if (evens.length === 1) {
        return evens[0]
    } else {
        return odds[0]
    }
}

const findOutlier1 = arr => {
    let evens = arr.filter(num => num % 2 === 0)
    let odds = arr.filter(num => num % 2 !== 0)

    if(evens.length > odds.length){
        return odds[0]
    } else {
        return evens[0]
    }
//  return evens.length > odds.length ? odds[0] : evens [0]
}

console.log(findOutlier1)[2, 4, 0, 100, 4 , 11, 2602, 36]