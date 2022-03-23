var form = document.getElementById('form');
var firstName = document.getElementById('prenume');
var lastName = document.getElementById('nume');
var genderF = document.getElementById('female');
var genderM = document.getElementById('male');
var labelGender = document.getElementsByTagName('label');
var message = document.getElementById('mesaj');
var myBtn = document.getElementById('submit');
var banner = document.getElementById('banner');
var retfirstName = false;
var retlastName = false;
var retGender = false;
var retMessage = false;
var letters = /^[A-Za-z]+$/;
var bannerOn = false;

myBtn.addEventListener('click', checkValidInputs);

function checkValidInputs(){
    //verifyPrenume
    if (firstName.value.match(letters)){
        if (firstName.value.length > 0 && firstName.value.length < 15){
            firstName.style.border='5px solid green';
            retfirstName = true;
        }
        else if (firstName.value.length > 15){
            firstName.style.border='5px solid red';
            retfirstName = false;
        }
    }
    else {
        firstName.style.border='5px solid red';
        retfirstName = false;
    }

    //verifyNume
    if (lastName.value.match(letters)){
        if (lastName.value.length > 0 && lastName.value.length < 15){
            lastName.style.border='5px solid green';
            retlastName = true;
        }
        else if (lastName.value.length > 15){
            lastName.style.border='5px solid red';
            retlastName = false;
        }
    }
    else {
        lastName.style.border='5px solid red';
        retlastName = false;
    }

    //verifyGender
    if (genderF.checked || genderM.checked){
       retGender = true;
    }
    else{
        labelGender[0].style.color = 'red';
        labelGender[1].style.color = 'red';
        retGender = false;
    }

    //verifyMessage
    if (message.value !== "") {
        message.style.border = '5px solid green';
        retMessage = true;
    }
    else{
        message.style.border = '5px solid red';
        retMessage = false;
    }
    
    //submitValidation
    if( retfirstName && retlastName && retGender && retMessage){
        bannerOn = true;
        return true;
    }
    else{
        return false;
    }
}

//FUNCTIE PRENUME
firstName.addEventListener('input', verifyPrenume);

function verifyPrenume(e){  
    firstNameValue = e.target.value;
    console.log(firstNameValue);
    
    if (firstNameValue.match(letters)){
        if (firstNameValue.length > 0 && firstNameValue.length < 15){
            firstName.style.border='5px solid green';
        }
        else if (firstNameValue.length > 15){
            firstName.style.border='5px solid red';
        }
    }
    else {
        firstName.style.border='5px solid red';
    }
}

//FUNCTIE NUME
lastName.addEventListener('input', verifyNume);

function verifyNume(e){  
    lastNameValue = e.target.value;
    console.log(lastNameValue);

    if (lastNameValue.match(letters)){
        if (lastNameValue.length > 0 && lastNameValue.length < 15){
            lastName.style.border='5px solid green';
        }
        else if (lastNameValue.length > 15){
            lastName.style.border='5px solid red';
        }
    }
    else {
        lastName.style.border='5px solid red';
    }
}

//FUNCTIE GENDER
genderF.addEventListener('click', checkGender);
genderM.addEventListener('click', checkGender);

function checkGender(){
    console.log(genderF.checked);
    if (genderF.checked || genderM.checked ){
        labelGender[0].style.color = 'rgb(78, 73, 73)';
        labelGender[1].style.color = 'rgb(78, 73, 73)';
    }
    else{
        labelGender[0].style.color = 'red';
        labelGender[1].style.color = 'red';
    }
}

//FUNCTIE MESSAGE
message.addEventListener('input', checkMessage);

function checkMessage() {
    console.log(message.value);
    if (message.value !== "") {
        message.style.border = '5px solid green';
    }
    else{
        message.style.border = '5px solid red';
    }
}

//SELECT THE FIRST NAME
myBtn.addEventListener('click', select);
function select() {
    //debugger; //folosind debugger-ul se vede bannerul;
    var x = document.getElementById("prenume").value;
    document.getElementById("banner").innerHTML = x;
    if (bannerOn){
        banner.style.background = 'rgb(131, 202, 131)';
        banner.innerHTML = 'Thank you for contacting us, ' + x + '.'; 
    }
    else{
        banner.style.background = 'white';
    }
}

// CLOSING BANNER
document.addElementById('close').addEventListener('click', closeBanner);
function closeBanner(){
   banner.style.display = 'none';
}
