
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



// Add chevron to map item when toggle is open.
$(".map").click(function(e) {

        if( $(this).hasClass("open") ) {
            $(this).removeClass("open").addClass("closed");
        } else {
            // if other maps are open remove open class and add closed
            $(this).siblings().removeClass("open").addClass("closed"); 
            $(this).removeClass("closed").addClass("open");
        }

});
// Add chevron to discovery section item when toggle is open.
$(".disc-list").click(function(e) {

        if( $(this).hasClass("open") ) {
            $(this).removeClass("open").addClass("closed");
        } else {
            // if other maps are open remove open class and add closed
            $(this).siblings().removeClass("open").addClass("closed"); 
            $(this).removeClass("closed").addClass("open");
        }

});



// http://codepen.io/robwakeman/pen/zxjGWX


//Put answers in an array and store in 'Answers' variable.
var answers = ["a","a","b","c","b","a","b","a","c"];
//Total # of possible answers
    total = answers.length;
 var score = 0;
 var answerPara = [
 		"Wilfred Arthur was later awarded the Distinguished Service Order for his bravery. Soon after, “Polly” was retired from service and ended up at an RAAF school at Flemington racecourse.",
 		"The Middle East campaign began in 1916 with Australian troops taking part in the defence of the Suez Canal and the allied re-conquest of the Sinai Desert.",
 		"After the bombing, the Australian government expanded the army and air force and called for an overhaul of economic, domestic, and industrial policies to give the government special authority to mount a total war effort at home.",
 		"Born 26 October 1863 at Stogursey, Sumerset, in England. He was the first soldier in the Australian services to be awarded the Victoria Cross.  He later served in the Australian Federal Government, and also as Minister of Defence and several other portfolios.",
 		"The Avro Lancaster B1, known with affection as 'G for George', flew ninety operational missions over Germany and occupied Europe during the height of the bomber offensive. From the time it was built in 1942 until its retirement from active service in 1944, the bomber was flown by No. 460 Squadron RAAF (when in Britain).",
 		"The windows represent the personal, social and fighting qualities of Australians. Each of the fifteen panels features a figure in the uniform and equipment of the First World War, and typifies one of the quintessential qualities displayed by Australians in war.",
 		"First Gulf War (Australian forces were deployed in the First Gulf War under the auspices of the UN. HMAS Brisbane served in the Vietnam War, the First Gulf War and later with the UN Multinational Interception Force",
 		"Two men, above all others, moulded the Memorial: Charles Bean, Australia's Official Historian of the First World War, and John Treloar, the Director of the Memorial between 1920 and 1952.",
 		"Private John Simpson Kirkpatrick John Simpson Kirkpatrick was born in Britain but later moved to Australia. Simpson became famous for his work as a stretcher-bearer. Using one of the donkeys brought in for carrying water, he transported wounded men day and night from the fighting in Monash Valley to the beach on Anzac Cove."
 		];
    

//Create a function to store the users answer choice input (correct or not)
function getCheckedValue( question, radioName ){
 	var radios = document.getElementsByName( radioName ); //Find the answer choices for each question
 	var checkedValue;
    for(var y=0; y<radios.length; y++) //Loop through answers to find checked answer
      if(radios[y].checked) checkedValue = radios[y].value;  // store the checked value ie the chosen answer/input

// display answer and if correct or not (Use SweetAlert)
			if (checkedValue === answers[question]) {
				swal({   title: "CORRECT!",   
						 text: answerPara[question],   	
						 imageUrl: "icons/correct.png", 
						 customClass: "alert-correct", 
						 confirmButtonText: "CHOOSE YOUR NEXT MISSION >"
						}).then(function(isConfirm) {
							
							
							//add JQuery here. Use dom to find element to hide. Use Q index
							   $('.section').click(function(event){	
								  $(this).hide();
								  })
							});

			} else {
				swal({   title: "WRONG ANSWER!",   
						 text: answerPara[question],  	
						 imageUrl: "icons/incorrect.png", 
						 customClass: "alert-incorrect",
						 confirmButtonText: "CHOOSE YOUR NEXT MISSION >"
						});
				
			}
			}









//========================This section is to display at the very end when all 9 questions have been answered=================//




// return total score 
//function getScore(){
//  var score = 0;
//  for (var i=0; i<total; i++)
//    if(getCheckedValue("answer"+i)===answers[i]) score += 1; // add one when answer is correct
//  return score; // Store score in 'getScore'
//}

//function returnScore(){
// document.getElementByClass("myResults").innerHTML = "Your score is "+ score() +"/"+ total;
//}



