let stars=document.querySelector(".stars");
let moon=document.querySelector(".moon");
let mfront=document.querySelector(".mfront");
let mbehind=document.querySelector(".mbehind");
let text=document.querySelector(".text");
let btn=document.querySelector(".home-btn");
let header=document.querySelector("header");



window.addEventListener("scroll",function(){
   let value=window.scrollY;

   stars.style.left= value*.25+"px";
   moon.style.top= value *1.05 + "px";
   mbehind.style.top=value *0.5 + "px";
   mfront.style.top=value*0+"px";
   btn.style.marginTop= value *1.5 + 'px';
   text.style.marginRight=value *4+"px";
   text.style.marginTop=value *1.5+"px";
   header.style.top=value*0+"px";
});