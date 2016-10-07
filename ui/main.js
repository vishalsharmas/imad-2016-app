console.log('Loaded!');

//to change the text of the main-text div
var element = document.getElementbyId('main-text');
element.innerHTML = 'new value';

//for moving the image we do
var img = document.getelementbyid('madi');
img.onclick = function(){
    img.style.marginleft = '100px';
};
