var button = document.getElementById("Button");
var button2 = document.getElementById("InterestButton");
var skills = document.getElementById("Skills");
var interest = document.getElementById("Interest");
button.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        button.textContent = 'Hide Skills';
    }
    else {
        skills.style.display = 'none';
        button.textContent = 'Show Skills';
    }
});
button2.addEventListener('click', function () {
    if (interest.style.display === 'none') {
        interest.style.display = 'block';
        button2.textContent = 'Hide Interest';
    }
    else {
        interest.style.display = 'none';
        button2.textContent = 'Show Interest';
    }
});
