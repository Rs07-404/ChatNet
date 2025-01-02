let navbar = document.getElementById("nav");
let nav = false;
if (window.innerWidth < 850){
    navbar.style.display = "none";
    nav = false;
}

ham.addEventListener('click',()=>{
    if(!nav){
        openList();
    }else{
        closelist();
    }
})

function closelist(){
    nav = false;
    navbar.style.display = "none";
}

function openList(){
    nav = true;
    navbar.style.display = "flex";
}

document.addEventListener("resize",()=>{
    if (window.innerWidth < 850){
        navbar.style.display = "none";
        nav=false;
    }
})