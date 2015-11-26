$(document).ready(function(){
	$("button").click(function(){
			domain = document.domain
			if (domain=='127.0.0.1' || domain === 'localhost'){
				domain = domain + ':8080';
			}
			window.location.href='http://' + domain + '/first';
});
});