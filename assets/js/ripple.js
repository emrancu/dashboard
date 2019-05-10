(function (window, $) {
  
  $(function() {
    
    
    $('.ripple').on('click', function (event) {
      //event.preventDefault();
      
      var $div = $('<span/>'),
           RippleOffset = $(this).offset(),
      		 PositionX = event.pageX - RippleOffset.left,
      		PositionY = event.pageY - RippleOffset.top;
      
$(this).css('overflow','hidden');
      
      $div.addClass('ripple-effect'); 
      var $ripple = $(".ripple-effect");
       
     var target=$(this);
    
        $div.css({
          top: PositionY - ($(this).height()/2),
          left: PositionX - ($(this).height()/2),
          background: $(this).data("ripple-color")
        }).appendTo($(this));  

      window.setTimeout(function(){

    	  $div.fadeOut(500,function(){

    		   $div.remove();
    		  target.css('overflow','visible');
      
    	  });

      }, 100);
    });
    
  });
  
})(window, jQuery);
