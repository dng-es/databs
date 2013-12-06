/*!
 * databs  v1.0
 *
 * @name     databs
 * @author   David Noguera Gutierrez
 * @date     2013-11-15
 * @license  Released under the MIT license
 */
(function($) {
	jQuery.fn.databs = function(options) {
	   //Default options
	   var configuration = {
	   		Height : false
	   }
	   jQuery.extend(configuration, options);

	   this.each(function(){
	   		var trigger = $("ul li a", this),
	   			destinations = $("#" + trigger.attr("href")),
	   			that = this;
	   		
	   		//apply styles
	   		$(".databs-content", this).hide().first().show();
	   		$("ul li", this).css({"display":"inline-block","list-style":"none"});
			trigger.first().addClass("databsSelected");

	   		//adapt divs height
	   		if (configuration.adaptHeight!==false){
				$(".databs-content", this).css({"height" : configuration.Height});  			
		   	}

	   		$.each( trigger, function(e){
	   			$(this).click(function(e){
	   				e.preventDefault();
	   				var divShow = $(this).attr("href");

	   				$(".databs-content", that).hide();
	   				$("#" + divShow).show();

	   				trigger.removeClass("databsSelected");
	   				$(this).addClass("databsSelected");
	   			});
	   		});
	   });
	   return this;
	};
})(jQuery);