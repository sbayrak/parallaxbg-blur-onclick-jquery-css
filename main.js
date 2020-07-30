$(document).ready(function(){
    $("body").mousemove(function(e){
        var myMouseX = e.pageX;
        var myMouseY = e.pageY;

        $("body").css("background-size", '   calc(100% + '+ myMouseX/5 +'px)   ');
        $("body").css("background-size", '   calc(100% + '+ myMouseY/5 +'px)   ');
    });

    $(".harley #readmore").click(function(){
        $(".harley").toggleClass('active');
        $(".popup").toggleClass('active2');
    });
    $(".popup #close").click(function(){
        $(".harley").toggleClass('active');
        $(".popup").toggleClass('active2');
    });
});