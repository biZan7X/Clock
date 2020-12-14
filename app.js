setInterval(() => {
   let now = new Date();

   //* setting up the seconds
   let seconds = now.getSeconds();
   let secondsDegree = (seconds / 60) * 360 + 90; //& the extra 90 is as we position our hands from the 90 degree itself, so to cover that
   document.querySelector(
      ".second-hand"
   ).style.transform = `rotate(${secondsDegree}deg)`;

   //* setting up the minutes hand
   let minutes = now.getMinutes();
   let minutesDegree = (minutes / 60) * 360 + 90;
   document.querySelector(
      ".min-hand"
   ).style.transform = `rotate(${minutesDegree}deg)`;

   //* setting up the hours hand
   let hours = now.getHours();
   let HoursDegree = (hours / 12) * 360 + 90;
   document.querySelector(
      ".hour-hand"
   ).style.transform = `rotate(${HoursDegree}deg)`;
}, 1000);
