'use strict';

$('#login').click(showMessage);

function showMessage() {
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var formal = $("input[name='formal']").is(':checked');
  var loginGrtr = G$(firstName, lastName);
  var lang = $('#lang').val();

  // $('#logindiv').hide();

  loginGrtr.setLang(lang).HTMLGreeting('#greeting', formal).log();
};