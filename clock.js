setInterval(() => {
    const clock = document.getElementById("clock");
    const daydisplay = document.getElementById("day");
    const date1 = document.getElementById("date");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    // getting date


    let date = new Date();
    console.log(date);
    let minutes = date.getMinutes();
    let hour = date.getHours();
    if (minutes<= 9) {
        minutes = `0${minutes}`;

    }

    let seconds = date.getSeconds();
    if(seconds <= 9) {
        seconds = `0${seconds}`;
    }

    //getting month and year

    let cMonth = date.getMonth() + 1;
    let cYear = date.getFullYear();


    //getting day and date

    let day = date.getDay();
    let d = date.getDate();

    let daysName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    //display AM or PM


    if(hour < 12) {

        document.getElementById("amOrpm").innerHTML = "AM";
    } else {
        document.getElementById("amOrpm").innerHTML ="PM";

    }

    // display clock

    clock.innerHTML = `${hour}:${minutes}:${seconds}`;

    //display day
    daydisplay.innerHTML = daysName[day];
    
    // display date 
    date1.innerHTML=`${d}`;

// display month

    month.innerHTML= cMonth;

    // display Year

    year.innerHTML = `${cYear}`;




    
}, 1000);
