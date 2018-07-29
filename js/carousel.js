let carousel = null;

hide_carousel = function(){
    carousel = document.getElementsByClassName("customers-carousel")[0].childNodes;
    carousel[3].style.display = "none";
    carousel[5].style.display = "none";
};
hide_carousel();