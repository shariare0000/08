// dom

document.getElementById("dl").innerHTML="<h1>Our first dom learning</h1>";

document.getElementsByTagName("h1")[1].innerText = "Hello Bangladesh";
document.getElementsByClassName("c1")[0].innerText="our dom by class";
document.querySelector("#demo").innerHTML="our dom by selecting query selector";

document.querySelectorAll(".c3")[0].innerHTML="selecting dom by class"

// create element

let newDiv = document.createElement('div');
newDiv.innerHTML="<h1>Create element by dom manupulation</h1>";
document.body.appendChild(newDiv);


const menu = document.querySelector('#menu');
let li = document.createElement('li');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'Contact Us';
menu.appendChild(li);

let change = document.getElementById("wb5");
change.style.color="red";
change.style.fontSize="30px";
change.style.backgroundColor="green";
change.style.borderRadius="10px";
change.style.padding="50px";


function changeText() {
  document.getElementById("change").innerHTML = "Ooops you change this!";
}

function changeFirstImage(){
    document.getElementById("img1").src="tiger.jpg"
}

function changeSecondImage(){
    document.getElementById("img2").src="dog.jpg"
}

function changeThirdImage(){
document.getElementById("img3").src="cat.jpg"
}

function upperCase() {
  const Y = document.getElementById("fname");
  Y.value = Y.value.toUpperCase();
}

function lowerCase() {
  const Y = document.getElementById("lname");
  Y.value = Y.value.toLowerCase();
}

function mOver(obj) {
  obj.innerHTML = "😒"
}

function mOut(obj) {
  obj.innerHTML = "😊"
}
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "🤢";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="😥";
}

function myFunction(x) {
  x.style.background = "yellow";
}

document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
  document.getElementById("demo1").innerHTML = Date().toLocaleString();
}



document.getElementById("myP1").addEventListener("click", function() {
  alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
  alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, true);




//

document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}