var testModule = (function(){
	
	var defaults = {title: 'Hello'};
	
	var init = function(options){
		
		initOptions = $.extend(defaults, options);		
		alert(initOptions['title']);
		
		}
	
	return {
		init: init
	}
})();