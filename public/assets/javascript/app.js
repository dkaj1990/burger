$(function(){

    //Add a burger 
    $(".submit-burgers").on("submit", function(event){
        event.preventDefault(); 

        const newBurger = {
            name: $("#bu").val().trim(),
            devoured: 0
        }
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger

        }).then(
            function(){
                location.reload(); 
            }
        ) ;
       /* $.post("/api/burgers", newBurger, function (Brandon){
            console.log(Brandon)
            location.reload();

        })*/
    });

    //Delete a burger 
    $(".devburger").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");
      
  
      let newEatState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

})