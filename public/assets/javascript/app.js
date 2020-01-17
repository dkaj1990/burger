$(function(){

    //Add a burger 
    $(".submit-burgers").on("submit", function(event){
        event.preventDefault(); 

        const newBurger = {
            name: $("#bu").val().trim(),
            devoured: false
        }
        console.log(newBurger);
       /*  $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger

        }).then(
            function(){
                location.reload(); 
            }
        ) */
        

        $.post("/api/burgers", newBurger, function (Brandon){
            console.log(Brandon)
            location.reload();

        })
    });
})