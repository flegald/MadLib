

$(document).ready(function(){
	$('.nounDrag').draggable();
   $('.nounTar').droppable({accept: '.nounDrag',
            drop: function( event, ui ) {
               $(this)
               .addClass( "dropped" )
               .find( "p" )
               .html( event.relatedTarget.text() );
            
            $(document).ready(function(){
               $('.nounDrag').addClass('hidden');
            });
         }

});
});   

