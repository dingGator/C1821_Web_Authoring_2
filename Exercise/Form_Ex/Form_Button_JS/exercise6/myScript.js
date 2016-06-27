
function validateZip()
{
	var a = document.orderForm.Zip.value;
	var zipCodePattern =/^\d{5}$/;
	if(zipCodePattern.test(a))
	{
		alert ("Good Zip code entered. ");
	}else{
	alert("The input for Zip code is bad, please enter in a 5 digit number");}
}
function validateNumSamoflanges()
{
	var b = document.orderForm.numSamoflanges.value;

if(isNaN(b) || (b < 0 ||b > 100))

{

alert(" Number of Samoflanges is NOT between 0 -100 range.");

}else{
	alert ("  Number of Samoflanges is between 0-100 range.  Good Number of Samoflanges")
}


}
function validateEmail()
{	var c = document.orderForm.emailAddie.value;
	var emailAddieMatch = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  	if(emailAddieMatch.test(c))
	{
		alert ("Good Email entered ");
	}else{
	alert(" Email entered is not valid");}
}

function validateURL()
{
	var d = document.orderForm.urlAddie.value;
	var urlAddieMatch =/^((http|https)([:])([/])([/])|)([a-z0-9_-])(.edu|.com|.net)$/;
	if(urlAddieMatch.test(d))
	{
		alert ("Good URL entered ");
	}else{
	alert(" URL entered is not valid");}
}

function validateState() {

	e = "wa|or|ca|ak|nv|id|ut|az|hi|mt|wy" +

				"co|nm|nd|sd|ne|ks|ok|tx|mn|ia|mo" +

				"ar|la|wi|il|ms|mi|in|ky|tn|al|fl" +

				"ga|sc|nc|oh|wv|va|pa|ny|vt|me|nh" +

				"ma|ri|ct|nj|de|md|dc";



	if (e.indexOf(e.toLowerCase() + "|") > -1) {

		alert ( " Valid State Abbreviations");

		}


		alert ( " Invalid State abbreviations");


	}

