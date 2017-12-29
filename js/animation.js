$(document).ready(function () {
  $(".pic-01").show('slide', {
    direction: 'up' // down up
  }, 0, function () {
    $(".txt-right").fadeIn(2000 ,function(){  
      $(".txt-left").fadeIn(2000 ,function(){  
        $(".pic-01").animate(1000,"easeOutBounce",function(){          
          setInterval(GoSlant,1000);
          $(".top-text-block").fadeIn(2000 ,function(){ 
          });	
        });		
      });
      });
  });
  var snowEffectInterval = jQuery.fn.snow({
    // min size of element (default: 20)
    minSize: 10,
    
    // max size of element (default: 50)
    maxSize: 30,
    
    // flake fall time multiplier (default: 20)
    fallTimeMultiplier: 20, 
    
    // flake fall time difference (default: 10000)
    fallTimeDifference: 10000, 
    
    // interval (miliseconds) between new element spawns (default: 500)
    spawnInterval: 1000, 
    
    // jQuery element to apply snow effect on (should work on any block element) (default: body)
    target: jQuery("body"),
    
    //elements to use in generating snow effect
    elements	: [
    
      // Element #1
      { 
        // html element to be spawned for this element
        html: '<img src="images/pic-02.png">'
      },
      
      // Element #2
      { 
        // html element to be spawned for this element
        html: '<img src="images/pic-03.png">'
      },
            
    ]
  });
});

function GoSlant()
	{
		var slantDeg = 5; //傾斜度數
		var nowDeg = $(".pic-01").val();
		if ( nowDeg=="" || nowDeg=="-" + slantDeg ){ nowDeg=slantDeg; }else{ nowDeg="-" + slantDeg; }
		$(".pic-01").val(nowDeg);	
		$(".pic-01").css("transform","rotate(" + nowDeg + "deg)");
		// $(".pic-01").css("transform-origin","bottom");		
	}
// function () {
//   $(".txt-left").fadeIn(500, function () {      

//   });
// }
// //寫法1  
// $("#crsh-bottom").fadeIn(1000 ,function(){  
//   //callback function內動作
// });
// //寫法2  
// $("#crsh-left,#crsh-right").fadeIn(1000 ,function(){  
//    //callback function內動作
// });
