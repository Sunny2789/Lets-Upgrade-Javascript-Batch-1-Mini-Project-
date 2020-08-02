

function showTimer(){
    let loginForm = document.getElementById('myForm')

    loginForm.addEventListener('submit',(event)=>{
        event.preventDefault()

        let time = event.target.t.value

        time_class = document.getElementById("timer_div")

        time_class.innerHTML = time;

        my_timer = setInterval(function() {
            
            var hr = 0, min = 0, sec = 0;
            var time_up = false;
        
            t = time.split(":")
            hr = parseInt(t[0])
            min = parseInt(t[1])
            sec = parseInt(t[2])

            

            if (sec == 0) {
                if (min > 0) {
                    sec = 59;
                    min--;
                }

                else if (hr > 0) {
                    min = 59;
                    sec = 59;
                    hr--;
                }
                else {
                    time_up = true;
                }
            }
            
            else {
                sec--;
            }

            if (hr < 10){
                hr = "0" + hr;
            }

            if (min < 10){
                min = "0" + min;
            }

            if (sec < 10){
                sec = "0" + sec;
            }
            
            time = hr + ":" + min + ":" + sec

            if (time_up == true){
                time = "Time Up"
                timer_div.classList.add('timeup')
                clearInterval(my_timer)
            }
            
            timer_div.innerHTML = time;
            
        
        }, 1000)
    })
}