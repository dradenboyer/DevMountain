
const makeUnique = str => {
    let newStr = ''
    for (let i = 0; i < str.length; i++){
        if(newStr.includes(str[i])){
            continue
        }else{
            newStr + str[i]
        }
    }

    return newStr
}

console.log(makeUnique('iwanttoclimbamountain'))


const makeUnique1 = str => {
    let newStr = ''
    for (let i = 0; i < str.length; i++){
        if(!newStr.includes(str[i])){
            nweStr += str[i]
        }
    }
    return newStr
}

const uniqueSet = str => {
    let newSet = new Set(str)
    console.log(newSet)
    let newArr = [...newSet]
    return newArr.join('')
}

console.log(uniqueSet('helloworld'))

const uniqueSet1 = str => [...newSet(str)].join('')

console.log(uniqueSet('helloworld'))