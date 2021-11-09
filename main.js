function adduser() {
    user_name = document.getElementById("pl1name").value;
    localStorage.setItem("player1", user_name);
    user_name2 = document.getElementById("pl2name").value;
    localStorage.setItem("player2", user_name2);
    window.location = "game.html";
}
document.getElementById("player1_name").innerHTML =  localStorage.getItem("player1");
document.getElementById("player2_name").innerHTML =  localStorage.getItem("player2");

function send(){
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}