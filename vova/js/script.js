<script type="text/javascript">
			    	$(window).scroll(function() {
			          if($(this).scrollTop() != 0) {
			          $('.btn-up').fadeIn();
			          } else {
			          $('.btn-up').fadeOut();
			          }
			          });
			          $('.btn-up').click(function() {
			          $('body,html').animate({scrollTop:0},500);
			       });
			        $(window).scroll(function() {
				        if ($(this).scrollTop() > 1){
				        $('.menu_special').addClass("sticky");
				        }
				        else{
				        $('.menu_special').removeClass("sticky");
				        }
				    });
    			</script>