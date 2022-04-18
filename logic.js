function addEventListeners(imageNodes){

    for (var i = 0; i < imageNodes.length; i++){          
        imageNodes[i].addEventListener("click", function() {
            if($(this).hasClass("dark")){
                $(this).removeClass("dark");
            }else{
                $(this).addClass("dark");
            }
            
        });
    }
}

var imageNodes = document.getElementsByClassName('portraits');
addEventListeners(imageNodes);

let nightModeOn = false;
$("#nightBtn").click(function() {
    if(!nightModeOn){
        $('body').css('background-image','url(assets/night.webp)');
        $('body').css('color', 'white');
        nightModeOn = true;

    }else{
        $('body').css('background-image','url(assets/day.webp)');
        $('body').css('color', 'black');
        nightModeOn = false;
    }
    

});


    



