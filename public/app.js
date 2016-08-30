$(document).ready(function() {
	var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
	if( iOS ) {
	    var background_videos = document.querySelectorAll('.video-bg video');
	    for( i=0; i<background_videos.length; i++ ) {
	        background_videos[i].parentNode.removeChild(background_videos[i]);
	    }
	}
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  $('select').material_select();

  $('#avec').change(function(){
    if($(this).prop("checked")) {
      $('#avec-ilmo').show();
      $('#ilmanavec').prop( 'checked', false);
      $('#avec-rekry').hide();
    } else {
      $('#avec-ilmo').hide();
    }
  });
  $('#ilmanavec').change(function(){
    if($(this).prop('checked')) {
      $('#avec-rekry').show();
      $('#avec').prop('checked', false);
      $('#avec-ilmo').hide();
    } else {
      $('#avec-rekry').hide();
    }
  });
});

$('#button').submit(function() {
    // Coding
    $('#ilmo').modal('toggle');
    return false;
});
