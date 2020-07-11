var min=0;
var sec=0;
var msec=0;

var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
var interval ;

function timer(){
    msec++
    document.getElementById("msec").innerHTML = msec;
    // msecheading.innerHTML = msec;
    if (msec >=100){
        sec++
        document.getElementById("sec").innerHTML = sec;
        msec= 0;
    }
    else if (sec >=60){
        min++
        sec=0;
        document.getElementById("min").innerHTML = min ;
        
    }
}

function start (){
    interval = setInterval(timer , 10);
    document.getElementById("start").disabled = true;
    }


function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;
}


function reset(){
    document.getElementById("start").disabled = false;

    min =0;
    sec = 0;
    msec =0;
    document.getElementById("msec").innerHTML = msec;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    stop()
}



































// function timer(){
//     console.log("running.....")
// }
// setInterval(timer,1000)

// function timeout(){
//     console.log("running...")
// }
// setTimeout(timeout,3000)

// var count = 0;

// function timer(){
//     count ++;
//     console.log(count)
    
// }
// setInterval(timer,1000)

// var count = 0;
// var interval ;
// function timer(){
//     count ++;
//     console.log(count)
    
// }
// interval = setInterval(timer,1000)

// setTimeout(function(){
   
//     clearInterval(interval)
// }, 5000)