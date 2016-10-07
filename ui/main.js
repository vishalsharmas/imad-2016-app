console.log('Loaded!');

//to change the text of the main-text div
var element = document.getElementbyId('main-text');
element.innerHTML = 'new value';

//for moving the image we do
var img = document.getElementbyId('madi');
var marginleft = 0;
function moveright () {
     marginleft = marginleft + 10;
     img.style.marginleft = marginleft + 'px';
}
    img.onclick = function () {
        var interval = setinterval(moveright, 100);
    };
