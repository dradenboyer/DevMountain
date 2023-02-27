const buildTower = num => {
    let towerArr = []

    for(let  i = 0; i < num; i++){
        let spaces = " ".repeat(num - 1 - i)
        let stars = "*".repeat((i * 2) + 1)

        // towerArr.push(`${spaces}${stars}${spaces}`)
        towerArr.push(spaces + stars + spaces)
    }
    return towerArr
}

console.log(buildTower(10))