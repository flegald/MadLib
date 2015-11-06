

$(document).ready(function(){
	$('.nounDrag').draggable();
	$('.nounTar').droppable({
            drop: function( event, ui ) {
               $(this)
               .addClass( "dropped" )
               .find( "p" )
               .html( "Right" );
            }
         })


$(document).ready(function(){
	$('.verbDrag').draggable();
	$('.nounTar').droppable({
            drop: function( event, ui ) {
               $(this)
               .addClass( "dropped" )
               .find( "p" )
               .html( "Wrong" );
            }
         })
})

});