var testModule = (function(){
	
	var defaults = {title: 'Ready'};
	var model;
	var server;
	
	var init = function(options){
		
		initOptions = $.extend(defaults, options);		
		alert(initOptions['title']);
		
		model = new HomeModel;
		server = new PhotoDataServer;
		HomeView();
		HomeController();
		
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
			$(testModule).trigger('initModel');
		};
		
		this.getData = function(){
			return data;
		};
		
	};
	
	var HomeView = function(){
	
		$('div#main').append('<button id="getdata">Get Data</button>');
		$('button#getdata').on('initModel', function(){
			console.log('Clicked');
			$(this).text('Done');
		});
	};
	
	var HomeController = function(){
		
		$('button#getdata').click(function(){
			server.getPhotos(30000,2,model.initModel);
		});
	};
		
	return {
		init: init
	}
})();