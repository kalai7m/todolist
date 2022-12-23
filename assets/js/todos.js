//Check off todo while clicking
//$("li").click(function() {
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//delete a todo
//$("span").click(function(event){
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//add a todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"+todoText+"</li>");
	}
});
//toggle input text
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});