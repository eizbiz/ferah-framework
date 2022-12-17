//#####################--password functionality--##########################

var count = 0;
var passcodeKey = '';
var validPasscodeKey = '1235';
var delay = 400;
function passcode(keyElement) {
    count = count + 1;

    if (count <= 4) {
        document.getElementById(count).classList.remove("pass-inactive");
        document.getElementById(count).classList.add("pass-active");
        passcodeKey = passcodeKey + keyElement;
    }
    if (count == 4 && (validPasscodeKey == passcodeKey))
        window.location.assign("index.html");
        //alert("Passcode matched");
    else if (count == 4 && (validPasscodeKey != passcodeKey)) {
        document.getElementById("selectedbox").classList.add("vibe");
        setTimeout(function () {
            document.getElementById("selectedbox").classList.remove("vibe");
            cancelEvent();
        }, delay);


    }
}

function cancelEvent() {
    for (i = 1; i <= count ; i++) {
        document.getElementById(i).classList.remove("pass-active");
        document.getElementById(i).classList.add("pass-inactive");
    }
    count = 0;
    passcodeKey = '';
}

//#####################-- navigation slider--##########################

document.getElementById('wrap').onclick = function () {
    document.getElementById('nav').className = document.getElementById('nav').className.replace(' nav-open', '');
    document.getElementById('wrap').className = document.getElementById('wrap').className.replace(' nav-open', '');
};

document.getElementById('header').onclick = function () {
    document.getElementById('nav').className += ' nav-open';
    document.getElementById('wrap').className += ' nav-open';
};

//##########################-- pop up --#################################
//code for triggering popup
function popupOpenplain() {
    var myClassName = " cd-popup";
    var trigger = document.getElementById('plain-popup');
    trigger.className = trigger.className.replace(myClassName, "");
    trigger.className = trigger.className + ' is-visible';
}

//code for triggering popup single button
function popupOpenbtn1() {
    var myClassName = " cd-popup";
    var trigger = document.getElementById('popup-btn1');
    trigger.className = trigger.className.replace(myClassName, "");
    trigger.className = trigger.className + ' is-visible';
}

//code for triggering popup two button
function popupOpenbtn2() {
    var myClassName = " cd-popup";
    var trigger = document.getElementById('popup-btn2');
    trigger.className = trigger.className.replace(myClassName, "");
    trigger.className = trigger.className + ' is-visible';
}

//code for triggering popup full screen
function popupOpenfullscr() {
    var myClassName = " cd-popup";
    var trigger = document.getElementById('popup-fullscreen');
    trigger.className = trigger.className.replace(myClassName, "");
    trigger.className = trigger.className + ' is-visible';
}

//code for closing plain popup
function closepopupplain() {
    var trigger = document.getElementById('plain-popup');
    var myClassName = trigger.className;
    trigger.className = trigger.className.replace(myClassName, 'cd-popup');
}

//code for closing popup single button
function closepopupbtn1() {
    var trigger = document.getElementById('popup-btn1');
    var myClassName = trigger.className;
    trigger.className = trigger.className.replace(myClassName, 'cd-popup');
}

//code for closing popup two button
function closepopupbtn2() {
    var trigger = document.getElementById('popup-btn2');
    var myClassName = trigger.className;
    trigger.className = trigger.className.replace(myClassName, 'cd-popup');
}

//code for closing popup full screen
function closepopupfullscr() {
    var trigger = document.getElementById('popup-fullscreen');
    var myClassName = trigger.className;
    trigger.className = trigger.className.replace(myClassName, 'cd-popup');
}

//##########################-- tabs --####################################

window.onload = function () {

    // get tab container
    var container = document.getElementById("tabContainer");
    var tabcon = document.getElementById("tabscontent");
    //alert(tabcon.childNodes.item(1));
    // set current tab
    var navitem = document.getElementById("tabHeader_1");

    //store which tab we are on
    var ident = navitem.id.split("_")[1];
    //alert(ident);
    navitem.parentNode.setAttribute("data-current", ident);
    //set current tab with class of activetabheader
    navitem.setAttribute("class", "tabActiveHeader");

    //hide two tab contents we don't need
    var pages = tabcon.getElementsByClassName("tabpage");
    for (var i = 1; i < pages.length; i++) {
        pages.item(i).style.display = "none";
    };

    //this adds click event to tabs
    var tabs = container.getElementsByTagName("li");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].onclick = displayPage;
    }
}

// on click of one of tabs
function displayPage() {
    var current = this.parentNode.getAttribute("data-current");
    //remove class of activetabheader and hide old contents
    document.getElementById("tabHeader_" + current).removeAttribute("class");
    document.getElementById("tabpage_" + current).style.display = "none";

    var ident = this.id.split("_")[1];
    //add class of activetabheader to new active tab and show contents
    this.setAttribute("class", "tabActiveHeader");
    document.getElementById("tabpage_" + ident).style.display = "block";
    this.parentNode.setAttribute("data-current", ident);
}