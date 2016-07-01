
var errorFoundSelectAmenity = false;
var errorFoundArrivalDate =false;

var errorFoundDepartDate =false;
    var errorFoundAmenityNum =false;
    var errorFoundFname =false;
    var  errorFoundLname =false;
    var errorFoundEmail =false;
    var errorFoundAddress =false;
    var  errorFoundCity =false;
    var errorFoundState =false;
    var errorFoundZip =false;

    var errorFoundContactMe = false;

    var errorFoundComments = false;


function check_validations()
{
    console.log(" check validations ");
validateFname();

validateLname();
validateEmail();
validateAddress();
validateCity();
validateState();
validateZip();
validatePhoneNumber();
validateArivalDate();
validateDepartDate();
validateSelectAmenity();
validateAmenityNum();
validateContactMe();
validateComments();
    if ( errorFoundSelectAmenity){
        alert("Please check the Select Amenity field for errors.");
        return false;}
    else if ( errorFoundArrivalDate) {
        alert("Please check the Arrival field for errors.");
        return false;}
    else if ( errorFoundDepartDate ) {
        alert("Please check the Departure field for errors.");
        return false;}
    else if ( errorFoundAmenityNum) {
        alert("Please check the Amenity Number field for errors.");
        return false;}
    else if ( errorFoundFname ) {
        alert("Please check the First Name field for errors.");
        return false;}
    else if ( errorFoundLname ) {
        alert("Please check the Last Name field for errors.");
        return false;}
    else if ( errorFoundEmail ) {
        alert("Please check the Email field for errors.");
        return false;}
    else if ( errorFoundAddress) {
        alert("Please check the Address field for errors.");
        return false;}
    else if ( errorFoundCity ) {
        alert("Please check the City field for errors.");
        return false;}
    else if ( errorFoundState ) {
        alert("Please check the State field for errors.");
        return false;}
    else if ( errorFoundZip ) {
        alert("Please check the Zip Code field for errors.");
        return false;}

    else if ( errorFoundContactMe) {
        alert("Please check the Contact Me field for errors.");
        return false;}

    else if ( errorFoundComments ){
     alert("Please check the Comments field for errors.");

        return false;}
    else {
    console.log(" All fields are correct");
         return true;}

}

function validateFname() {
    var a = document.orderForm.Fname.value.trim();
    errorFoundFname = false;
    if (a === null || a === "") {
        errorFoundFname = true;
        alert("The First Name field cannot be empty.");
    } else {
        errorFoundFname = false;
        console.log(" First Name field is good");}

    }


function validateLname() {
    var a = document.orderForm.Lname.value.trim();
    errorFoundLname = false;

    if (a === null || a === "") {
        errorFoundLname = true;
        alert("The Last Name field cannot be empty.");
    } else {
        errorFoundLname = false;
        console.log(" Last Name field is good");}
}

function validateEmail() {
    var c = document.orderForm.emailAddie.value.trim();
    var emailAddieMatch = /^[a-zA-Z0-9.!#$%&â€™*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   ///^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   //\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b
   // /^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
     errorFoundEmail = false;
    if (emailAddieMatch.test(c)) {
        errorFoundEmail = false;
        console.log(" Email field is good");
        //alert("Good Email entered ");
    } else {
        errorFoundEmail = true;
        alert(" Email entered is not valid");
    }
}

function validateAddress() {
    var a = document.orderForm.mailAddie.value.trim();
     errorFoundAddress = false;
    if (a === null || a === "") {
        errorFoundAddress = true;
        alert("The Address field cannot be empty.");
    } else {
        errorFoundAddress = false;
        console.log(" Address field is good");}

}

function validateCity() {
    var a = document.orderForm.City.value.trim();
     errorFoundCity = false;

    if (a === null || a === "") {
        errorFoundCity = true;
        alert("The City field cannot be empty.");
    } else {
        errorFoundCity = false;
        console.log(" City field is good");}

}
function validateState() {
    var e = document.orderForm.State.value.trim();
     errorFoundState = false;
    stateMatch = "wa|or|ca|ak|nv|id|ut|az|hi|mt|wy|" +

        "co|nm|nd|sd|ne|ks|ok|tx|mn|ia|mo|" +

        "ar|la|wi|il|ms|mi|in|ky|tn|al|fl|" +

        "ga|sc|nc|oh|wv|va|pa|ny|vt|me|nh|" +

        "ma|ri|ct|nj|de|md|dc";

    if (e === null || e === "") {
        errorFoundState = true;
        alert(" Invalid State abbreviations: cannot be empty");
    }
    else if (stateMatch.indexOf(e.toLowerCase()) > -1) {
        errorFoundState = false;
        console.log(" State field is good");
        //alert(" Valid State Abbreviations");
    } else {
        errorFoundState = true;
        alert(" Invalid State abbreviations");
    }
}


function validateZip() {
    var a = document.orderForm.Zip.value.trim();
     errorFoundZip = false;
  //  var zipCodePattern5 = /^\d{5}$/;
    var zipCodePattern9 = /^\d{5}$|^\d{5}-\d{4}$/;
    if (zipCodePattern9.test(a)) {
        errorFoundZip = false;
        console.log(" Zip Code field is good");

        //alert("Good Zip code entered. ");
    } else {
        errorFoundZip = true;
        alert("The input for Zip code is bad, please enter in a 5 or 5+4 digit number");
    }
}


// validate Telephone number
function validatePhoneNumber() {
    var a = document.orderForm.phoneNum.value.trim();
     errorFoundPhone = false;
    var phoneNum10 = /^\d{3}-\d{3}-\d{4}$/;
    if (phoneNum10.test(a)) {
        errorFoundPhone = false;
        console.log(" Phone Number field is good");

        //alert("Good Zip code entered. ");
    } else {
        errorFoundPhone = true;
        alert("The input for Phone Number is bad, please enter in a XXX-XXX-XXXX number");
    }
}

//validate Dates
function validateArivalDate() {
    var a = document.orderForm.arrival_Date.value.trim();
 errorFoundArrivalDate = false;
// regular expression to match required date format
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if (a === null || a === "") {
        errorFoundArrivalDate = true;
        alert(" Invalid Arrival Date: cannot be empty");
    }else  {

      if(a.match(re)) {

regs=document.orderForm.arrival_Date.value.match(re);
        // month value between 1 and 12
        if(regs[1] < 1 || regs[1] > 12) {
          alert("Invalid value for month: " + regs[1]);
          document.orderForm.arrival_Date.focus();
          errorFoundArrivalDate = true;
        }
         // day value between 1 and 31
        if(regs[2] < 1 || regs[2] > 31) {
          alert("Invalid value for day: " + regs[2]);
          document.orderForm.arrival_Date.focus();
          errorFoundArrivalDate = true;
        }
        // year value between future year
        if( regs[3] > (new Date()).getFullYear()) {
          alert("Invalid value for year: " + regs[3] + " - must be in the Future " + (new Date()).getFullYear());
          document.orderForm.arrival_Date.focus();
          errorFoundArrivalDate = true;}

console.log("Arrival Date match format");}
console.log(" Arrival Date is not blank ");}
}

function validateDepartDate()
{
    var a = document.orderForm.depart_Date.value.trim();
 errorFoundDepartDate = false;
// regular expression to match required date format

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

     if (a === null || a === "") {
        errorFoundDepartDate = true;
        alert(" Invalid Arrival Date: cannot be empty");
    }else  {

      if(document.orderForm.depart_Date.value.match(re)) {

regs=document.orderForm.depart_Date.value.match(re);        // month value between 1 and 12
        if(regs[1] < 1 || regs[1] > 12) {
          alert("Invalid value for month: " + regs[1]);
          document.orderForm.depart_Date.focus();
          errorFoundDepartDate = true;
        }
                // day value between 1 and 31
        if(regs[2] < 1 || regs[2] > 31) {
          alert("Invalid value for day: " + regs[2]);
          document.orderForm.depart_Date.focus();
          errorFoundDepartDate = true;
        }
        // year value between 1902 and 2016
        if( regs[3] > (new Date()).getFullYear()) {
          alert("Invalid value for year: " + regs[3] + " - must be in the Future " + (new Date()).getFullYear());
          document.orderForm.depart_Date.focus();
          errorFoundDepartDate = true;}
          console.log("Depart Date match format");}
console.log(" Depart Date is not blank ");}}
//validate amenity
function validateSelectAmenity()
{
     var a = document.orderForm.select_Amenity.value.trim();
errorFoundSelectAmenity = false;

 if(a == 'blank')
{
alert("Please select an Amenity to Reserve ");
errorFoundSelectAmenity = true;
}else {
    console.log("Amenity selected");
}

}
function validateAmenityNum()
{
    var num = document.orderForm.amenity_Num.value.trim();
     errorFoundAmenityNum = false;

    if (num === 0||num===null||num>10)
    {
        alert("Amenity number cannot not be blank or 0 or greater than 10.");
        errorFoundAmenityNum = true;
    }else {
console.log(" Amenity Number field is good.");}

}

// validate contactMe
function validateContactMe()
{   len = document.orderForm.contactMe.length;
    errorFoundContactMe = false;

if (len ===0){
    alert("Please select a way to contact you.");
    errorFoundContactMe = true;
} else {
    console.log(" Contact Me field is good");
}

}

function validateComments() {
    var a = document.orderForm.comments.value.trim();
     errorFoundComments = false;

    if (a === null || a === "") {
        errorFoundComments = true;
        alert("The Comments field cannot be empty.");
    } else {
        errorFoundComments = false;
        console.log(" Comments field is good");}
}



$(function(){
    $("#sliderVisual").slider(
    {value:0,min:0, max:10, step:1,
        slide: function(event,ui){
            $("#amenity_Num").val(ui.value + "   reserved ");
        }});

    $("#amenity_Num").val("Please move the slider");
});


// carousel
$(function(){
            var carousel = $('.carousel ul');
            var carouselChild = carousel.find('li');
            var clickCount = 0;

            itemWidth = carousel.find('li:first').width()+1; //Including margin

            //Set Carousel width so it won't wrap
            carousel.width(itemWidth*carouselChild.length);

            //Place the child elements to their original locations.
            refreshChildPosition();

            //Set the event handlers for buttons.
            $('.btnNext').click(function(){
                clickCount++;

                //Animate the slider to left as item width
                carousel.finish().animate({
                    left : '-='+itemWidth
                },300, function(){
                    //Find the first item and append it as the last item.
                    lastItem = carousel.find('li:first');
                    lastItem.remove().appendTo(carousel);
                    lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
                });
            });

            $('.btnPrevious').click(function(){
                clickCount--;
                //Find the first item and append it as the last item.
                lastItem = carousel.find('li:last');
                lastItem.remove().prependTo(carousel);

                lastItem.css('left', itemWidth*clickCount);
                //Animate the slider to right as item width
                carousel.finish().animate({
                    left: '+='+itemWidth
                },300);
            });

            function refreshChildPosition(){
                carouselChild.each(function(){
                    $(this).css('left', itemWidth*carouselChild.index($(this)));
                });
            }

            function refreshChildPositionNext(){
                carouselChild.each(function(){
                    leftVal =  parseInt($(this).css('left'));
                });
            }
        });