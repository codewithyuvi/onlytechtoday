function open_navbar(){
    let navbar = document.querySelector(".navbar");
    let navbar_ul = document.querySelector(".navbar>ul");

    if(navbar_ul.style.display === "none"){
        navbar.style.height = "208px";
        // navbar_ul.style.flexDirection  = "column";
        // navbar_ul.style.display  = "flex";
        navbar_ul.setAttribute("style", "display: flex !important; flex-direction: column;");
    }
    else{
        navbar_ul.setAttribute("style", "display: none !important; flex-direction: row;");

        navbar.style.height = "50px";

    }
}