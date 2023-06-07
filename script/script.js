let buttons = document.querySelectorAll(".nav_font");
let load_page = document.getElementById("load_page");
let nav_bar = document.getElementById("nav_bar");
let closed_pan = "home_panel";
// Add a click event listener to each chekbox
buttons.forEach(nav => {
    nav.addEventListener("click", () => {
        /**********button******** */
        let open_but = nav.getAttribute("id");
        load_page.innerHTML=`<h2 data-text='${open_but}...'>${open_but}...</h2>`;
        butt(open_but);
        /**********panel******** */
        let open_pan = open_but+"_panel";
        /****animation */
        if(open_pan!=closed_pan)
            animate(open_pan,closed_pan);
        closed_pan = open_pan;
    });
});
/*******animation butt */
function butt(butt){
    let tab=['home','profile','skils','project','contact'];
    for(let i=0;i<=4;i++){
        if(tab[i]==butt){
            let icon = document.getElementById(butt);
            icon.style.color="var(--main_color1)";
        }
        else{
            let icon = document.getElementById(tab[i]);
            icon.style.color="var(--main_color2)";
        }
    }
}
/*******animation frame */
function animate(new_panel,old_panel){
    let olde_pan = document.getElementById(old_panel);
    let new_pan = document.getElementById(new_panel);
    // panel 1
    nav_bar.style.zIndex='-999';
    olde_pan.style.display="flex";
    olde_pan.style.animation="zoomout .5s ease forwards";
    setTimeout(function() {
        olde_pan.style.animation=" translateclose_panel .5s ease forwards";
        olde_pan.style.transform="translate3d(0,0,-40px)";
        }, 500);

    // load page
    setTimeout(function() {
        olde_pan.style.display="none";
        load_page.style.display="flex";
        load_page.style.left="-100%";
        load_page.style.animation="translateopen_load .5s ease forwards";
    }, 500);
    setTimeout(function() {
        load_page.style.left="0";
        load_page.style.animation="translateclose_load .5s ease forwards";
    }, 2000);

    //panel 2
    setTimeout(function() {
        load_page.style.display="none";
        new_pan.style.display="flex";
        new_pan.style.left="-100%";
        new_pan.style.animation=" translateopen_panel .5s ease forwards";
    }, 2000);
    setTimeout(function() {
        new_pan.style.left="0";
        new_pan.style.animation=" zoomin .2s ease forwards";
        nav_bar.style.zIndex='1';
    }, 2500);

}