var folder = "sdv_portraits";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png)$/) ) { 
                // $(".container").append("<div id='" + val + "'class=imgContainer>");
                $(".container").append("<div><img class='portraits' src='"+ val +"'/>");
                // $(".container").append( "<img class='portraits' src='"+ val +"'/>" );

                // $("#"+val).append("<p>Abigail</p>");
                // $(".container").append("</div>");
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
        // console.log(imageNodes[i].src.replace(/^.*[\\\/]/, '').split(".")[0]);
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
    // setTimeout(, 1000);
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


    



