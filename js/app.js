// Cart Starts Here
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let cart = document.querySelector(".cart");

//Increment
increment.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    cart.value = ++cartValue;
});

//Decrement
decrement.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    if(cartValue > 1){
        cart.value = --cartValue;
    }
});
// Cart Ends Here

// Password Starts Here

let password_btn = document.querySelector('.password-box .btn');
let password_input = document.querySelector('.password-box .password');

password_btn.addEventListener('click', ()=>{
    if(password_input.type == 'text'){
        password_input.type = 'password';
    } 
    else{
        password_input.type = 'text';
    }
});

// Password Ends Here

// Range Starts Here

let range = document.querySelector('#customRange1');

range.addEventListener('change', ()=>{
    document.querySelector('h3').innerHTML = range.value;
})

// Range Ends Here

// CSS color event starts here

let h1 = document.querySelector('h1');

h1.addEventListener('mouseover', ()=>{
    document.querySelector('h1').style ='color: red; background-color: black;'
})
h1.addEventListener('mouseout', ()=>{
    document.querySelector('h1').style ='color: black; background-color: white;'
})

// CSS color event ends here

// Date starts here

setInterval(() => {
    let date = new Date();
    document.querySelector('h2').innerHTML = date;
},1000);

// Date ends here

const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("wait5s").innerHTML = "Thanks for visiting. Have a good day :)"
}