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
    devoured: 0,
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





















