let profile_frame=document.getElementById("profile_frame");
let about_me=document.getElementById("about_me");
let experience=document.getElementById("experience");
/*key*/
let scroll_down=document.getElementById("scroll_down");
let scroll_up=document.getElementById("scroll_up");

scroll_down.addEventListener('click',scroll_down_function);
scroll_up.addEventListener('click',scroll_up_function);
function scroll_down_function(){
    test_down(true);
}
function scroll_up_function(){
    test_down(false);
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowDown') {
        test_down(true);
    }
    if (event.code === 'ArrowUp') {
        test_down(false);
    }
});
function test_down(test){
    if (test == false) {
        about_me.style.transform="rotateZ(0deg)translateY(0)";
        experience.style.transform="rotateZ(70deg)translateY(0)";
        scroll_down.style.display="flex";
    }
    else{
        about_me.style.transform="rotateZ(-70deg)translateY(-100%)";
        experience.style.transform="rotateZ(0deg)translateY(-90%)";
        scroll_down.style.display="none";
        down=true;
    }
}
/**pictur* */
let profile_pict = document.getElementById("profile_pict");
profile_pict.style.animation="fly_icon 4s ease infinite";
/****multitext*** */
var typingEffect = new Typed(".multitext_profile",{
    strings:["Developper","Youtuber","Designer"],
    loop : true,
    typeSpeed: 100,
    backSpeed : 80,
    backDelay : 1500
})