//alert("Surprise !!");
function f1() {
    const pElement = document.querySelector('p');
    pElement.textContent = "Joey doesn't share food";
}

function f2() {
    const pElements = document.querySelectorAll('p');
    pElements.forEach(p => p.textContent='Content changed !!');
}

function f3() {
    const pElement= document.querySelector('title');
    console.log(pElement.textContent);
}

f3();