// --- [ LOGIN ]
$('.btnLogin').click(function() {
	$('.login-login').removeClass('hidden');
	$('.login-forgot').addClass('hidden');
	$('.login-reset').addClass('hidden');
});
$('.btnLoginForgot').click(function() {
	$('.login-forgot').removeClass('hidden');
	$('.login-login').addClass('hidden');
	$('.login-reset').addClass('hidden');
});
$('.btnLoginReset').click(function() {
	$('.login-reset').removeClass('hidden');
	$('.login-login').addClass('hidden');
	$('.login-forgot').addClass('hidden');
});

// --- [ Table select ]
$('.table-select input').click(function() {
	$(this).closest('tr').toggleClass('active');
});

// --- [ Table select ]
$('#btnAtt01').click(function() {
	$('#selectAtt01').attr('checked', 'checked');
	$('#selectAtt01').closest('tr').toggleClass('active');
});

// --- [ SEARCH ]
$('#search').focus(function() {
	$('.search-results').removeClass('hidden');
});