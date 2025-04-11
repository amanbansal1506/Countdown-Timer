const giveawayText = document.querySelector(".giveaway");
    const daysEl = document.querySelector(".days");
    const hoursEl = document.querySelector(".hours");
    const minutesEl = document.querySelector(".minutes");
    const secondsEl = document.querySelector(".seconds");
    const expiredMsg = document.querySelector(".expired");

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const now = new Date();
    const futureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10, 11, 30);
    const futureTime = futureDate.getTime();

    const date = futureDate.getDate();
    const weekday = weekdays[futureDate.getDay()];
    const month = months[futureDate.getMonth()];
    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();

    giveawayText.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes < 10 ? "0" : ""}${minutes}am`;

    function updateCountdown() {
      const now = new Date().getTime();
      const t = futureTime - now;

      if (t <= 0) {
        document.querySelector(".countdown").style.display = "none";
        expiredMsg.textContent = "Sorry, this giveaway has expired!";
        return;
      }

      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;

      const days = Math.floor(t / oneDay);
      const hours = Math.floor((t % oneDay) / oneHour);
      const minutes = Math.floor((t % oneHour) / oneMinute);
      const seconds = Math.floor((t % oneMinute) / 1000);

      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();