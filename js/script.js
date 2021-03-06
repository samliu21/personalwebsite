$(function() {
    function valid(str) {
       return str != "" && str !== undefined;
    }

    function validateEmail(email) {
        let regex = /^([\w-\.])+@([\w-\.])+[\w-]{2,4}?$/;
        return regex.test(email);
    }

    // Add user to email list
    $("#contact-submit-button").on("click", function(event) {
        event.preventDefault();
        
        let name = $("#username");
        let email = $("#useremail");
        // console.log(`${name.val()} ${email.val()}`);
        if (valid(name.val()) && valid(email.val()) && validateEmail(email.val())) {
            alert("Added!");
        }
        else {
            alert("Error adding your information. Please try again!");
        }

        name.val("");
        email.val("");
    });

    // Make name dip upon hover 
    let bounce = $(".bounce");
    setInterval(function() {
        // $(".bounce:hover") returns a list of all elements with class .bounce that are being hovered over
        if ($(".bounce:hover").length != 0) {
            bounce.animate({
                top: "+=20vh",
            }, 500);
            bounce.animate({
                top: "-=20vh",
            }, 500, function() {
                if (!isHover) {
                    bounce.stop(true, false);
                }
            });
        }
    }, 50)

})
