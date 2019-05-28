// on click to create burger
$(function () {



    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val()
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