$(document).ready(function() {
    $(".bounce").mouseenter(function() {
        $(this).animate({
            //marginTop: "+=200px",
        }, "slow");
        console.log("Hello?");
    });
});