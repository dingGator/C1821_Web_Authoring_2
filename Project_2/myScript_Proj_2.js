
var errorFoundState = false;
var errorFoundZip = false;
var errorFoundFname = false;
var errorFoundLname = false;

var errorFoundEmail = false;
var errorFoundAddress = false;
var errorFoundCity = false;
var errorFoundArrrivalDate = false;
var errorFoundDepartDate = false;
var errorFoundSelectAmenity = false;
var errorFoundAmenityNum = false;
var errorFoundContactMe = false;


function check_validations() {

    if ( errorFoundSelectAmenity|| errorFoundAmenityNum||errorFoundFname || errorFoundLname ||  errorFoundEmail ||errorFoundAddress||errorFoundCity ||errorFoundState || errorFoundZip ||errorFoundArrivalDate||errorFoundDepartDate || errorFoundContactMe) {
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


function validateZip() {
    var a = document.orderForm.Zip.value.trim();
  //  var zipCodePattern5 = /^\d{5}$/;
    var zipCodePattern9 = /^\d{5}$|^\d{5}-\d{4}$/
    if (zipCodePattern9.test(a)) {
        errorFoundZip = false;
        //alert("Good Zip code entered. ");
    } else {
        errorFoundZip = true;
        alert("The input for Zip code is bad, please enter in a 5 or 5+4 digit number");
    }
}


// validate Telephone number
function validatePhoneNumber() {
    var a = document.orderForm.phoneNum.value.trim();

    var phoneNum10 = /^\d{3}-\d{3}-\d{4}$|/
    if (phoneNum10.test(a)) {
        errorFoundPhone = false;
        //alert("Good Zip code entered. ");
    } else {
        errorFoundPhone = true;
        alert("The input for Phone Number is bad, please enter in a XXX+XXX+XXXX number");
    }
}

//validate Dates
function validateArivalDate() {
    var a = document.orderForm.arrival_Date.value.trim();

// regular expression to match required date format
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if(form.arrival_Date.value != '') {
      if(regs = form.arrival_Date.value.match(re)) {
        // day value between 1 and 31
        if(regs[1] < 1 || regs[1] > 31) {
          alert("Invalid value for day: " + regs[1]);
          form.arrival_Date.focus();
          errorFoundArrrivalDate = true;
        }
        // month value between 1 and 12
        if(regs[2] < 1 || regs[2] > 12) {
          alert("Invalid value for month: " + regs[2]);
          form.arrival_Date.focus();
          errorFoundArrrivalDate = true;
        }
        // year value between future year
        if( regs[3] > (new Date()).getFullYear()) {
          alert("Invalid value for year: " + regs[3] + " - must be in the Future " + (new Date()).getFullYear());
          form.arrival_Date.focus();
          errorFoundArrrivalDate = true;

}}}}

function validateDepartDate()
{
    var a = document.orderForm.depart_Date.value.trim();

// regular expression to match required date format
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if(form.depart_Date.value != '') {
      if(regs = form.depart_Date.value.match(re)) {
        // day value between 1 and 31
        if(regs[1] < 1 || regs[1] > 31) {
          alert("Invalid value for day: " + regs[1]);
          form.depart_Date.focus();
          errorFoundDepartDate = true;
        }
        // month value between 1 and 12
        if(regs[2] < 1 || regs[2] > 12) {
          alert("Invalid value for month: " + regs[2]);
          form.depart_Date.focus();
          errorFoundDepartDate = true;
        }
        // year value between 1902 and 2016
        if( regs[3] > (new Date()).getFullYear()) {
          alert("Invalid value for year: " + regs[3] + " - must be in the Future " + (new Date()).getFullYear());
          form.depart_Date.focus();
          errorFoundDepartDate = true;

}}}}
//validate amenity
function validateSelectAmenity()
{
    // var a = document.orderForm.select_Amenity.value.trim();
 if((document.orderForm.select_Amenity)[0].value == 'blank')
{
alert("Please select an Amenity to Reserve ");
errorFoundSelectAmenity = true;
}
}
// validate contactMe
function validateContactMe()
{   len = document.orderForm.contactMe.length;
    for (i =0;i<len;i++) {


     if (document.orderForm.contactMe.checked){

        chosen = document.orderForm.contactMe[i].value}

}
if (chosen ==""){
    alert("Please select a way to contact you.")
    errorFoundContactMe = true;
}
}

function validateAmenityNum()
{
    var num = document.orderForm.amenity_Num.value.trim();
    if (num == 0||num==null||num>10)
    {
        errorFoundAmenityNum = true;
    }
}
