$(document).ready(function(){
  $('.nounDrag').draggable({snap: '.nounTar, .verbTar', snapMode: 'inner'});
  $('.verbDrag').draggable({snap: '.nounTar, .verbTar', snapMode: 'inner'});
  $('.nounTar').droppable({
    drop: function(event, ui) {
      if ((ui.draggable).hasClass('nounDrag')) {
        console.log('yes')
      } else {
        console.log('no')
      }
    }
  });
  $('.verbTar').droppable({
    drop: function(event, ui) {
      if ((ui.draggable).hasClass('verbDrag')) {
        console.log('yes')
      } else {
        console.log('no')
      }
    }
  });
});



