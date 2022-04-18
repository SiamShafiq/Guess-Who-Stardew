var imageNodes = document.getElementsByClassName('portraits');
addEventListeners(imageNodes);

function addEventListeners(imageNodes){
    for (var i = 0; i < imageNodes.length; i++){
        
        imageNodes[i].addEventListener("click", function() {
            if($(this).hasClass("dark")){
                $(this).removeClass("dark");

            }else if(!$(this).hasClass('dark')){
                $(this).addClass("dark");
            }
        });
    }
}


let nightModeOn = false;
$("#nightBtn").click(function() {
    if(!nightModeOn){
        $('body').css('background-image','url(assets/night.webp)');
        $('body').css('color', 'white');

        $('#nightBtn').css("backgroundColor", "red");
        nightModeOn = true;

    }else{
        $('body').css('background-image','url(assets/day.webp)');
        $('body').css('color', 'black');

        $('#nightBtn').css("backgroundColor", "rgba(255, 255, 255, 0.2)");
        nightModeOn = false;
    }
});

let femaleToggle = false;
$("#female").click(function() {
    if(!femaleToggle){
        $(".portraits").filter(".female").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        femaleToggle = true;

        $('#female').css("backgroundColor", "red");
    }else{
        $(".portraits").filter(".female").css("backgroundColor", "");
        femaleToggle = false;

        $('#female').css("backgroundColor", "rgba(255, 255, 255, 0.2)");
    }
});

let maleToggle = false;
$("#male").click(function() {
    if(!maleToggle){
        $(".portraits").filter(".male").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        maleToggle = true;

        $('#male').css("backgroundColor", "red");
    }else{
        $(".portraits").filter(".male").css("backgroundColor", "");
        maleToggle = false;

        $('#male').css("backgroundColor", "rgba(255, 255, 255, 0.2)");

    }
});

let marryToggle = false;
$("#marry").click(function() {
    if(!marryToggle){
        $(".portraits").filter(".marry").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        marryToggle = true;

        $('#marry').css("backgroundColor", "red");

    }else{
        $(".portraits").filter(".marry").css("backgroundColor", "");
        marryToggle = false;

        $('#marry').css("backgroundColor", "rgba(255, 255, 255, 0.2)");

        
    }
});











    



