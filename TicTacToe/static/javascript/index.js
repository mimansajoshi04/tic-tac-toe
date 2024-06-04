    function isNotNumericUsingASCII(input) {
    for (let i = 0; i < input.length; i++) {
        const ascii = input.charCodeAt(i);
        if (ascii < 48 || ascii > 57) { 
            return true; 
        }
    }
    return false;
}


document.addEventListener("DOMContentLoaded",function(){

    formBox = document.getElementById("formBox");

    formBox.style.display = 'none';

    notificationBox = document.getElementById("notificationBox");
    closeButton = document.getElementById("close-Notification");

    notificationBox.style.display='block';
    closeButton.focus();

    
});


function closeNotification() {
    const notificationBox = document.getElementById('notificationBox');
    notificationBox.style.display = 'none';
    document.getElementById('formBox').focus(); // Focus some default element after manual close

    formBox = document.getElementById("formBox");
    
    formBox.style.display = 'block';
}


function redirectToGamePage(){
    var size = document.getElementById('size').value.trim();
    var player1color = document.getElementById('color1').value;
    var player2color = document.getElementById('color2').value;

    var player1name = document.getElementById('player1').value;
    var player2name = document.getElementById('player2').value;
    

    if( size==="" || isNotNumericUsingASCII(size) ){
        alert("Please input a valid number.");
        return false;
    }

    else if( parseInt(size)<3 ){
        alert("Please input a number greater than 3!");
        return false;
    }
    else{
        if(player1color==player2color){
            alert("Both the players cannot have the same color! ");
            return false;
        }

        if(player1name == player2name){
            alert("Both players cannot have same name!");
            return false;
        }

        else{
            which = document.getElementById("attribute");
            which.value ="simpleGame";
            return true;
        }
    }
}


function redirecttoSpecialGamePage(){
    var size = document.getElementById('size').value.trim();
    var player1color = document.getElementById('color1').value;
    var player2color = document.getElementById('color2').value;

    var player1name = document.getElementById('player1').value;
    var player2name = document.getElementById('player2').value;
    
    

    if( size==="" || isNotNumericUsingASCII(size) ){
        alert("Please input a valid number.");
        return false;
    }

    else if( parseInt(size)<3 ){
        alert("Please input a number greater than 3!");
        return false;
    }
    else{
        if(player1color==player2color){
            alert("Both the players cannot have the same color! ");
            return false;
        }

        if(player1name == player2name){
            alert("Both players cannot have same name!");
            return false;
        }

        which = document.getElementById("attribute");
        which.value ="specialGame";
        return true;
    }
}


function begin(){
    btn = document.activeElement.id;

    if(btn == "simpleGame"){
        return redirectToGamePage();
    }
    else if(btn == "specialGame"){
        return redirecttoSpecialGamePage();
    }
    else{
        return false;
    }
}