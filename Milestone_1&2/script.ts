const button = document.getElementById("Button") as HTMLButtonElement
const button2 = document.getElementById("InterestButton") as HTMLButtonElement
const skills = document.getElementById("Skills") as HTMLElement
const interest = document.getElementById("Interest") as HTMLElement

button.addEventListener('click', ()=>{
    if (skills.style.display === 'none') {
        skills.style.display = 'block'
        button.textContent='Hide Skills'
    }else{
        skills.style.display = 'none'
        button.textContent = 'Show Skills'
    }
})

button2.addEventListener('click', ()=>{
    if (interest.style.display === 'none') {
        interest.style.display = 'block'
        button2.textContent='Hide Interest'
    }else{
        interest.style.display = 'none'
        button2.textContent = 'Show Interest'
    }
    })