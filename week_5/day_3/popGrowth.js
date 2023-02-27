function nbYear(p0, percent, aug, p) {
    for (let y = 0; p0 < p; y++) {
        p0 = p0 * (1 + percent / 100) + aug;
    }
    return y;
  }
  
  const growth = (initPop, growthPercent, popAug, targetPop) => {
    let years = 0;
    while (initPop < targetPop) {
        initPop += (initPop * (growthPercent / 100)) + popAug;
        years++
        console.log(`After ${years} the population is ${initPop}!`);
    }
    return years;
}

const popGrowth = (p0,percent,aug,goal) => {
    let years = 0
    percent /= 100
    while(p0<goal){
        p0 = p0 + (p0 * percent) + aug
        years++
    }
    return years
}
console.log(popGrowth(1500000, 2.5, 10000, 2000000))