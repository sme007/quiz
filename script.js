let pos = 0; 
let score = 0;
let test
let test_status
let question
let choice
let choices
let chA
let chB
let chC
let correct = 0;
let questions = [
    [ "A folder is an object that contains _____ files", "Single", "Multiple", "None of the above", "B" ],
    [ "What do you call a folder inside another folder", "Child folder", "Parent folder", "Sub folder", "C" ],
    [ "Every file name has ______" , "Extension", "Picture", "Document", "A"],
    [ "____ helps to organize files in one place", "Extension", "Files", "Folder", "C" ],
    [ "Data is stored in the computer in the form of _____", "Folder", "Files", "Document", "B" ],
    [ "____ is a file extension of a file saved in Notepad", ".txt", ".bmp", ".odt", "A" ],
    [ "Cartoon.doc is a file extension for ___", "Microsoft word file", "Picture file", "Powerpoint file", "A" ],
    [ "Which of the following is a file type for Criket.bmp", "Ms paint file", "Ms word file", "Notepad file", "A" ],
    [ "Which of the following terms describes accessing files from a computer other than the one where the files are stored", "Local access", "Special access", "Remote access", "C" ]

];

let exitQuiz = document.getElementById("btn2");
let startQuiz = document.getElementById("start-quiz");
let timerDisplay = document.getElementById("time-span");


function renderQuestion() {
    let test = document.getElementById("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got " +correct+ " of " +questions.length+ " questions correct </h2>";
        position.innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        // return false, prevents the code below from running
        return false;
    }
    let position = document.getElementById("test_status");
    question = questions[pos] [0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>" +question+ "</h3>";
    position.innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"<br>";
    test.innerHTML += "<button onclick='checkAnswer()' id='btnSubmit'>Submit Answer</button>";
   
}


function checkAnswer() {
    choices = document.getElementsByName("choices");
    for(let i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }  
    if(choice == questions[pos][4]){
        correct++;
    }  
    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);

startQuiz.addEventListener('click', ()=>{
    window.location = "examApp.html";
});




// Timer code here



