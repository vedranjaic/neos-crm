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