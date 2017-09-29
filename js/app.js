//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";
function moreContent(){
  var show = document.getElementById('more');
  show.innerHTML = bacon;
}

//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the pargraph with the id of `less` after clicking on the `Show Less` link.*/
function lessContent (){
	var showLess = document.getElementById('less');
	//showLess.innerHTML = null;
	less.style.display = 'none';
}

//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/

document.getElementById("biggie").addEventListener("mouseover", mouseOver);
document.getElementById("biggie").addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.getElementById("biggie").style.color = "red";
}
 
function mouseOut() {
    document.getElementById("biggie").style.color = "black";
}
function zoom() {
	document.getElementById("biggie").style.zoom=1.5;this.blur();
}

//function zoom (){
	//var tacocat = document.getElementById ('biggie');
	//tacocat.style.fontSize = '150%';
//}


//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/
var menuItems = ["Coffee", "Hash Browns", "Spam and eggs." ];
function valueMenu (){
var showMenuItems = document.getElementById("menu");
showMenuItems.innerHTML = menuItems;
}

//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 30px after clicking on the text.*/
function redFace (){
    document.getElementById("drink").style.color = "red";
    document.getElementById("drink").style.font = "30px arial";
}


//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/
function showPrice (){
	document.getElementById("oreo").addEventListener("onmouseover", onmouseover);
	document.getElementById("oreo").style.color = "brown";
	var showNewPrice = document.getElementById("price");
	showNewPrice.innerHTML = "$5.55";
}

//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";
//document.getElementById("displayQuote").addEventListener(myQuote);
//var myNewQuote = document.getElementById("displayQuote");
//myNewQuote.innerHTML = myQuote;
var myButton = document.getElementById('Benjamin');
myButton.addEventListener("click", function(){
    document.getElementById("displayQuote").innerHTML = myQuote;
});
//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];
var myButton2 = document.getElementById('random');
myButton2.addEventListener("click", function(){
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById("displayQuotes").innerHTML = quotes[randomNumber];

});
//var quoteBox = document.getElementById('displayQuotes');
//var quoteButton = documenmt.getElementById('random');
//function randomQuote (){
	//var randomNumber = math.floor(math.random() * (quotes.length);


//}
//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clickig on the button.
*/
var showHideButton = document.getElementById("showHide");
//var catMoney = document.getElementById("catmoney");

showHideButton.addEventListener("click", toggle);
	var x = document.getElementById("showmoney");
	function toggle(){
	if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }	
}

//document.getElementById('catmoney').innerHTML = '<img src="http://previews.123rf.com/images/aptypkok/aptypkok1201/aptypkok120100093/11943484-Red-cat-sitting-on-the-dollar-on-the-white-background-Stock-Photo.jpg" />';

/*
var clickMsg = document.getElementById('showHide')
clickMsg.addEventListener('mouseover', toggle)

function toggle(){
  var showSecret = document.getElementById('secret');
  if(showSecret.style.display === 'none'){
    showSecret.style.display = 'block';
  } else {
    showSecret.style.display = 'none';
  }
}
*/


//var startDiv = document.getElementsByClassName('block3 col-sm-4'[2]);
//console.log (startDiv);
//var myPic = document.getElementsByTagName('img');
//console.log (myPic);
//function show_image(src, width, height, alt) {

//}
    //var img = document.createElement("img");
//document.getElementById("showHide").addEventListener("click", function(){
		//console.log("aloha");
//document.getElementById('catmoney').getElementsByTagName('img');
//var x = myPic;
   //if (myPic.style.display === 'none') {
        //myPic.style.display = 'block';
    //} else {
        //myPic.style.display = 'none';
    //}

//document.getElementById("catmoney").innerHTML = myPic;

//});