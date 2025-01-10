var paramArray =[];
window.onload = _loadFinished;

var gotoName ="";
var colorMode ="normal";
var fontSize ="midium";
var jumpToName = "";

// public function

function openLeft(){
    var url = "help_toc.html?colorMode="+colorMode;
}

function openRight(tag){
	if (tag == null ){
		tag = gotoName;
	}
	var url = "help_mainPage.html?colorMode="+colorMode+"&fontSize="+fontSize+"&jumpTo="+tag;
    window.open(url, "right");
}

// private function

function _loadFinished(){
	_getUrlParams()
	_initSetting()
	_colorModeSelect(colorMode)
	_fontSizeSelect(fontSize)
	
	if (jumpToName != "") {
		location.hash = jumpToName;
	}
}


function _getUrlParams(){
	var urlParam = location.search.substring(1);
	if(urlParam) {
		var param = urlParam.split('&');
		for (i = 0; i < param.length; i++) {
			var paramItem = param[i].split('=');
			paramArray[paramItem[0]] = paramItem[1];
		}
	}
	
	//jumpToName = location.hash.substring(1);
}

function _initSetting(){ 
	// color setting
	// ex.) colorMode=dark
	if (paramArray.colorMode == 'dark'){
		colorMode = 'dark'
	}else{
		colorMode = 'normal'
	}
	// ex.) fontSize=big
	if (paramArray.fontSize == 'large'){
		fontSize = 'large'
	}else if(paramArray.fontSize == 'small'){
		fontSize = 'small'
	}else{
		fontSize = 'midium'
	}
	// ex.) goto=hoge
	if (paramArray.goto != null){
		gotoName = paramArray.goto
	}
	//  ex.) jumpTo=hoge
	if (paramArray.jumpTo != null){
		jumpToName	= paramArray.jumpTo
	}
}

function _colorModeSelect(colorMode){
	var fgcolor = "#333333";
	var bggray = "#BBBBBB";
	var bglightgray = "#DDDDDD";
	if(colorMode == 'dark'){
		fgcolor = "#eeeeee";
		bggray = "#555555";
		bglightgray = "#444444";
		document.body.style.color = '#eeeeee';
		document.body.style.backgroundColor = '#444444';
		/*
		var elements = document.getElementsByTagName("i");
		for (var i = 0 ; i < elements.length; i++) {
			elements[i].classList.replace("icon", "icon_dark")
		}
		*/
	}else{
		fgcolor = "#333333";
		bggray = "#BBBBBB";
		bglightgray = "#DDDDDD";
		document.body.style.color = '#444444';
		document.body.style.backgroundColor = '#eeeeee';
	}
	document.documentElement.style.setProperty('--deffgcolor',fgcolor);
	document.documentElement.style.setProperty('--defbggray',bggray);
	document.documentElement.style.setProperty('--defbglightgray',bglightgray);
}

function _fontSizeSelect(fontSize){
	var size = "2.4vmax"; // midium
	
	if(fontSize == 'large'){
		size = "3.0vmax";
	}else if(fontSize == 'small'){
		size = "2.0vmax"
	}
	document.documentElement.style.setProperty('--deffontsize',size);
}

