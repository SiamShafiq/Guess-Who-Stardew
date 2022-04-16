var folder = "https://protected-castle-91862.herokuapp.com/https://github.com/SiamShafiq/Guess-Who-Stardew/tree/main/assets/portraits";

$.ajax({
    url : folder,
    type: 'GET',
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png)$/) ) { 
                $(".container").append("<div><img class='portraits' src='"+ val +"'/>");
            } 
        });
    }
});


function addEventListeners(imageNodes){
    // console.log(imageNodes);

    for (var i = 0; i < imageNodes.length; i++){          
        imageNodes[i].addEventListener("click", function() {
            if($(this).hasClass("dark")){
                $(this).removeClass("dark");
            }else{
                $(this).addClass("dark");
            }
            
        });
    }

    addNames();
}

function addNames(){
    var imageNodes = document.getElementsByClassName('portraits');
    $(".container > div").append("<p>Test</p>");
    let characters = [];
    for (var i = 0; i < imageNodes.length; i++){          
        let characterName = imageNodes[i].src.replace(/^.*[\\\/]/, '').split(".")[0];
        characters.push(characterName);
    }

    let counter = 0;
    $(".container > div > p").each(function(i) {
        this.innerHTML = characters[counter];
        counter++;
    })

    for (var i = 0; i < imageNodes.length; i++){          
        let characterName = imageNodes[i].src.replace(/^.*[\\\/]/, '').split(".")[0];

    }
}

$(document).ajaxComplete(function() {
    var imageNodes = document.getElementsByClassName('portraits');
    addEventListeners(imageNodes);
})

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


    



