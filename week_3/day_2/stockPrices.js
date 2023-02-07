
const best = (arr) => {
    let bestPrice = 0
    let lowest = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < lowest){
            console.log("========")
            console.log(`The current value in the loop, ${arr[i]}, is less than our current lowest balue, ${lowest}.`)
            lowest = arr[i]
            console.log(`The new lowest value is ${lowest}.`)
            console.log("=========")
        }

        let difference = arr[i] - lowest
        console.log("============")
        console.log(`The profit on the current sale if ${difference}`)
        console.log("=============")
        if(difference > bestPrice){
            console.log("===============")
            console.log(`the current price difference, ${difference}, is higher than our current best sale, ${bestPrice}.`)
            bestPrice = difference
            console.log(`the new highest profit is ${bestPrice}`)
            console.log("============")
        }
    }
    return bestPrice
}

best([1 ,2, 3, 4, 5, ])

best ([2, 3, 10, 6, 4, ])