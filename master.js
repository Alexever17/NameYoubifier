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
"https://www.youtube.com/embed/ELlnUPLYp9k",
"https://www.youtube.com/embed/yDMuOczqims",
"https://www.youtube.com/embed/U3J1TNuhOTU",
"https://www.youtube.com/embed/u3VHkpdjqps",
"https://www.youtube.com/embed/upxBdZM8xSg",
"https://www.youtube.com/embed/OXt2njbw1-w",
"https://www.youtube.com/embed/7Jf1EM8Z7Ek",
"https://www.youtube.com/embed/LRm9Gj_WniA",
"https://www.youtube.com/embed/3HkWL_ea9Zs",
"https://www.youtube.com/embed/VB3NTS_oxyc",
"https://www.youtube.com/embed/QkobOlDHc4g",
"https://www.youtube.com/embed/d55rle08C5U",
"https://www.youtube.com/embed/7A5bHpCODn0",
"https://www.youtube.com/embed/Gg_yHEka3xQ",
"https://www.youtube.com/embed/HnkMKibwoyM",
"https://www.youtube.com/embed/xuAjHwX6aTA",
"https://www.youtube.com/embed/gYhbQAJFRBk",
"https://www.youtube.com/embed/VbN-SsHpfs0",
"https://www.youtube.com/embed/G4dH73URdiw",
"https://www.youtube.com/embed/mgHHc2t000I",
"https://www.youtube.com/embed/GRS0Vrnwm54",
"https://www.youtube.com/embed/2NGS_SC5lo0",
"https://www.youtube.com/embed/vwO-JQC_8O8",
"https://www.youtube.com/embed/kWp_CglerwQ",
"https://www.youtube.com/embed/5RZXSboUQQ8",
"https://www.youtube.com/embed/MfkSkFzgdeo",
"https://www.youtube.com/embed/qoXzTIZzxfc",
"https://www.youtube.com/embed/0O8RK97W_I4",
"https://www.youtube.com/embed/XYIh4oqouqw",
"https://www.youtube.com/embed/l4N2rIhU9zs",
"https://www.youtube.com/embed/_oNtOrUrhgY",
"https://www.youtube.com/embed/_WT2nks9fCc",
"https://www.youtube.com/embed/5U5E7QxOAFo",
"https://www.youtube.com/embed/uNbTbVg-QdE",
"https://www.youtube.com/embed/hTEZWN55VmE",
"https://www.youtube.com/embed/7yCmt-px_QE",
"https://www.youtube.com/embed/ZPo_NaItc4k",
"https://www.youtube.com/embed/lW1Y-Vyc--o",
"https://www.youtube.com/embed/sLEE4dT25wE",
"https://www.youtube.com/embed/QRaLYpE8JsQ",
"https://www.youtube.com/embed/xXsvJZrycLM",
"https://www.youtube.com/embed/XiqYyoARr5g",
"https://www.youtube.com/embed/iu-CFQNxTOE",
"https://www.youtube.com/embed/xqbb-6wdHkg",
"https://www.youtube.com/embed/F8wreE4jVFY",
"https://www.youtube.com/embed/u3GXan9K-9w",
"https://www.youtube.com/embed/fiu1C6tcoWY",
"https://www.youtube.com/embed/bjJlSLEbqkk",
"https://www.youtube.com/embed/0jkU_syeHmY",
"https://www.youtube.com/embed/O_buwraDIjA",
"https://www.youtube.com/embed/q-iV4okS_O4",
"https://www.youtube.com/embed/nLpes6y2Ok4",
"https://www.youtube.com/embed/glAdHscXikg",
"https://www.youtube.com/embed/o2KRf5EZOlM",
"https://www.youtube.com/embed/5vm6HH3RU-4",
"https://www.youtube.com/embed/JMgjlqvvdME",
"https://www.youtube.com/embed/V3572bYl3ek",
"https://www.youtube.com/embed/FtFgfxnLx3M",
"https://www.youtube.com/embed/azCjwb4QkMk",
"https://www.youtube.com/embed/GbOd-JNwb-Y",
"https://www.youtube.com/embed/WJjKvkE7RT8",
"https://www.youtube.com/embed/WbpGzTYlHgA",
"https://www.youtube.com/embed/mBoZwTtJDP8",
"https://www.youtube.com/embed/tpn8FMtOZXg",
"https://www.youtube.com/embed/WNPNUvrnpbY",
"https://www.youtube.com/embed/FqBef-BEfS8",
"https://www.youtube.com/embed/l18vhzyQ5-A",
"https://www.youtube.com/embed/asvrsph76l0",
"https://www.youtube.com/embed/zLTb4i-yC3Y",
"https://www.youtube.com/embed/QD3J3CweiAM",
"https://www.youtube.com/embed/PR6zt-B_Qu8",
"https://www.youtube.com/embed/JF8TmCTzKms",
"https://www.youtube.com/embed/GmOvrNKTqiE",
"https://www.youtube.com/embed/pRl92szzsi0",
"https://www.youtube.com/embed/6kqxMzUAfwk",
"https://www.youtube.com/embed/jMmFYYKXV1I",
"https://www.youtube.com/embed/lDsQEzofsC4",
"https://www.youtube.com/embed/iA7mdFrEwGw",
"https://www.youtube.com/embed/XnsTuuMnUH0",
"https://www.youtube.com/embed/hwf2i-cdY_I",
"https://www.youtube.com/embed/mrZf_Ujg96w",
"https://www.youtube.com/embed/-QSsPDkO5-U",
"https://www.youtube.com/embed/_wbfoCgZjb0",
"https://www.youtube.com/embed/VxELcIPRAYI",
"https://www.youtube.com/embed/lCiDw2j8qzg",
"https://www.youtube.com/embed/K1KqM0J8X0Y",
"https://www.youtube.com/embed/6RZxvKs1Nsg",
"https://www.youtube.com/embed/uYEHKpeets8",
"https://www.youtube.com/embed/ule1A8v5iRA",
"https://www.youtube.com/embed/f8w8KdI89yM"
]
