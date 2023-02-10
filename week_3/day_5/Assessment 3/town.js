console.log("hello world")

const restaraunts = ['La Casita', 'Art City Trolley', 'Maglebys']

const random = Math.floor(Math.random() * restaraunts.length);
console.log(random, restaraunts[random]);


function randomrestButton (evt) {
    evt.preventDefault()
    
    confirm(restaraunts[random])
}

const randomrest = document.querySelector('#randomrest')

randomrest.addEventListener('click',randomrestButton)
