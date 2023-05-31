let skils_panel=document.getElementById("skils_panel");
/*skils*/
let web_skils=document.getElementById("skils_words");
let desktop_skils=document.getElementById("skils_words_decktop");
let media_skils=document.getElementById("skils_words_media");
/*discript*/
let web=document.getElementById("paragraph_desc_web");
let desktop=document.getElementById("paragraph_desc_desktop");
let media=document.getElementById("paragraph_desc_media");

let test1_opne=0;let test2_opne=0;let value ;
setInterval(() => {
    web.style.animation="opne_disk 2s ease forwards";
    web_skils.style.animation="opne_boll 2s ease forwards";
}, 5000);

skils_panel.addEventListener("scroll",scroll_pan);
function scroll_pan(){
    value = parseInt(skils_panel.scrollTop);
    if(value>=40 && test1_opne==0){
        desktop.style.animation="opne_disk2 2s ease forwards";
        desktop_skils.style.animation="opne_boll2 2s ease forwards";
    }
    if(value>=520 && test2_opne==0){
        media.style.animation="opne_disk 2s ease forwards";
        media_skils.style.animation="opne_boll 2s ease forwards";
    }
}