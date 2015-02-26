ar graph = {};


$(function(){
	graph.data = [3, 45, 67, 32, 54, 4, 87.3, 40, 57, 49, 100]
	graph.max();
	
});

graph.return = function(){
	for (var i= 0; i < graph.data.length; i++) 	{
		graph.dataReturn = graph.data[i] / graph.maxVal;
		graph.display(graph.dataReturn);
	};
	
}	

graph.max = function(){
	graph.maxVal = Math.max.apply(Math, graph.data)
	console.log(Math.max.apply(Math, graph.data));
}

graph.display = function(data){
	rad = data * 250
	var circle = $('<div class="circle">').css({width: rad, height: rad})
	console.log(data);
	console.log(circle);
	console.log('I am rad ' + rad);
	
	$('.chart').append(circle);
	

}






