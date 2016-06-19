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

print '<h1 class="centerMe">Thank you '.$_POST['Fname'].' for your reservations of campsites.</h1> <h2>Please confirm your information before we process your order.</h2>';

print 'Your full name is '.$_POST['Fname'].' '.$_POST['Lname'].'<br><br>';

print 'You are located at: '.$_POST['mailAddie'].'<br>'.$_POST['City'].', '.$_POST['State'].' '.$_POST['Zip'];

print '<br><br>You can be reached by email at '.$_POST['emailAddie'].' or phone at '.$_POST['phoneNum'].'<br>';


print '<br><br> Your reservation of '.$_POST['camping_Spaces'].' of '$_POST['reservation_amenities'].' from '.$_POST['arrival_Date'].' to '.$_POST['departure_Date'].'<br>';


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