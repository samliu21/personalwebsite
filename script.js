$(function() {
    function valid(str) {
       return str != "" && str !== undefined;
    }

    function validateEmail(email) {
        let regex = /^([\w-\.])+@([\w-\.])+[\w-]{2,4}?$/;
        return regex.test(email);
    }

    $("#contact-submit-button").on("click", function(event) {
        event.preventDefault();
        
        let name = $("#username");
        let email = $("#useremail");
        // console.log(`${name.val()} ${email.val()}`);
        if (valid(name.val()) && valid(email.val()) && validateEmail(email.val())) {
            alert("Added!");
        }
        else {
            alert("Error adding your information. Please try agani!");
        }

        name.val("");
        email.val("");
    })
})