let ms = 0, s = 0, m = 0;
let counter; 
let start = document.getElementById("start");
let stop_timer = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer = document.querySelector(".timer");

function currentTime() {

    return m + ":" + s + ":" + ms;
}
start.addEventListener('click', function() {

    if(!counter) {
        counter = setInterval(runTimer, 10);
    }
    

    function runTimer() {
        timer.textContent = currentTime();
        ms++;

        if (ms == 100) {
            ms = 0; 
            s++;

        } 
        if (s == 60) {
            s = 0; 
            m++;
        }
    }

});


stop_timer.addEventListener('click', function(){

    clearInterval(counter); 
    counter = false;

});


reset.addEventListener('click', function() {
    clearInterval(counter); 
    counter = false; 
    ms = 0, s = 0, m = 0;
    timer.textContent = currentTime();

});



