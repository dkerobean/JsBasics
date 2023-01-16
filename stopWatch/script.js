var buttonClass = document.querySelector('.class'); 
var textClass = document.getElementById('class');
buttonClass.addEventListener('click', function() {
    textClass.textContent = "Click Works!";
});

var buttonClass2 = document.querySelector('.id_query'); 
var textClass2 = document.getElementById('id_query'); 
buttonClass2.addEventListener('click', function() {
    textClass2.textContent = "2nd Click";
});