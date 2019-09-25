function submit(){
	data=$("#data").val()
	console.log(data)
	$("#data").val("")
}

$(document).keydown(function(event){
    if(event.keyCode==13){
       $("#submit").click();
    }
})
