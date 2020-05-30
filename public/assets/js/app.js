console.log("loaded")

$(".devourBtn").on("click", function () {
    var id = $(this).data("id")
    var devoured = $(this).data("devoured")

    console.log(id, devoured)

    $.get("/api/burgers/" + id + "/" + devoured)
        .then(function (response) {
            console.log(response)
            location.reload()
        })
        .catch(function (error) {
            console.warn(error)
        })
})


$(".create-form").on("submit", function(event) {
  event.preventDefault();
  
  var newBurger = {
    name: $("#ca").val().trim(),
    
    //devoured: $("[name=sleepy]:checked").val()
  };
  
  console.log("hi");
  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("created new burger");
      // Reload the page to get the updated list
        location.reload();
      }
    );
  });

$(".delete-burger").on("click", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});


















    
//     event.preventDefault();
//     console.log("hi");
//     var newBurger = {
//         // id: 5,
//         burger_name: $("#newBurger").val().trim(),
//         devoured: $("false").val()
//     };

//     // $(".createBtn").on("click", function (event) {
//     $.ajax("/api/burger/" + "/" + devoured, {
//         type: "POST",
//         data: newBurger
//     }).then(
//         function () {
//             console.log("created new burger");
//             // Reload the page to get the updated list
//             location.reload();
//         }
//     );
// })
