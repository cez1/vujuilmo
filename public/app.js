$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

$('#button').submit(function() {
    // Coding
    $('#ilmo').modal('toggle');
    return false;
});
