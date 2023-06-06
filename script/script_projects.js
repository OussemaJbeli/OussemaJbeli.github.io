let web_pro=document.getElementById("web_pro");
let desk_pro=document.getElementById("desk_pro");
let media_pro=document.getElementById("media_pro");
let key_prog=document.getElementById("key_prog");

let page_projects=1;

let next_project=document.getElementById("next_project1");
let previews_project1=document.getElementById("previews_project1");
let next_project2=document.getElementById("next_project2");
let previews_project2=document.getElementById("previews_project2");
next_project.addEventListener('click',next_project_function);
next_project2.addEventListener('click',next_project_function);
previews_project1.addEventListener('click',prev_project_function);
previews_project2.addEventListener('click',prev_project_function);
function next_project_function(){
    if (page_projects<=2 && page_projects>=1) {
        page_projects++;
        next_proj_page(page_projects);
    }
}
function prev_project_function(){
    if (page_projects<=3 && page_projects>=2) {
        page_projects--;
        next_proj_page(page_projects);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowRight' && page_projects<=2 && page_projects>=1) {
        page_projects++;
        next_proj_page(page_projects);
    }
    if (event.code === 'ArrowLeft' && page_projects<=3 && page_projects>=2) {
        page_projects--;
        next_proj_page(page_projects);
    }
});

function next_proj_page(pag){
    if(pag==1){
        web_pro.style.transform="rotateZ(0deg)";
        desk_pro.style.transform="rotateZ(-90deg)";
        media_pro.style.transform="rotateZ(-180deg)";
    }
    if(pag==2){
        web_pro.style.transform="rotateZ(90deg)";
        desk_pro.style.transform="rotateZ(0deg)";
        media_pro.style.transform="rotateZ(-90deg)";
    }
    if(pag==3){
        web_pro.style.transform="rotateZ(180deg)";
        desk_pro.style.transform="rotateZ(90deg)";
        media_pro.style.transform="rotateZ(0deg)";
    }
}