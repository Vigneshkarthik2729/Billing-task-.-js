var btn = document.querySelectorAll(".btn");
var input = document.querySelectorAll(".qty");
let untprc = document.querySelectorAll(".price");
console.log(btn);
console.log(input);
console.log(untprc);

function calculate() {
    
    let a = this.parentNode.previousElementSibling.previousElementSibling;
    console.log(a);
    let b = a.innerText;
    console.log(b);
    let c = parseInt(b);
    console.log(typeof c);

    let x = this.parentNode.previousElementSibling.firstChild;
    let y = x.value;
    let z = c*y;

    console.log(z);

    let k = this.parentNode.nextElementSibling;
    k.innerText = z;
}

btn.forEach(function(vicky) {
    
    vicky.addEventListener('click',calculate);
    
});