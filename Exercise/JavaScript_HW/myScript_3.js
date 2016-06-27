// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
/*

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('emailAddie');
var error = document.querySelector('.error');
var State = document.getElementById('State');
var Zip = document.getElementById('Zip');
var uRL = document.getElementById('urlAddie');


State.addEventListener("keyup", function(event))
 {
  // Each time the user types something, we check if the
  // email field is valid.
  if (State.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);

Zip.addEventListener("keyup",function(event))
{
  // Each time the user types something, we check if the
  // email field is valid.
  if (Zipe.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);


email.addEventListener("keyup", function (event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);
form.addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check
  // if the email field is valid.
  if (!email.validity.valid) {

    // If the field is not valid, we display a custom
    // error message.
    error.innerHTML = "E-mail is invalid.";
    error.className = "error active";
    // And we prevent the form to be sent by canceling the event
    event.preventDefault();
  }
}, false);



*/

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

function validateState()
{
	var e=document.orderForm.State.value;
	stateMatch = "wa|or|ca|ak|nv|id|ut|az|hi|mt|wy" +

				"co|nm|nd|sd|ne|ks|ok|tx|mn|ia|mo" +

				"ar|la|wi|il|ms|mi|in|ky|tn|al|fl" +

				"ga|sc|nc|oh|wv|va|pa|ny|vt|me|nh" +

				"ma|ri|ct|nj|de|md|dc";



	if (stateMatch.indexOf(statMatch.toLowerCase(e) + "|") > -1) {

		alert ( " Valid State Abbreviations");

		}


		alert ( " Invalid State abbreviations");


	}

