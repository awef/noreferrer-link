$(function(){
	$("#source").hide();
	$("#imgs > div").live("click", function(){
		$("#source").show().text($(this).html());
	});
});

function add(fn){
	fn($("<div>").appendTo("#imgs")[0]);
}

add(function(cont){
	var paper = Raphael(cont, 100, 100);
	
	paper
		.rect(0, 0, 100, 100, 10)
		.attr({
			fill : "270-#eee-#ddd",
			stroke : null
		});
	
	paper
		.text(50, 50, "noreferrer")
		.attr({
			fill : "#333",
			"font-family" : "inconsolata",
			"font-size" : 18
		});
});
