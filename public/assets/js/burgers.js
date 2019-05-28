// on click to create burger
$(function () {
    $(".change-status").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newstatus");
        console.log(newDevour);
        var newDevourStatus = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourStatus
        }).then(
            function () {
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim()

        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Burger Created!");
                location.reload();
            }
        );
    });

});