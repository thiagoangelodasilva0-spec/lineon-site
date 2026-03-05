// DARK MODE

function darkMode(){

document.body.classList.toggle("light")

}

// CONTADORES

const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target")

const c = +counter.innerText

const increment = target / 200

if(c < target){

counter.innerText = Math.ceil(c + increment)

setTimeout(update,10)

}

else{

counter.innerText = target

}

}

update()

})