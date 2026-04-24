// typing animation
const text = [
"Coder 💻",
"Python Developer 🐍",
"C / C++ Programmer ⚡",
"Java Developer ☕",
"Cloud & IoT Enthusiast 🌐"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){
current=text[i];

if(isDeleting){
document.getElementById("typing").textContent=current.substring(0,j--);
}else{
document.getElementById("typing").textContent=current.substring(0,j++);
}

if(!isDeleting && j===current.length){
isDeleting=true;
setTimeout(type,1000);
}else if(isDeleting && j===0){
isDeleting=false;
i=(i+1)%text.length;
setTimeout(type,300);
}else{
setTimeout(type,isDeleting?50:100);
}
}

type();

// hamburger
const hamburger=document.getElementById("hamburger");
const navLinks=document.getElementById("navLinks");

hamburger.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});

// like button
let count=0;
const likeBtn=document.getElementById("likeBtn");
const likeCount=document.getElementById("likeCount");

likeBtn.addEventListener("click",()=>{
count++;
likeCount.textContent=count;
});
