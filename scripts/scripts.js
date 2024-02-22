//llama game
$(document).ready(function(){
    hideResult();
    $("#submit-button").click(function(){
        let name = $("#name-input").val();
        if(name == ""){
            alert("Name required!");
            return;
        }
        let month = $("#month-select").val();
        if(month == ""){
            alert("Birth month required!");
            return;
        }
        $("#llama-image").attr("src","./images/" + month + ".png");
        $("#name-header").text("Hello " + name);
        $("#letterCount").text(name.length);
        let vowelCount = getVowelCount(name);
        $("#vowelCount").text(vowelCount);
        let nameParts = name.split(" ");
        if(name.includes(" ")){
            $("#firstName").text(nameParts[0]);
            $("#lastName").text(nameParts[1]);
            $("#lastNameContainer").removeClass("d-none");
        }
        else{
            $("#firstName").text(name);
            $("#lastNameContainer").addClass("d-none");
        }
        showResult();
    });

    function showResult(){
        $("#result").removeClass("d-none");
    }

    function hideResult(){
        $("#result").addClass("d-none");
    }

    function getVowelCount(name){
        var vowelCount = 0;
        for (var i = 0; i <= name.length - 1; i++) {
            if ('aeiou'.includes(name[i].toLowerCase())) {
                vowelCount += 1;
            }
        }
        return vowelCount;
    }


    //doge game
    $(function(){
        var dogeModal = new bootstrap.Modal(document.getElementById('dogeModal'));
        var dogePic = $("#doge");
        dogePic.draggable();
        document.getElementById('dogeModal').addEventListener('hide.bs.modal', function (event) {
        dogePic.css('top', '0').css('left', '0').css("width","250px");
        });
        $("#hole").droppable({
            drop: function( event, ui ) {
            dogePic.animate({
                width: 0
            },
            {
                duration: 750,
                complete: function() {
                dogeModal.show();
                }
            });
            }
        });
    });
});