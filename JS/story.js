$(document).ready(function(){

	$('.nounDrag').draggable();
   $('.verbDrag').draggable();
   $('.dragA').draggable();
   $('.dragB').draggable();
	$('.nounTar').droppable({
      drop: function( event, ui ) {
         $(this)
         .addClass( "dropped" )
         .find( "p" )
         .html( "Right" );
      }
   });
   $('.verbTar').droppable({
      drop: function( event, ui ) {
         $(this)
         .addClass( "dropped" )
         .find( "p" )
         .html( "Wrong" );
      }
   });
});

