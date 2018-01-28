$(document).ready(function(){
    var introHeight=$("#intro").height();
    var windowHeight=$(window).height();
    console.log(introHeight);
    console.log(windowHeight);
    console.log(windowHeight-introHeight);
    var newHeight=windowHeight-introHeight;
    var newheightString=newHeight.toString();
    console.log("newHeight "+newHeight);
    var divString="height: "+newheightString+"px";
    console.log(newheightString);
    console.log(divString);
    
    $('<div>', { 
        style: divString
    }).appendTo('#intro');
    $(window).bind('resize', function(e){
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function(){
            this.location.reload(false); /* false to get page from cache */
        }, 200);
    });
});
