const bench = document.querySelector('#bench', benchButton);

function benchButton(evt){
    evt.preventDefault()
    
    alert('I bench 315')

}

bench.addEventListener('click', benchButton)

const squat = document.querySelector('#squat', squatButton);

function squatButton(evt){
    evt.preventDefault()
    
    alert('I squat 315')

}

squat.addEventListener('click', squatButton)

const deadlift = document.querySelector('#deadlift', deadliftButton);

function deadliftButton(evt){
    evt.preventDefault()
    
    alert('I deadlift 405')

}

deadlift.addEventListener('click', deadliftButton)


const color = document.querySelector('#color', colorButton);

function colorButton(evt){
    evt.preventDefault()
    color.style.backgroundColor = 'blue';

    alert('My favorite color is Blue')

}

color.addEventListener('click', colorButton)


const place = document.querySelector('#place', placeButton);

function placeButton(evt){
    evt.preventDefault()
    
    alert('My favorite place is Peru')

}

place.addEventListener('click', placeButton)


const ritual = document.querySelector('#ritual', ritualButton);

function ritualButton(evt){
    evt.preventDefault()
    
    alert('My favorite ritual is praying')

}

ritual.addEventListener('click', ritualButton)

