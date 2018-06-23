//Datum van vandaag
var today = new Date();

document.getElementById('message').innerHTML = today.toDateString();

//Tijd van nu
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    if(h == 0){
        h = 24;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000); 
}

showTime();
//Laat tijd zien

//Achtergrond veranderd in tijd
		var currentTime = new Date().getHours();
		if (6 <= currentTime && currentTime < 18) {
    		if (document.body) {
       		document.body.className = 'dag';
    		}
		}
		else {
    		if (document.body) {
        	document.body.className = 'nacht';
    		} 
		}
		
//Beweging raket
var mainHeading = document.getElementById('mainHeading');

var tl1 = new TimelineMax({repeat:24});
tl1.to(mainHeading, 30, {right: 100});

//Animatie klok + overgang foto
TweenMax.from('#message', 1, {opacity:0, scale:2, delay:1});
TweenMax.from('#clock', 0.5, {opacity:0, delay:1});
TweenMax.from('#dag', 0.5, {opacity:1, delay:0.2});
TweenMax.to('#nacht', 0.5, {opacity: 1, delay:1});
TweenMax.from('#dag', 0.5, {opacity:1, delay:0.2});
TweenMax.to('#nacht', 0.5, {opacity: 1, delay:1});


var allClouds = new TimelineLite(),
    $cloudContainer = $("#cloudContainer");


function animationClouds() {
  //loop through creation of 10 clouds
  for(var i = 0; i < 4; i ++){
    //dynamically create a cloud element
    var cloud = $('<div class="cloud"><img src="images/cloud1.png"></div>').appendTo($cloudContainer);
    //set its initial position and opacity using GSAP
    TweenLite.set(cloud, {left:-100, top:i*40, opacity:0});
    //create a repeating timeline for this cloud
    var cloudTl = new TimelineMax({repeat:-1});
    //fade opacity to 1
    cloudTl.to(cloud, 0.5, {opacity:1})
    //move cloud across its container div with random duration. Start time = 0
    .to(cloud, 10 + (Math.random() * 8), {left:"100%", ease:Linear.easeNone}, 0)
    //0.5 seconds before timeline ends start fading opacity to 0 
    .to(cloud, 0.5, {opacity:0}, "-=0.5")
    //add this cloud's timeline to the allClouds timeline at a random start time.
    allClouds.add(cloudTl, Math.random()*5);
  }
}

animationClouds();

function secondClouds() {
  //loop through creation of 10 clouds
  for(var i = 0; i < 4; i ++){
    //dynamically create a cloud element
    var cloud = $('<div class="cloud"><img src="images/cloud2.png"></div>').appendTo($cloudContainer);
    //set its initial position and opacity using GSAP
    TweenLite.set(cloud, {left:-100, top:i*40, opacity:0});
    //create a repeating timeline for this cloud
    var cloudTl = new TimelineMax({repeat:-1});
    //fade opacity to 1
    cloudTl.to(cloud, 0.5, {opacity:1})
    //move cloud across its container div with random duration. Start time = 0
    .to(cloud, 15 + (Math.random() * 8), {left:"100%", ease:Linear.easeNone}, 0)
    //0.5 seconds before timeline ends start fading opacity to 0 
    .to(cloud, 0.5, {opacity:0}, "-=0.5")
    //add this cloud's timeline to the allClouds timeline at a random start time.
    allClouds.add(cloudTl, Math.random()*5);
  }
}

secondClouds();

