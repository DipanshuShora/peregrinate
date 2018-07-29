let search_button = null;
let search = null;
let toggle_search=false;
window.onload = function(){
    search_button = document.getElementsByClassName("fas")[0];
    search_button.onclick = function(){
        show_search_bar();
    };
    search = document.getElementById("search");
};
show_search_bar = function(){
    if(!toggle_search){
        toggle_search=true;
        search.style.display="block";
    }
    else{
        toggle_search=false;
        search.style.display="none";
    }
};