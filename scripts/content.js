/*LeetCode Difficulty Hider
  Version-1.0
  Made by-Kuldeep Shakya
*/




window.onload = ()=>{

let body = document.querySelector("body");
let parentdiv = body.getElementsByClassName('odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4')

const showDiff = () => {
    for(let i =0; i<parentdiv.length;i++){

        let easydiv = parentdiv[i].getElementsByClassName('mx-2 flex items-center')
        easydiv[4].setAttribute("style","box-sizing: border-box; flex: 84 0 auto; min-width: 0px; width: 84px;");
        
    }

    let quespageesy = body.getElementsByClassName('relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary text-difficulty-easy dark:text-difficulty-easy')
    let quespagemed = body.getElementsByClassName('relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary text-difficulty-medium dark:text-difficulty-medium')
    let quespagehard = body.getElementsByClassName('relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary text-difficulty-hard dark:text-difficulty-hard')
    
    if(quespageesy.length>0){
         quespageesy[0].style.visibility="visible";
    }
    if(quespagemed.length>0){
         quespagemed[0].style.visibility="visible";
    }
    if(quespagehard.length>0){
         quespagehard[0].style.visibility="visible";
    }
    
}

const hideDiff = () => {

    for(let i =0; i<parentdiv.length;i++){
        let easydiv = parentdiv[i].getElementsByClassName('mx-2 flex items-center');
        easydiv[4].style.visibility="hidden";
        
    }

    let quespageesy = body.getElementsByClassName('relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary text-difficulty-easy dark:text-difficulty-easy')
    let quespagemed = body.getElementsByClassName('relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary text-difficulty-medium dark:text-difficulty-medium ')
    let quespagehard = body.getElementsByClassName('relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary text-difficulty-hard dark:text-difficulty-hard ')
    if(quespageesy.length>0){
         quespageesy[0].style.visibility="hidden";
    }
    if(quespagemed.length>0){
         quespagemed[0].style.visibility="hidden";
    }
    if(quespagehard.length>0){
         quespagehard[0].style.visibility="hidden";
    }
    
}




let btnstart = document.createElement("button");
btnstart.setAttribute("id","btnstart");
btnstart.innerHTML="Hide";
body.appendChild(btnstart);


btnstart.addEventListener("click",()=>{


    if(btnstart.innerHTML==="Show"){
        setTimeout(showDiff,1000);
        btnstart.innerHTML="Hide";
    }else{
        setTimeout(hideDiff,1000);
    
        btnstart.innerHTML="Show"

    } 

})





var element = document.getElementById('btnstart');
    var isDragging = false;
    var offset = { x: 0, y: 0 };

    element.addEventListener('mousedown', function(e) {
      isDragging = true;
      offset.x = e.offsetX;
      offset.y = e.offsetY;
    });

    element.addEventListener('mouseup', function() {
      isDragging = false;
    });

    document.addEventListener('mousemove', function(e) {
      if (isDragging) {
        element.style.left = (e.clientX - offset.x) + 'px';
        element.style.top = (e.clientY - offset.y) + 'px';
      }
    });
}
