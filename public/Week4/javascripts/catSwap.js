function replaceImages(){
    var images = document.getElementsByTagName("IMG");

    for (var i=0; images[i]; i++){
         var h = images[i].height;
         var w = images[i].width;
         var new_src = 'http://www.placekitten.com/' + w + '/' + h
         images[i].setAttribute('src', new_src);
    }
}

function replaceNames(){
    var facebooknames = document.getElementsByClassName('actorName');
    for (var i=0; divs[i]; i++){
	     facebooknames[i].firstChild.innerHTML = kittenIpsum();
    }
}

function kittenIpsum(){
	str = ""
	for (var i=0; i < Math.random()*6 + 3; i++){
		str = str + " meow"
	}
	return str;
}

