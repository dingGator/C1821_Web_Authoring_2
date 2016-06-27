<?php
print '
<!DOCTYPE html>
<html lang="en">
<head>
<title>Form Validation</title>
<link rel="stylesheet" type="text/css" href="formValid.css">
</head>
	<body>
		<div class="wrapper">
';

print '<h1 class="centerMe">Thank you '.$_POST['Fname'].' for your order of samoflanges.</h1> <h2>Please confirm your information before we process your order.</h2>';

print 'Your full name is '.$_POST['Fname'].' '.$_POST['Lname'].'<br><br>';

print 'You are located at: <br><br>'.$_POST['mailAddie'].'<br>'.$_POST['City'].', '.$_POST['State'].' '.$_POST['Zip'];

print '<br><br>You can be reached by email at '.$_POST['emailAddie'].' or phone at '.$_POST['phoneNum'].'<br>';

$tmp = $_POST['numSamoflanges'];

if($tmp==1){
	print '<h3>Your order of 1 samoflange will arrive in the next 2 to 6 weeks.</h3>';
}else{
	print '<h3>Your order of '.$tmp.' samoflanges will arrive in the next 2 to 6 weeks.</h3>';
}

$tmp = $_POST['contactMe'];
if(strcmp($tmp,"no")==0){
	print "As per your request, we will not contact you in the future.";
}
else{
	print 'We will be contacting you in the future as per your request '.$tmp;
}

print '
		</div>
	</body>
</html>';

?>