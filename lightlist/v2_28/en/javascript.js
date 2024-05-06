var paramArray =[]
window.onload = loadFinished;

function loadFinished(){
	getUrlParams()
	initSetting()
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
	// filter by name section
	// ex.) name=history
	if(paramArray.name != null){
		filterByName(paramArray.name);
	}
	
	// color setting
	// ex.) colorMode=dark
	var colorMode
	if (paramArray.colorMode == 'dark'){
		colorMode = 'dark'
	}else{
		colorMode = 'normal'
	}
	colorModeSelect(colorMode)
}

	
function filterByName(filtername){
	var elm = document.getElementsByClassName("langSel");
	// set displayable with block of a name tag 
	var isDisplay = false;
	for (var i = 0; i < elm.length; i++) {
		var thisname = elm[i].getAttribute("name");
		if (thisname == filtername) {
			isDisplay = true;
		}else if (thisname != null ){
			isDisplay = false;
		}
		if (isDisplay == false) {
			elm[i].style.display = 'none';
		}
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
