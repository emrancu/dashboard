
/*Side nav Dropdown*/

$(".sidenav").on({

    click: function(e) {

 if($(this).next('ul.dropdown-nav').length>0){

  e.preventDefault();

 }     
  var check=$(this).closest('li').find('ul.dropdown-nav');

   if(check.length >=1){
   
 $(".sidenav>ul ul.dropdown-nav").slideUp();
   $(this).closest('li').find('ul.dropdown-nav').slideToggle(500);
   }
  

    }
}, ".menu>li>a.dropNav");





var navToggle=true;

      $(".navbar-brand").on('click',function(){

            $(".main-content").toggleClass('active-mini'); 
            $(".sidenav").toggleClass('active-mini'); 
       
            if(navToggle){
              
              $(this).find('i').removeClass('fa-angle-double-right').addClass('fa-angle-double-left');
              $(".sidenav>ul").removeClass('menu').addClass('mini-nav');
                navToggle=false;

            }else{

            $(this).find('i').removeClass('fa-angle-double-left').addClass('fa-angle-double-right');
            $(".sidenav>ul").removeClass('mini-nav').addClass('menu');
              navToggle=true;
            }


      })