


var ListDetailView=Backbone.View.extend({

	tagName:'li',

	className:'singeList', 

	model:ListModel,

	initialize: function() {
	    this.listenTo(this.model, 'change', this.render);
	    this.listenTo(this.model, 'destroy', this.removeItem);
    },

	render:function(){
		$(".null").length>0 && $(".null").remove();
		this.$el.html(this.template(this.model.toJSON())).attr("cid",this.model.cid);
		return this;
	},

	events:{ 
		'click .delete':'deleteList',
		'dblclick .title':'editItem',
		'click .ckDel':'ckDelSelect'
	},

	ckDelSelect:function(){
	 
		$(".listBox input[type='checkbox']:checked").length && $(".ckAll").show() || $(".ckAll").hide();
	},

	deleteList:function(){
		this.model.destroy(); 
	},

	editItem:function(){ 
		var newName=prompt("please input");
		this.model.set("title",newName);
	},


	removeItem:function(){
		 this.$el.fadeOut(function(){
		 	$(this).remove();
		 	$(".listBox li").length <=0 && $('.listBox').append('<li class="null">暂无数据</li>');
		 });
	},

	template: _.template('<input class="ckDel" type="checkbox" />  <span class="title"><%=title%></span><span class="delete">X</span>') 


});