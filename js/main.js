
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
$( ".secblue" ).click(function() {
 $( "#aircrafthall" ).slideToggle( "slow" );
});



// Show hide Maps
$( ".secblue" ).click(function() {
  $( "#mgmap" ).slideToggle( "slow" );
});

// Show hide Maps
$( ".secgreen" ).click(function() {
  $( "#glmap" ).slideToggle( "slow" );
});

// Show hide Maps
$( ".secpurple" ).click(function() {
  $( "#ufmap" ).slideToggle( "slow" );
});

// Show hide Maps
$( ".secorange" ).click(function() {
  $( "#llmap" ).slideToggle( "slow" );
});


// http://codepen.io/robwakeman/pen/zxjGWX

var answers = ["a","b","a","b","a","b","a","b","c"], 
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnAnswer(){
  alert("Your score is "+ getScore() +"/"+ tot);
  }

function returnScore(){
  document.getElementById("myresults").innerHTML = "Your score is "+ getScore() +"/"+ tot;
}




