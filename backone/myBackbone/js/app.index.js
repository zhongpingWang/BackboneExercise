





var Index=function(){

	 var indexModel=new Backbone.Model({ title:'index',content:'这里是首页'  });
     var view = new this.indexView({model: indexModel});

	 $("#pageContent").html(view.render().el);
}



Index.prototype={ 


	indexView:Backbone.View.extend({

		 tagName:'div',

		 className:'indexBox',

		 initialize:function(){
		 
		 	  // this.listenTo(this.model, 'change', this.render);
		 },

		 render:function(){
		 	  this.$el.html(this.template(this.model.toJSON()));
		 	  return this;
		 },

		 events:{ click:'clickMe' },

		 clickMe:function(){

		 },

		template: _.template('<div class="title"><%=title%></div><div class="content"><%=content%></div>') 

	})

     
   

};




 