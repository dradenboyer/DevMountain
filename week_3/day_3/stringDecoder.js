const decoder = str => {
    let finalStr = ''

    for(let i = 0; i < str.length; i++){
        let currentValue = parseInt(str[i])
        console.log(currentValue)
        if(!isNaN(str[i])){
            console.log("===========")
            console.log(`i  before addition is ${i}`)
            i += currentValue
            console.log(`i after addition is ${i}`)
        } else {
            finalStr += str[i]
        }
    }
    return finalStr
}

console.log(decoder('0h2xce5ngbrdy'))