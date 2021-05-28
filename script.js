$(function() {
    function valid(str) {
       return str != "" && str !== undefined;
    }

    function validateEmail(email) {
        let regex = /^([\w-\.])+@([\w-\.])+[\w-]{2,4}?$/;
        return regex.test(email);
    }

    // Simulate text typing
    function typeText(textID) {
        let textElement = $(`#${textID}`);
        let text = textElement.text();
        let stringToDisplay = "";
        let currentPos = 0;
        textElement.text("");

        let addChar = function() {
            stringToDisplay += text[currentPos];
            ++currentPos;
            textElement.text(stringToDisplay);
            if (currentPos < text.length) {
                setTimeout(addChar, 150);
            }
        }
        addChar();
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
    $(".bounce").on("mouseenter", function() {
        $(this).animate({
            top: "+=20vh",
        }, 500);
        $(this).animate({
            top: "-=20vh",
        }, 500);
    });

    setInterval(typeText("smile-more"), 7000);
})