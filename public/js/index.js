function updateTimer(deadline){
  var time = deadline - new Date();
  return {
    // 'years': Math.floor( time/(1000*60*60*24*365) ),
    'days': Math.floor( time/(1000*60*60*24) % 365 ),
    'hours': Math.floor( (time/(1000*60*60)) % 24 ),
    'minutes': Math.floor( (time/1000/60) % 60 ),
    'seconds': Math.floor( (time/1000) % 60 ),
    'total' : time
  };
}


function animateClock(span){
  span.className = "turn";
  setTimeout(function(){
    span.className = "";
  },700);
}

function startTimer(id, deadline){
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

    clock.innerHTML = '<span>' + timer.days + '</span>'
                    + '<span>' + timer.hours + '</span>'
                    + '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>';

    //animations
    var spans = clock.getElementsByTagName("span");
    animateClock(spans[4]);
    if(timer.seconds == 59) animateClock(spans[3]);
    if(timer.minutes == 59 && timer.seconds == 59) animateClock(spans[2]);
    if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
    // if(timer.days == 364 && timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);

    //check for end of timer
    if(timer.total < 1){
      clearInterval(timerInterval);
      clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
    }


  }, 1000);
}


window.onload = function(){
  var deadline = new Date("September 07, 2017 07:00:01");
  startTimer("clock", deadline);
};
