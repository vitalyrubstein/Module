var testModule = (function(){
	
	var dVar = 30;
	
	return {
		init: function(newDVar){
			dVar = newDVar;
			alert(dVar);
			}
	}
})();