$(document).ready(function () {
  var mySeconds;
  var cSeconds = 100;
  var intervalHandler;
  var remainingSeconds = 0;
  var log;

  //timerFunction
  function timerFunction() {
    var mySec = mySeconds % 60;
    var myMinutes = Math.floor(mySeconds / 60) % 60;
    var myHours = Math.floor(mySeconds / 3600);

    $("#hours").text(myHours);
    $("#minutes").text(myMinutes);
    $("#seconds").text(mySec);
    $("#cSeconds").text(cSeconds);
    if (cSeconds === 0) {
      cSeconds = 99;
      mySeconds--;
    } else {
      cSeconds--;
    }
  }
  //timerFunction

  //START COUNTER
  function startCounter() {
    var userInput = $("#userInput").val();
    if (isNaN(userInput)) {
      alert("Please Enter Valid Input!");
      return;
    }
    mySeconds = userInput;
    intervalHandler = setInterval(timerFunction, 10);
    log = "Started";
    $("#logText").append("<h4><br>Started</h4>");
    console.log($("#logText").text());
  }
  //START COUNTER

  //RESET function
  function reset() {
    location.reload();
    log = "Reset";
    $("#logText").append("<h4><br>Reset</h4>");
  }
  //RESET function

  // PAUSE function
  function pause() {
    $("#resumeButton").show();
    $("#startButton").hide();
    clearInterval(intervalHandler);
    log = "Pause";
    $("#logText").append("<h4><br>Paused</h4>");
  }
  // PAUSE function

  //RESUME function
  function resume() {
    intervalHandler = setInterval(timerFunction, 10);
    log = "Resumed";
    $("#logText").append("<h4><br>Resumed</h4>");
  }
  //RESUME function

  //STOP function
  function stop() {
    $("#startButton").hide();
    $("#restartButton").show();
    clearInterval(intervalHandler);
    log = "Stopped";
    $("#logText").append("<h4><br>Stopped</h4>");
  }
  //STOP function

  //RESTART function
  function restart() {
    clearInterval(intervalHandler);
    startCounter();
    log = "Restarted";
    $("#logText").append("<h4><br>Restarted</h4>");
  }
  //RESTART function

  //main
  $("#startButton").click(startCounter);
  $("#resetButton").click(reset);
  $("#pauseButton").click(pause);
  $("#resumeButton").click(resume);
  $("#stopButton").click(stop);
  $("#restartButton").click(restart);
  //main
});
