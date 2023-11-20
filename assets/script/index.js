'use strict';

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('clock').textContent = hours + ':' + minutes;
    
    checkAlarm(hours, minutes);
  }
  
  // Store the alarm time
  let alarmTime = null;
  
  function setAlarm() {
    const hr = document.getElementById('alarmHr').value;
    const min = document.getElementById('alarmMin').value;
    if (hr && min && hr >= 0 && hr < 24 && min >= 0 && min < 60) {
      alarmTime = hr.padStart(2, '0') + ':' + min.padStart(2, '0');
      document.getElementById('clock').classList.add('alarm-active');
      //alert('Alarm set for ' + alarmTime);
      document.getElementById('alarmTimeBox').innerHTML =  `<i class="fa fa-bell" aria-hidden="true"></i> ${alarmTime}`;
    } else {
      //alert('Please enter a valid time.');
      document.getElementById('alarmTimeBox').innerHTML =  `<p style="color:red">Please enter a valid time.</p>`;
    }
  }
  
  function checkAlarm(hours, minutes) {
    const currentTime = hours + ':' + minutes;
    if (alarmTime && currentTime === alarmTime) {
      playAlarmSound();
      // Reset alarmTime so it doesn't play repeatedly
      alarmTime = null;
      document.getElementById('clock').classList.remove('alarm-active');
    }
  }
  
  function playAlarmSound() {
    // Play an alarm sound
    const alarmSound = new Audio('./assets/audio/1.mp3'); 
    alarmSound.play();
  }
  
  setInterval(updateClock, 1000);
  