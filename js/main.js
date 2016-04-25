
/*
$(document); // Activate jQuery for object
$('#mydiv')  // Element with ID "mydiv"
$('p.first') // P tags with class first.
$('p[title="Hello"]') // P tags with title "Hello"
$('p[title^="H"]') // P tags title starting with H



$('a.doSomething').click(function(){
	// Do something here!
	alert('You did something, woo hoo!');
});
*/

    // Get the homepage div element 
	//var home = document.getElementById( "homepage" );
	// Change the display property (none) to hide the intro. 
    //home.style.display = "none";
    
   // $(document).ready(function(){	
   // $(".page").on("click", function(e) {  
        
        
       // var target = $(this).attr(".homelink");
       // $(target).slideToggle("fast");
       // $(".homelink").not(target).hide();
       // e.preventDefault();
    //});
//});


// Toggle map images on click. 
$('.map[data-target]').click(function() {
    var target = $(this).data('target');
    $('#' + target).slideToggle('slow');
});




// Toggle question sections on click. 
$('.disc-list[data-target]').click(function() {
    var target = $(this).data('target');
    $('#' + target).slideToggle('slow');
});






// http://codepen.io/robwakeman/pen/zxjGWX


//Put answers in an array and store in 'Answers' variable.
var answers = ["a","a","b","c","b","a","b","a","c"];
//Total # of possible answers
    total = answers.length;
    
var checkedValue = getCheckedValue(  );


//Create a function to store the users answer choice input (correct or not)
function getCheckedValue( radioName ){
 	var radios = document.getElementsByName( radioName ); //Find the answer choices for each question
    for(var y=0; y<radios.length; y++) //Loop through answers to find checked?
      if(radios[y].checked) return radios[y].value; // return the checked value ie the chosen answer/input


    //Create a function to display answer and if correct or not
		function checkAnswer(){
			if (checkedValue === answers[y]) {
				alert("Correct");
			} else {
				//var response = document.getElementsByClassName( answerConfirm );
				alert ("Incorrect");
			}
}
}

//========================This section is to display at the very end when all 9 questions have been answered=================//
function returnAnswer(){
  alert("Your score is "+ getScore() +"/"+ total);
  }


// return total score 
function getScore(){
  var score = 0;
  for (var i=0; i<total; i++)
    if(getCheckedValue("answer"+i)===answers[i]) score += 1; // add one when answer is correct
  return score; // Store score in 'getScore'
}

function returnScore(){
  document.getElementById("myresults").innerHTML = "Your score is "+ getScore() +"/"+ total;
}


