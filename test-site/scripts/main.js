let myImg = document.querySelector('img')

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc == 'images/firefox-icon.png') {
        myImg.setAttribute('src', 'images/firefox2.png');
    } else {
        myImg.setAttribute('src', 'images/firefox-icon.png');
    }
}