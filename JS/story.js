$(document).ready(function(){
	$('.collider').draggable();
});


$(document).ready(function(){
if( $('.collider').collision('.obstacle', function(){
console.log('ok');
}));
});