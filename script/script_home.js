let icon = document.getElementById("icon");
/****disc */
icon.style.animation="open_icon 2s ease forwards";

setInterval(() => {
    icon.style.left=0;
    icon.style.animation="fly_icon 4s ease infinite";
}, 2000);
/****multitext*** */
var typingEffect = new Typed(".multitext",{
    strings:["Developper","Youtuber","Designer"],
    loop : true,
    typeSpeed: 100,
    backSpeed : 80,
    backDelay : 1500
})