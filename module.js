var testModule = (function(){
	
	var dVar = 30;
	
	var init = function(newDVar){
		
		if (typeof newDVar != 'undefined'){
			dVar = newDVar;
		}
		
		alert(dVar);
		
		}
	
	return {
		init: init
	}
})();