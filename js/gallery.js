jQuery(document).ready(function($) {

	var selectors = $('.owl-carousel');
	selectors.each(function(index, el) {
		var car = $(this).owlCarousel({

			items : 4,
			navigation : false,
			pagination : false,
			autoPlay : true,
			stopOnHover : true,
			rewindSpeed : 1500,
			beforeInit: function(event) {
				console.log('beforeInit : ', event);
			},
			afterInit: function(event) {
				console.log('afterInit : ', event);
			}
		});
	});
  
  /*$('.owl-carousel').owlCarousel({

    items : 4,
	navigation : false,
	pagination : false,
	autoPlay : true,
	stopOnHover : true,
	rewindSpeed : 1500,
  });*/

  $('.fancybox').fancybox();

});