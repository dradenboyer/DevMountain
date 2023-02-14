// const decoder1  = (str) => {
//     let alphabetArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//     strArr = str.split("")
//     num = parseInt(str)
//     newArr = []
//     for (i = 1; i< strArr.length ; i++){
//         letter = strArr [i]
//         for ( y = 0 ; y<alphabetArr.length;y++){
//             if (alphabetArr[y] === letter){
//                 index = y
//                 break
//             }

//         }
//         newletter =  alphabetArr[y+num]
//         newArr.push(newletter)
//         newStr = newArr.join(" ")

//     }
//     return newStr

// }

const decoder = str => {
    let cypher = parseInt(str[0])
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let strArr = str.slice(1).toLowerCase().split('')

    for (let i = 0; i < strArr.length; i++){
        let index = alphabet.indexOf(strArr[i])
        index += cypher 

        strArr[i] = alphabet[index]

    }
    return strArr.join('')
}

console.log(decoder("2fcjjm"))


function ceaserCipher(code){
    let decoder = Number(code[0])
    let solution = ``
    for(let i = 1; i < code.length; i++){
let newLetterVal = code[i].charCodeAt() + decoder
solution += String.fromCharCode(newLetterVal)
    }
    return solution
}
console.log('')