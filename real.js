player1_name=document.getElementById("tx_us_1").value;
player2_name=document.getElementById("tx_us_2").value;
player1_score = 0; 
player2_score = 0; 
document.getElementById("player1_name").innerHTML = player1_name + " : "; 
document.getElementById("player2_name").innerHTML = player2_name + " : "; 
document.getElementById("player1_score").innerHTML = player1_score ; 
document.getElementById("player2_score").innerHTML = player2_score ; 
function send(){
n1=document.getElementById("n1").value;
n2=document.getElementById("n2").value;
ac=parseInt(n1)*parseInt(n2);
q_n="<h4>" + n1 + "X" + n2 + "</h4>";
i="<br>Answer : <input id='answer_input' type='number' style='width:200px' class='form-control'>";
c="<br><br> <button id='check_button' class='btn btn-success' onclick='check();'>Check your answer</button>"
row = q_n+i+c;
document.getElementById("output").innerHTML=row;
document.getElementById("n1").value="";
document.getElementById("n2").value="";
}
qt="player1";
at="player2";
function check(){
g_a=document.getElementById("answer_input").value;
if(g_a == ac){
if (at == "player1"){
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
}
else{
player2_score=player2_score+1;
document.getElementById("player2_score").innerHTML=player2_score;
}
}
}
