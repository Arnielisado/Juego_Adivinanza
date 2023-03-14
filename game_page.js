//código para obtener info. del almacenamiento local
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

//definir variables para puntuación
player1_score=0;
player2_score=0;

//actualizar datos en la página web
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

//actualizar puntuaciones
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

//definir turnos
document.getElementById("player_question").innerHTML="turno para preguntar: "+player1_name;
document.getElementById("player_answer").innerHTML="turno para responder: "+player2_name;

//definir función de btn enviar
function send(){
    //tomar plabra y ponerla en minuscula
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();//función para cambiar a minúscula
    console.log("palabra en minusculas : "+word);
    //borrar las letras
    charAt1=word.charAt(1);//función para obtener las letras de la palabra
    console.log(charAt1);
    length_devide_2=Math.floor(word.length/2);//dividir palabra en 2 y redondear
    charAt2=word.charAt(length_devide_2);
    console.log(charAt2);
    //Obtener 3° letra
    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);
    //sustituir letras por guión bajo
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);
    //poner en la página la palabra a adivinar
    question_word="<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
    input_box="<br>respuesta: <input type='text' id='input_check_box'>";//crear caja de texto para respuesta
    check_button="<br><br><button class='btn btn-info' onclick='check()'>comprobar</button>";//crear un botón azul con letra blanca
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer=document.getElementById("input_check_box").value;//tomar palabra de respuesta
    answer=get_answer.toLowerCase();//convertir respuesta a minusculas
    console.log("respuesta en minúsculas = "+answer);
    if(answer==word){//verificr si respuesta es = a pregunta
    if(answer_turn=="player1"){//si respuesta es correcta aumenta un punto player1
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;//enviar a pantalla el nuevo puntaje
    }
    else{//turno del player2
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;//enviar a pantalla el nuevo puntaje
    }
    }
    if(question_turn=="player1"){
        question_turn="player2";//cambiar el turno de jugador
        document.getElementById("player_question").innerHTML="turno para preguntar - "+player2_name;
    }
    else{
        question_turn="player1";//cambiar el turno de jugador
        document.getElementById("player_question").innerHTML="turno para preguntar - "+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";//cambiar el turno de preguntar
        document.getElementById("player_answer").innerHTML="turno para responder - "+player2_name;
    }
    else{
        answer_turn="player1";//cambiar el turno de preguntar
        document.getElementById("player_answer").innerHTML="turno para responder - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}