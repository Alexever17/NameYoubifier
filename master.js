// Eventlistener for the enter key
document.getElementById("inputfield").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btn").click();
    }
});

// This function looks if a name was written. If the input wasn't changed, it
// will guide the user to the input. It will also clear the field by the
// error message from textfilter()
function textcheck() {
  var text_element = document.getElementById('inputfield');
  var text_value = document.getElementById('inputfield').value;

  if (text_value == "Your name goes here!") {
    text_element.value = "";
    text_element.focus();
    return
  }
  if (text_value == "Please use only text") {
    text_element.value = "";
    text_element.focus();
    return
  }
  textfilter()
}

// This functions searches for any non alphabetical characters in the input and
// returns an error if so.
function textfilter() {
  var text_value = document.getElementById('inputfield').value;

  if (new RegExp(/[^A-z]/).test(text_value)) {
    document.getElementById('inputfield').value = "Please use only text";
    return
  }
  id_creator()
}

// This function makes the string lowercase, than transforms the value of the text
// to a number, devides it by pi and takes the fourth digit of it. That way an id
// number is created to always have the same id number for the same name.
function id_creator() {
  var string = document.getElementById("inputfield").value.toLowerCase();
  var string_length = string.length;
  var name_id = 0;

  for (i = 0; i < string_length; i++) {
    name_id = name_id + string.charCodeAt(i);
  }
  name_id = name_id / 3.14159265358 * 10000;
  name_id = Math.floor((name_id - Math.floor(name_id))*100);
  framechanger(name_id)
}

// This function changes the source of the iframe to the one corresponding with
// the id from the name and makes the video visible.
function framechanger(name_id) {
  document.getElementById('frame').src = links[name_id];
  document.getElementById('frame').style.display = 'block';
  document.getElementById('bottom').style.display = 'block';
}

// This array is on the bottom because it will be quite long
var links = [
"https://www.youtube.com/embed/jy-uToZIfJs",
"https://www.youtube.com/embed/IPFMpihWxck",
"https://www.youtube.com/embed/CnT8jmMgKFA",
"https://www.youtube.com/embed/wVatyQFYx6o",
"https://www.youtube.com/embed/R319qcVyIOA",
"https://www.youtube.com/embed/azvzKhX4hL8",
"https://www.youtube.com/embed/IfGcldZInfM",
"https://www.youtube.com/embed/8LWjCJWImIQ",
"https://www.youtube.com/embed/7lgI7lKKfBo",
"https://www.youtube.com/embed/yjgQ_TmvhQw",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
]
