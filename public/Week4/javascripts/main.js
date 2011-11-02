$(document).ready(function(){
		$("button.submit_post").click(function(){
		//next two lines are for testing purposes only
		$("#blank_post textarea").clone().prependTo("#newpostbox")
		$("#blank_post input").clone().prependTo("#newpostbox")
		$("#testpostbox").clone().prependTo("#newpostbox")
		//work in progress below - need to learn how to clone values of fields
      	var value = $(input).val();
      	$(value).clone().prependTo("#testpostbox h1")
		});
});
	