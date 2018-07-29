let content = null;
hide_content = function() {
    content = document.getElementsByClassName("content")[0].childNodes;
    content[3].style.display = "none";
    content[5].style.display = "none";
};
hide_content();