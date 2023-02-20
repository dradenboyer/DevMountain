// Write your solution below:
function tshirtSorter(str) {
    return str.split("").sort().reverse().join("")
  }
  console.log(tshirtSorter("(())"))
  console.log(tshirtSorter("(())))"))
  console.log(tshirtSorter("(())))(("))

  const balanced = str => {
    let count = 0

    for(let i = 0; i < str.length; i++){
        if(str[i] === "("){
            count++
        } else if (str[i] === ")"){
            count--
        }
        if(count < 0){
            return false
        }
    }

    return count === 0
  }

  console.log(balanced("((()))"))
  console.log(balanced("((()))))"))
  console.log(balanced("((((()))))"))