

var type="my-backbone-fast",Lists;


var Listsd=Backbone.Collection.extend({

   		model:ListModel,

   		localStorage: null,

   		initialize:function(){
   			this.localStorage=new Backbone.LocalStorage(type);
   		},



   		sya:function(){

   		} 


   });


var listView=Backbone.View.extend({

     tagName:'div',

     className:'listViewBox',

     events:{
      'click .adds':"addList",
      'click .ckAll':'cleanAll'

  	},

  	cleanAll:function(event){
  		 
  		$(".listBox input[type='checkbox']:checked").each(function(item){
  			var cid=$(this).parent().attr("cid");

  			$.each(Lists.models,function(){
  				if (this.cid==cid) {
  					this.destroy();
  				};
  			}); 
  			 
  		});
  	},

     addList:function(){
     	var name=prompt("请输入名称");
     	Lists.create({title:name});
     },


     initialize: function() { 
     	Lists=new Listsd();
	    this.listenTo(Lists, 'add', this.addOne);
	    //this.listenTo(Lists, 'reset', this.addAll);
	    this.$el.html(new NavView().render().$el);
        this.$el.append('<div class="listContent">  <button class="adds">add</button> <button class="ckAll">清除选中</button> <ul class="listBox"><li class="null">暂无数据</li></ul></div>');
		$("#pageContent").html(this.$el);
		//获取数据
		Lists.fetch();
    },

    

    addOne:function(model){
    	var view=new ListDetailView({model:model});
    	this.$el.find('.listBox').append(view.render().el);
    } 

}); 
 