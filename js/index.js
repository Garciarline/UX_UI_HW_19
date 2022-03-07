console.log("your page is loading")

$(button).on('click',function (){
    $('#light')
    console.log("hey look a click occured")
});
$(document).ready(function(){
    $("button").click(function(){
      $("div").animate({left: '250px'});
    });
  });


<button>Start Animation</button>