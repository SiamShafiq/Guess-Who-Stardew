var imageNodes = document.getElementsByClassName('portraits');
addEventListeners(imageNodes);
let gameState = 'pick';
let playerChar = "";

function addEventListeners(imageNodes){
    for (var i = 0; i < imageNodes.length; i++){
        
        imageNodes[i].addEventListener("click", function() {
            if(gameState != 'pick'){
                if($(this).hasClass("dark")){
                    $(this).removeClass("dark");
    
                }else if(!$(this).hasClass('dark')){
                    $(this).addClass("dark");
                }
            }else{
                console.log($(this).attr("src"));
                console.log($(this).parent().closest('div').text().trim());
                setPlayerChar($(this).attr("src"), $(this).parent().closest('div').text().trim());
            }
            
        });
    }
}

function setPlayerChar(imgSrc, charName){
    $("#playerAva").attr('src', imgSrc);
    $("#acceptCharBtn").prop('disabled', false);

    $("#selectedChar").text(charName);
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

var filter_female = "";
var filter_male = "";
var filter_marry = "";

function resetFilters(){
    $(".male, .female, .marry").css("backgroundColor", "");
}

var filter = `${filter_female}${filter_male}${filter_marry}`;

function updateFilters(){
    filter = `${filter_female}${filter_male}${filter_marry}`;
    console.log(filter);

    resetFilters();
    $(`${filter}`).css("backgroundColor", "rgba(255, 0, 0, 0.5)");
}
    

let femaleToggle = false;
let maleToggle = false;
let marryToggle = false;


$("#female").click(function(){
    if(femaleToggle){
        filter_female = "";
        femaleToggle = false;
        $('#female').css("backgroundColor", "transparent");
    }else{
        filter_female = ".female";
        femaleToggle = true;
        $('#female').css("backgroundColor", "red");
    }

    updateFilters();
})


$("#male").click(function(){
    if(maleToggle){
        filter_male = "";
        maleToggle = false;
        $('#male').css("backgroundColor", "transparent");
    }else{
        filter_male = ".male";
        maleToggle = true;
        $('#male').css("backgroundColor", "red");
    }

    updateFilters();
})

$("#marry").click(function(){
    if(marryToggle){
        filter_marry = "";
        marryToggle = false;
        $('#marry').css("backgroundColor", "transparent");
    }else{
        filter_marry = ".marry";
        marryToggle = true;
        $('#marry').css("backgroundColor", "red");
    }

    updateFilters();
})


//////

$('#gameIDInput').on('input', function() {
    if($("#gameIDInput").val().length == 6){
        $("#findGame").prop('disabled', false);
    }else{
        $("#findGame").prop('disabled', true);
    }
});

$("#createGame").click(function() {
    window.location.href = 'index.html';
});

$("#acceptCharBtn").click(function() {
    gameState = "play";
});

function generateGameCode(){
    return Math.random().toString(36).slice(7).toUpperCase();
}

function setGameCode(){
    $("#gameCode").text(generateGameCode());
}

$(document).ready(function() {
    setGameCode();
    // $(".modal").modal('show');
});


// $(".character").hover(function(){
//     $(this).append($("<button>***</button>"));
// }, function (){
//     $(this).find("button").last().remove();
// } )






    



