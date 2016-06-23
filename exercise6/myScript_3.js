var errorFoundURL = false;
var errorFoundState = false;
var errorFoundZip = false;
var errorFoundFname = false;
var errorFoundLname = false;
var errorFoundSamoCnt = false;
var errorFoundEmail = false;
var errorFoundAddress = false;
var errorFoundCity = false;

function check_validations() {

    if (errorFoundState || errorFoundZip || errorFoundSamoCnt || errorFoundFname || errorFoundLname || errorFoundCity || errorFoundAddress) {
        alert("Please check each field for errors.");
        return false;
    }
    else {
        return true;
    }
}

function validateFname() {
    var a = document.orderForm.Fname.value.trim();
    if (a == null || a == "") {
        errorFoundFname = true;
        alert("The First Name field cannot be empty.");
    } else {
        errorFoundFname = false;
    }
}

function validateLname() {
    var a = document.orderForm.Lname.value.trim();
    if (a == null || a == "") {
        errorFoundLname = true;
        alert("The Last Name field cannot be empty.");
    } else {
        errorFoundLname = false;
    }
}

function validateAddress() {
    var a = document.orderForm.mailAddie.value.trim();
    if (a == null || a == "") {
        errorFoundAddress = true;
        alert("The Address field cannot be empty.");
    } else {
        errorFoundAddress = false;
    }
}

function validateCity() {
    var a = document.orderForm.City.value.trim();
    if (a == null || a == "") {
        errorFoundCity = true;
        alert("The City field cannot be empty.");
    } else {
        errorFoundCity = false;
    }
}


function validateZip() {
    var a = document.orderForm.Zip.value.trim();
    var zipCodePattern = /^\d{5}$/;
    if (zipCodePattern.test(a)) {
        errorFoundZip = false;
        //alert("Good Zip code entered. ");
    } else {
        errorFoundZip = true;
        alert("The input for Zip code is bad, please enter in a 5 digit number");
    }
}

function validateNumSamoflanges() {
    var b = document.orderForm.numSamoflanges.value;

    if (isNaN(b) || b < 0 || b > 100) {
        errorFoundSamoCnt = true;
        alert(" Number of Samoflanges is NOT between 0 -100 range.");

    } else {
        errorFoundSamoCnt = false
        //alert("  Number of Samoflanges is between 0-100 range.  Good Number of Samoflanges")
    }


}
function validateEmail() {
    var c = document.orderForm.emailAddie.value.trim();
    var emailAddieMatch = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (emailAddieMatch.test(c)) {
        errorFoundEmail = false;
        //alert("Good Email entered ");
    } else {
        errorFoundEmail = true;
        alert(" Email entered is not valid");
    }
}
// http://cnn.com
function validateURL() {
    var myURL = document.orderForm.urlAddie.value.trim();
    //var urlAddieMatch = /^((http|https)([:])([/])([/])|)([a-z0-9_-])(.edu|.com|.net)$/;
    var urlAddieMatch = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    if (urlAddieMatch.test(myURL)) {
        errorFoundURL = false;
        //alert("Good URL entered ");
    } else {
        errorFoundURL = true;
        alert("URL entered is not valid");
    }
}

function validateState() {
    var e = document.orderForm.State.value.trim();
    stateMatch = "wa|or|ca|ak|nv|id|ut|az|hi|mt|wy|" +

        "co|nm|nd|sd|ne|ks|ok|tx|mn|ia|mo|" +

        "ar|la|wi|il|ms|mi|in|ky|tn|al|fl|" +

        "ga|sc|nc|oh|wv|va|pa|ny|vt|me|nh|" +

        "ma|ri|ct|nj|de|md|dc";

    if (e == null || e == "") {
        errorFoundState = true;
        alert(" Invalid State abbreviations: cannot be empty");
    }
    else if (stateMatch.indexOf(e.toLowerCase()) > -1) {
        errorFoundState = false;
        //alert(" Valid State Abbreviations");
    } else {
        errorFoundState = true;
        alert(" Invalid State abbreviations");
    }
}

