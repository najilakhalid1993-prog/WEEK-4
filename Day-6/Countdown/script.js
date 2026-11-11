// Step 1: Select HTML elements

let targetDate = document.getElementById("targetDate");

let startBtn = document.getElementById("startBtn");

let countdown = document.getElementById("countdown");

let inputStatus = document.getElementById("inputStatus")


// Step 2: Create a variable for interval

let timer;
let debounceTimer;


// Step 3: Add click event


targetDate.addEventListener("input",function(){
    clearTimeout(debounceTimer)
    debounceTimer=setTimeout(()=>{
        if(targetDate.value){
            inputStatus.innerHTML= "Date selected successfully !"
        } else {
            inputStatus.innerHTML= "Please select a date"
        }
    },500)
})

startBtn.addEventListener("click", function() {

    // Get selected date

    let selectedDate = new Date(targetDate.value);

    let targetTime = selectedDate.getTime();

    // Validate selected date

    if (!targetDate.value || targetTime <= Date.now()) {
        countdown.innerHTML = "Please select a future date and time!";
        return;
    }

    // Stop previous countdown

    clearInterval(timer);


    // Step 4: Create countdown function

    function updateCountdown() {

        // Get current time

        let currentTime = Date.now();

        // Calculate remaining time

        let remainingTime = targetTime - currentTime;


        // Check if countdown is finished

        if (remainingTime <= 0) {

            clearInterval(timer);

            countdown.innerHTML = "Time's Up!";

            return;
        }


        // Calculate days, hours, minutes and seconds

        let days = Math.floor(remainingTime / 86400000);

        let hours = Math.floor((remainingTime % 86400000) / 3600000);

        let minutes = Math.floor((remainingTime % 3600000) / 60000);

        let seconds = Math.floor((remainingTime % 60000) / 1000);


        // Display countdown

        countdown.innerHTML =
            `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    }


    // Step 5: Update every second

    updateCountdown();

    timer = setInterval(updateCountdown, 1000);

});