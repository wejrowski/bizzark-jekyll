// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults



var textTimer;
var loaderText = "========";
var loaderTextPosition = 0;
var loaderTextTotal = 28;
var loadingClass = "attachment-loading";
var direction = 1;
var infoID = "attachment-container";
var loadingPhrases = ["LOADING TWITTER", "LOADING TWITTER", "ENGAGING WITH THE WEB", "TWITTER TIME"]
var loadingPhrase = "RETRIEVING DATA";

var errorDefault = inTheMeanTime;

/*loadingPhrase = */
function createXMLHttpRequest(){
	var request = false;
	if(window.XMLHttpRequest){
		if(typeof XMLHttpRequest != 'undefinded'){
			try{
				request = new XMLHttpRequest();
			}catch(e){
				request = false;
			}
		}else{
			try{
				request = new ActiveXObject('Msxml2.XMLHTTP');
			} catch(e){
				try{
					request = new ActiveXObject('Microsoft.XMLHTTP');
				} catch(e){
					request = false;	
				}
			}
		}
	}
	return request;
	
}

var request = createXMLHttpRequest();

function bizzarkFeed(){
	infoID = "tweet";
	animateText();
	if(request){
		var gal_grab_url = "/index/gettwitter"
		request.open('GET', gal_grab_url, true);
		request.onreadystatechange = parseResponse;
		request.send(null);
		/*request.send('?q=from:bizzark');*/
	}else{
	}
}
function parseBrent() {
	/* READY */
	if(request.readyState == 4){
		if(request.status == 200){
			clearTimeout(textTimer);
			setLoaderText(request.responseText);
			/*setLoaderText(inTheMeanTime);*/
			/*alert('::'+paramList[1].childNodes[0].nodeValue);*/

			//parse here...
			
		}else{
			setLoaderText(errorDefault);
			request = null;
		}
	}
}

function grabAttachments(page_id){
	infoID = "attachment-container";
	animateText();
	if(request){
		var gal_grab_url = "/admin/attachments/grab/"+page_id
		request.open('GET', gal_grab_url, true);
		request.onreadystatechange = parseResponse;
		request.send(null);
		/*request.send('?q=from:bizzark');*/

	}else{
	}
}

function parseResponse() {
	/* READY */
	if(request.readyState == 4){
		if(request.status == 200){
			clearTimeout(textTimer);
			setLoaderText(request.responseText);
		}else{
			request = null;
		}
	}
}


function animateText(){
	loaderText = "";
	loaderText = "";
/*	var randomStar = Math.floor(Math.random()*loaderTextTotal);
	var randomTime = Math.floor(Math.random()*4);*/
	for(var i=0; i<loaderTextTotal; i++){
/*		if(randomTime>1 && randomStar == i){
			loaderText = loaderText+"*";
		}else{*/
			if((i<=loaderTextPosition && direction == 1) || (i>=loaderTextPosition && direction == -1)){
				/*(i<=loaderTextPosition && direction == 1) || (i>=loaderTextPosition && direction == -1)*/
				loaderText = loaderText+".";
			}else{
				loaderText = loaderText+":";
			}
		/*}*/
	}
	loaderTextPosition ++;
	if(loaderTextPosition==loaderTextTotal){
		direction = direction *-1;
		loaderTextPosition = 1;
	}
	document.getElementById("attachment-container").innerHTML = "rara it's changed!";
	setLoaderText("<div class='"+loadingClass+"'>"+loaderText+"<br />"+loadingPhrase+"</div>");
	textTimer = setTimeout("animateText()", 50);
}


function setLoaderText(tt){
	document.getElementById(infoID).innerHTML = tt;
}

var docChanged = false;
function addFormHandlers(f){
/*	for(var i=0; i<f.elements.length; i++){
		var e = f.elements[i];
		e.onchange = function(){	docChanged = true;	}
	}*/
}

function addLinkWarnings(){
/*	for(var i=0; i<document.links.length; i++){
		var e = document.links[i];
		e.onclick = function(){
			if(docChanged){
				if(confirm("Are you sure you want to leave without saving changes?")){
					return true;
				}else{
					return false;
				}
			}else{
				return true;
			}
		}
	}*/
}

