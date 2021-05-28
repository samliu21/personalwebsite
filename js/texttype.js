window.onload = function() {
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
    
    setInterval(function() {
        typeText("smile-more");
    }, 7000);
};