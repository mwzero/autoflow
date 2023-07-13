function loaderFile(byId, htmlElementId, blockListHtmlFile)
{
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            if ( byId ) 
                document.getElementById(htmlElementId).innerHTML=xmlhttp.responseText;
            else 
                htmlElementId.innerHTML += xmlhttp.responseText
        }
    }
 xmlhttp.open("GET",blockListHtmlFile,true);
 xmlhttp.send();
}

function initializeFlow() {

    var rightcard = false;
    var tempblock;
    var tempblock2;

    loaderFile(true, "blocklist", "/assets/htmls/triggers.html");
    flowy(document.getElementById("canvas"), drag, release, snapping);
    
    function addEventListenerMulti(type, listener, capture, selector) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].addEventListener(type, listener, capture);
        }
    }
    
    function snapping(drag, first) {

        var grab = drag.querySelector(".grabme");
        grab.parentNode.removeChild(grab);
        var blockin = drag.querySelector(".blockin");
        blockin.parentNode.removeChild(blockin);

        loaderFile(true, "blocklist", "/assets/htmls/triggers.html");
        loaderFile(false, drag, "/assets/htmls/blocks/" + drag.querySelector(".blockelemtype").value + ".html");
        return true;
    }
    
    function drag(block) {
        block.classList.add("blockdisabled");
        tempblock2 = block;
    }
    
    function release() {
        if (tempblock2) {
            tempblock2.classList.remove("blockdisabled");
        }
    }
    var disabledClick = function(){
        document.querySelector(".navactive").classList.add("navdisabled");
        document.querySelector(".navactive").classList.remove("navactive");
        this.classList.add("navactive");
        this.classList.remove("navdisabled");

        loaderFile("blocklist", "/assets/htmls/" + this.getAttribute("id") + ".html");

    }
    addEventListenerMulti("click", disabledClick, false, ".side");
    document.getElementById("close").addEventListener("click", function(){
       if (rightcard) {
           rightcard = false;
           document.getElementById("properties").classList.remove("expanded");
           setTimeout(function(){
                document.getElementById("propwrap").classList.remove("itson"); 
           }, 300);
            tempblock.classList.remove("selectedblock");
       } 
    });
    
document.getElementById("removeblock").addEventListener("click", function(){
 flowy.deleteBlocks();
});
var aclick = false;
var noinfo = false;
var beginTouch = function (event) {
    aclick = true;
    noinfo = false;
    if (event.target.closest(".create-flowy")) {
        noinfo = true;
    }
}
var checkTouch = function (event) {
    aclick = false;
}
var doneTouch = function (event) {
    if (event.type === "mouseup" && aclick && !noinfo) {
      if (!rightcard && event.target.closest(".block") && !event.target.closest(".block").classList.contains("dragging")) {
            tempblock = event.target.closest(".block");
            rightcard = true;
            document.getElementById("properties").classList.add("expanded");
            document.getElementById("propwrap").classList.add("itson");
            tempblock.classList.add("selectedblock");
       } 
    }
}
addEventListener("mousedown", beginTouch, false);
addEventListener("mousemove", checkTouch, false);
addEventListener("mouseup", doneTouch, false);
addEventListenerMulti("touchstart", beginTouch, false, ".block");
}
