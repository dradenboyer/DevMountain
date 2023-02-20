// Write your solution below:
const balanced = str => {
    let small = ""
    let medium = ""
    let large = ""
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "s") {
        small += "s"
      } else if (str[i] === "m") {
        medium += "m"
      } else {
        large += "l"
      }
    }
    return small + medium + large
  }
  

console.log(balanced('smssssllllmsmmslmlsmlslms'))


const tshirt = str => {
  str = str.split('')
  str = str.sort((a,b) => {
    
  })
  console.log(str)
}

tshirt('lmsmlslmlmslmlmslm')