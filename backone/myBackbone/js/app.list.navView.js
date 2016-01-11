

var NavView=Backbone.View.extend({

	tagName:'div',

	className:'listNav',

	events:{
		'click .fast':'news',
		'click .msg':'msg'
	},

	news:function(){
		$(".listNav .selected").removeClass("selected");
		$(".listNav .fast").addClass("selected");
		type="my-backbone-fast";
		new listView();
	},

	msg:function(){
		$(".listNav .selected").removeClass("selected");
		$(".listNav .msg").addClass("selected");
		type="my-backbone-msg";
		new listView();
	},


	render:function(){

		this.$el.html('<ul><li class="fast">最新消息</li><li class="msg">通知</li></ul>');
		type=="my-backbone-fast" && this.$el.find(".fast").addClass('selected')|| this.$el.find(".msg").addClass('selected');
		return this;

	}

});

