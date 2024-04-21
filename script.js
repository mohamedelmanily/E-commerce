const menu = document.getElementById("menu");
const insideMenu = document.getElementById("inside-menu");
const menuStyle = document.querySelector(".links ul");
const bigImage = document.querySelector(".big-img");
const smallImage = document.querySelectorAll(".small-img");
const cards = document.getElementsByClassName("card");
const cardImg=document.querySelectorAll('.card img')
const sCardPrice=document.querySelector('.pro-details h2')
const CardPrice=document.querySelectorAll('#feat-products .card h4')


// console.log([...cardImg].map((e)=>e.src),bigImage.src);
// console.log(CardPrice);
menu.addEventListener("click", () => {
  menuStyle.classList.add("active1");
});
insideMenu.addEventListener("click", () => {
  menuStyle.classList.remove("active1");
});

function toShop(e) {
  
  window.location.href = "s-product.html";
  console.log(e.target.CardPrice); 
   
}

  [...cards].map((m)=>m.addEventListener('click', ()=>{
    toShop()
  }));


function changePhoto(e) {
  bigImage.src = e.target.src;
}

 Array.from(smallImage).map((e)=> e.addEventListener('click', changePhoto))

