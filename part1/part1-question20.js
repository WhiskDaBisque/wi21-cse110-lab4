/* 
This program only prints out the time once when executed. 
Modify this code such that the program prints out the time every second. 
*/


//let d = new Date();
//let time = d.toLocaleTimeString();
//console.log(time);

function print_curr_time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let intervalID = setInterval(print_curr_time,1000);

