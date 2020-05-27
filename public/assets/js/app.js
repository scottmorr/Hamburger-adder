console.log("loaded")

$(".devourBtn").on("click", function () {
    var id = $(this).data("id")
    var devoured = $(this).data("devoured")

    console.log(id, devoured)

    $.get("/api/burger/" + id + "/" + devoured)
        .then(function(response){
            console.log(response)
            location.reload()
        })
        .catch(function(error){
            console.warn(error)
        })
})