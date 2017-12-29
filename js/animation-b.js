$(document).ready(function(){
   //情侶
   $("#couple").show('slide', {direction: 'down'}, 800 ,function(){
      //背景愛心群
      $("#many-heart").fadeIn(500,function(){
         //花束
         $("#flower").fadeIn(500,function(){
            //背景大愛心(白底心+紅框心)
            $("#center_heart").fadeIn(2000 ,function(){
               //左上白愛心
               $("#white-lheart").fadeIn(300 ,function(){
                  //右上白愛心
                  $("#white-rheart").fadeIn(500 ,function(){
                     //I love you文字
                     $("#love").fadeIn(1000 ,function(){
                        //I love you,too文字
                        $("#lovetoo").fadeIn(800 ,function(){
                           //背景大愛心內側下方兩個愛心
                           $("#crsh-bottom").fadeIn(1000 ,function(){
                              //背景大愛心內側中間兩個愛心
                              $("#crsh-center").fadeIn(1000 ,function(){
                                 //背景大愛心內側上方兩個愛心
                                 $("#crbh").fadeIn(1000 ,function(){
                                    //Happy Valentine's Day文字
                                    $("#word").animate({bottom:225},1000,"easeOutBounce",function(){                                                                                                                                                                                                                 
                                       //花束重複傾斜動作
                                       setInterval(GoSlant,1000);
                                    });            
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      });
   });
  
});
 
   function GoSlant()
   {
      var slantDeg = 5; //傾斜度數
      var nowDeg = $("#deg").val();
      if ( nowDeg=="" || nowDeg=="-" + slantDeg ){ nowDeg=slantDeg; }else{ nowDeg="-" + slantDeg; }
      $("#deg").val(nowDeg); 
      $("#flower").css("transform","rotate(" + nowDeg + "deg)");
      $("#flower").css("transform-origin","bottom");  
   }