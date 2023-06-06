let skils_panel=document.getElementById("skils_panel");
/*skils*/
let web_skils=document.getElementById("skils_words");
let desktop_skils=document.getElementById("skils_words_decktop");
let media_skils=document.getElementById("skils_words_media");
/*discript*/
let web=document.getElementById("paragraph_desc_web");
let desktop=document.getElementById("paragraph_desc_desktop");
let media=document.getElementById("paragraph_desc_media");
/**panels* */
let skils_panel_web=document.getElementById("skils_panel_web");
let skils_panel_desktop=document.getElementById("skils_panel_desktop");
let skils_panel_media=document.getElementById("skils_panel_media");

/**key* */
let page=1;

let next=document.getElementById("next");
let previews=document.getElementById("previews");
let next2=document.getElementById("next2");
let previews1=document.getElementById("previews1");
next.addEventListener('click',next_function);
next2.addEventListener('click',next_function);
previews.addEventListener('click',previews_function);
previews1.addEventListener('click',previews_function);
function next_function(){
    if (page<=2 && page>=1) {
        page++;
        test_next_page(page);
    }
}
function previews_function(){
    if (page<=3 && page>=2) {
        page--;
        test_next_page(page);
    }
}

web.style.animation="opne_disk 2s ease forwards";
web_skils.style.animation="opne_boll 2s ease forwards";

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowRight' && page<=2 && page>=1) {
        page++;
        test_next_page(page);
    }
    if (event.code === 'ArrowLeft' && page<=3 && page>=2) {
        page--;
        test_next_page(page);
    }
});
function test_next_page(pag){
    if(pag==1){
        skils_panel_web.style.transform="translateX(0%) rotateZ(0deg)";
        skils_panel_desktop.style.transform="translateX(50%) rotateZ(90deg)";
        skils_panel_media.style.transform="translateX(100%) rotateZ(90deg)";
    }
    if(pag==2){
        skils_panel_web.style.transform="translateX(-50%) rotateZ(-90deg)";
        skils_panel_desktop.style.transform="translateX(0%) rotateZ(0deg)";
        skils_panel_media.style.transform="translateX(50%) rotateZ(90deg)";
        desktop.style.animation="opne_disk 2s ease forwards";
        desktop_skils.style.animation="opne_boll 2s ease forwards";
    }
    if(pag==3){
        skils_panel_web.style.transform="translateX(-100%) rotateZ(-90deg)";
        skils_panel_desktop.style.transform="translateX(-50%) rotateZ(-90deg)";
        skils_panel_media.style.transform="translateX(0%) rotateZ(0deg)";
        media.style.animation="opne_disk 2s ease forwards";
        media_skils.style.animation="opne_boll 2s ease forwards";
    }
}