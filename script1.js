let imageDiv = document.querySelector(".image");
let img1 = document.querySelector("#img1");
let img = document.querySelector("img");

imageDiv.addEventListener("mouseenter",function(){
    img1.style.opacity=0;
})
imageDiv.addEventListener("mouseleave",function(){
    img1.style.opacity=1;
})

