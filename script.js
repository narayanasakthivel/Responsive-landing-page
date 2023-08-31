const contact= document.querySelector(".fea");
const change=document.querySelector(".down3");
contact.addEventListener("click",()=>{
    change.classList.toggle("down1")
    if(change.classList.contains("down1"))
    document.querySelector(".features .fea span img").src="images/icon-arrow-up.svg";
    else
    document.querySelector(".fea span img ").src="images/icon-arrow-down.svg";
})
const contact1=document.querySelector(".company");
const change1=document.querySelector(".down4");
contact1.addEventListener("click",()=>{
    change1.classList.toggle("down2")
    if(change1.classList.contains("down2"))
    document.querySelector(".company  img").src="images/icon-arrow-up.svg";
    else
    document.querySelector(".company span img ").src="images/icon-arrow-down.svg";
})
const var1=document.querySelector(".flinks1");
const var2=document.querySelector(".clinks1");
const data1=document.querySelector(".mfea");
const data2=document.querySelector(".mcom");
data1.addEventListener("click",()=>{
    var1.classList.toggle("flinks");
    if(var1.classList.contains("flinks"))
    document.querySelector(" .mfea img").src="images/icon-arrow-up.svg";
    else
    document.querySelector(".mfea img ").src="images/icon-arrow-down.svg";
})
data2.addEventListener("click",()=>{
    var2.classList.toggle("clinks");
    if(var2.classList.contains("clinks"))
    document.querySelector(".mcom  img").src="images/icon-arrow-up.svg";
    else
    document.querySelector(".mcom img").src="images/icon-arrow-down.svg";
})
const menu=document.querySelector(".menu");
const checki=document.querySelector(".sidemenu1");
menu.addEventListener("click",()=>{
    checki.classList.toggle("sidemenu");
    if(checki.classList.contains("sidemenu"))
    document.querySelector(".menu img").src="images/icon-close-menu.svg";
    else
    document.querySelector(".menu img").src="images/icon-menu.svg";
})