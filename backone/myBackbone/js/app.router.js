
var Route=Backbone.Router.extend();


var Router=Backbone.Router.extend({

	routes:{
		'':'index',
		'company':'company',
		'index':'index',
		'list':'list',
		'concat':'concat',
		'list/:id':'list'		 
	},

	index:function(){
		this.comm();
		$(".navBox .index").addClass('selected');
		new Index();
	},

	company:function(){
		this.comm();
		$(".navBox .company").addClass('selected');
	},

	list:function(){
		this.comm();
		$(".navBox .list").addClass('selected');
		new listView();
	},

	concat:function(){
		this.comm();
		$(".navBox .concat").addClass('selected');
	},

	comm:function(){
		$(".navBox .selected").removeClass('selected');
	}


});

var appRouter=new Router(); 
//开始监听
Backbone.history.start();
 