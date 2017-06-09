"use strict";
$( _ =>{

  $(function() {
    var screenVal =$("input:text");
    
    $("input:button").on("click",function(){
      var eachNumber =$(this).val();
      var currentScreen=screenVal.val();
      currentScreen += eachNumber;
      screenVal.val(currentScreen);
      if($(this).val()=="C"){
        screenVal.val("");
      }
    });

    $("button").click(function(event){
      event.preventDefault();
      screenVal.val(eval(screenVal.val()));
    })
    //Aqui cierra la funcion
  })
  //Aqui cierra el ready
});
