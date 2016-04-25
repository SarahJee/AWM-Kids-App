
$(document); // Activate jQuery for object
$('#mydiv')  // Element with ID "mydiv"
$('p.first') // P tags with class first.
$('p[title="Hello"]') // P tags with title "Hello"
$('p[title^="H"]') // P tags title starting with H



$('a.doSomething').click(function(){
	// Do something here!
	alert('You did something, woo hoo!');
});


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




// Show hide Aircraft Hall Section
$( ".ah-blue" ).click(function() {
 $( "#aircrafthall" ).slideToggle( "slow" );
});

// Show hide First WW Section
$( ".fww-green" ).click(function() {
 $( "#firstworldwar" ).slideToggle( "slow" );
});

// Show hide Second WW Section
$( ".sww-purple" ).click(function() {
 $( "#secondworldwar" ).slideToggle( "slow" );
});

// Show hide Hall of V Section
$( ".hov-orange" ).click(function() {
 $( "#hallofvalour" ).slideToggle( "slow" );
});

// Show hide Anzac Hall Section
$( ".ah-pink" ).click(function() {
 $( "#anzachall" ).slideToggle( "slow" );
});

// Show hide Hall of M Section
$( ".hom-blue" ).click(function() {
 $( "#hallofmemory" ).slideToggle( "slow" );
});

// Show hide Conflicts Section
$( ".con-green" ).click(function() {
 $( "#conflicts45today" ).slideToggle( "slow" );
});

// Show hide Memorial Gds Section
$( ".mg-purple" ).click(function() {
 $( "memorialgrounds" ).slideToggle( "slow" );
});

// Show hide Sculpture Gdn Section
$( ".sg-orange" ).click(function() {
 $( "#sculpturegarden" ).slideToggle( "slow" );
});





// Show hide Maps
$( ".map-blue" ).click(function() {
  $( "#mgmap" ).slideToggle( "slow" );
});

// Show hide Maps
$( ".map-green" ).click(function() {
  $( "#glmap" ).slideToggle( "slow" );
});

// Show hide Maps
$( ".map-purple" ).click(function() {
  $( "#ufmap" ).slideToggle( "slow" );
});

// Show hide Maps
$( ".map-orange" ).click(function() {
  $( "#llmap" ).slideToggle( "slow" );
});


// http://codepen.io/robwakeman/pen/zxjGWX


//Put answers in an array and store in 'Answers' variable.
var answers = ["a","a","b","c","b","a","b","a","c"], 
//Total # of possible answers
    tot = answers.length;


function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); //Find the answer choices for each question
    for(var y=0; y<radios.length; y++) //Go to next q while one exists
      if(radios[y].checked) return radios[y].value; // return the checked value ie the chosen answer
}


function checkAnswer( radioName ){
	if (radios[y].value === answers[y]) {
		alert("Correct");
	} else {
		var response = document.getElementsByClassName( correctAnswer );
		alert (response);
	}
}

function returnAnswer(){
  alert("Your score is "+ getScore() +"/"+ tot);
  }


// return total score 
function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("answer"+i)===answers[i]) score += 1; // add one when answer is correct
  return score; // Store score in 'getScore'
}

function returnScore(){
  document.getElementById("myresults").innerHTML = "Your score is "+ getScore() +"/"+ tot;
}


