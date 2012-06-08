var testModule = (function(){
	
	var defaults = {title: 'Ready'};
	var model = null;
	var init = function(options){
		
		initOptions = $.extend(defaults, options);		
		alert(initOptions['title']);
		model = new HomeModel();
	};
	
	var PhotoDataServer = function () {
		this.getPhotos = function(seconds, userID, callback){
			$.ajax('http://176.34.237.117/json/photo_groups',{
				data: {
					'user_id' : userID,
					'time' : seconds
					},
				cache: false,
				dataType: 'json',
				timeout: 30000,
				success: function(json){callback(json);},
				error: function(json){console.log('Network Error!');}
			}); // end ajax
		};
	};
	
	var HomeModel = function(){
	
		var data;
		
		this.initModel = function(json){
			data = json;
			$('body').trigger('init');
		};
		
		this.getData = function(){
			return data;
		};
		
	};
	
	var HomeView = function(){
	
		$('div#main').append('<button id="getdata">Get Data</button>');
		$('button#getdata').on('init', function(){
			$(this).text('Done');
		});
	};
	
	var HomeController = function(){
		
		$('button#getdata').click(function(){
			PhotoDataServer.getPhotos(30000,2,HomeModel.initModel);
		});
	};
		
	return {
		init: init,
		view: HomeView,
		controller: HomeController
	}
})();