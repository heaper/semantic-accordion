(function($) {

  $.fn.accordion = function(args) {

		var defaults = {header:'h3', content: 'p', panel: 'section', destroy: false};
		var settings = jQuery.extend(defaults,args);


		if(settings.destroy) {

			this.each(function() {
				var container = $(this);
				container.removeClass("accordion");
				
				container.find("a.accordion-link").each(function() {
					$(this).replaceWith(this.childNodes);
				});

				container.find(settings.panel).removeClass("expanded");
				container.find(settings.content).show();

				
			});

			return;
		}


		
		return this.each(function() {
			
	  		var container = $(this);
	  		container.addClass("accordion");

	  		var panels = container.find(settings.panel);

	  		container.find(settings.content).hide();

	  		panels.each( function() {
	  		  var header = $(this).find(settings.header);
	  		  var title = header.text();

	  		  header.wrapInner("<a class=\"accordion-link\" href=\"javascript:void(0);\"></a>");
	  		
	  		});	  		

	  		panels.find(settings.header + " > a").click(function(){
	  			var parent = $(this).parents(settings.panel + ":first");
				  var content = parent.children(settings.content);

	  			if(parent.hasClass("expanded")) {
		            content.slideUp(250);
		            parent.removeClass("expanded");
		        } else {
		            content.slideDown(250);
		            parent.addClass("expanded");
		        }
	  		});                                
	  		
		});
	};

})(jQuery);
