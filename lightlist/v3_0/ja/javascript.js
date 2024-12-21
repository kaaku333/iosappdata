var paramArray =[];
window.onload = loadFinished;

var gotoName ="";
var colorMode ="normal";
var fontSize ="midium";

function loadFinished(){
	getUrlParams()
	initSetting()
	colorModeSelect(colorMode)
	fontSizeSelect(fontSize)
}

function getUrlParams(){
	var urlParam = location.search.substring(1);
	if(urlParam) {
		var param = urlParam.split('&');
		for (i = 0; i < param.length; i++) {
			var paramItem = param[i].split('=');
			paramArray[paramItem[0]] = paramItem[1];
		}
	}
}

function initSetting(){ 
	// color setting
	// ex.) colorMode=dark
	if (paramArray.colorMode == 'dark'){
		colorMode = 'dark'
	}else{
		colorMode = 'normal'
	}
	// ex.) fontSize=big
	if (paramArray.fontSize == 'small'){
		fontSize = 'big'
	}else if(paramArray.fontSize == 'small'){
		fontSize = 'small'
	}else{
		fontSize = 'midium'
	}
	// ex.) gotoName=hoge
	if (paramArray.goto != null){
		gotoName = paramArray.goto
	}
}

function colorModeSelect(colorMode){
	if(colorMode == 'dark'){
		document.body.style.color = '#eeeeee';
		document.body.style.backgroundColor = '#444444';
	}else{
		document.body.style.color = '#444444';
		document.body.style.backgroundColor = '#eeeeee';
		var elements = document.getElementsByTagName("div");
		for (var i = 0 ; i < elements.length; i++) {
			elements[i].classList.replace("icon_white", "icon_black")
			elements[i].classList.replace("icon_blue", "icon_darkblue")
		}
	}
}

function fontSizeSelect(fontSize){
	var size = "2.4vmax"; // midium
	if(fontSize == 'large'){
		size = "3.0vmax";
	}else if(fontSize == 'small'){
		size = "2.0vmax"
	}
	document.documentElement.style.setProperty('--deffontsize',size);
}

function openLeft(){
    var url = "help_toc.html?colorMode="+colorMode;
}

function openRight(tag){
	if (tag == null ){
		tag = gotoName;
	}
	var url = "help_mainPage.html?colorMode="+colorMode+"&fontSize="+fontSize+"#"+tag;
    window.open(url, "right");
}
