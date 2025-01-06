//Countdown functionality

let countDownDate = new Date("Apr 10, 2025 20:37:25").getTime();
let setCountdown = () => {
  let currentTime = new Date().getTime();
  let timeDifference = countDownDate - currentTime;
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  let getRemainingTime = (time, className) => {
    let remainingTime = document.querySelectorAll(`.${className}`);
    remainingTime.forEach((timeUnit) => {
      timeUnit.innerHTML = time;
    });
  };

  getRemainingTime(seconds, "seconds");
  getRemainingTime(minutes, "minutes");
  getRemainingTime(hours, "hours");
  getRemainingTime(days, "days");

  //Animation functionality

  if (seconds === 0) {
    document.getElementById("minutes").classList.add("animate");
    setTimeout(
      () => document.getElementById("minutes").classList.remove("animate"),
      1000
    );
  }
  if (minutes === 0) {
    document.getElementById("hours").classList.add("animate");
    setTimeout(
      () => document.getElementById("hours").classList.remove("animate"),
      1000
    );
  }
  if (hours === 0) {
    document.getElementById("days").classList.add("animate");
    setTimeout(
      () => document.getElementById("days").classList.remove("animate"),
      1000
    );
  }
};
setInterval(setCountdown, 1000);
