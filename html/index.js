$(document).ready(function () {
    var mySeconds;
    var intervalHandler;
  
    function timerFunction() {
      var timeDisplay = document.getElementById("#displayOutput").val();
  
      var mySec = mySeconds;
      var myMinutes = Math.floor(mySeconds / 60);
      var myHours = Math.floor(mySeconds / 3600);
  
      if (mySec < 10) {
        mySec = "0" + mySec;
      }
      var message =
        myHours.toString() + ":" + myMinutes.toString() + ":" + mySec.toString;
      timeDisplay.innerHTML = message;
  
      if (mySeconds === 0) {
        alert("Done");
        clearInterval(intervalHandler);
        //reset fucntion call
      }
      mySeconds--;
    }
  
    function startCounter() {
      console.log("Enterd"); //
      var input = document.getElementById("userInput");
      console.log('input',input.val()); //
      if (isNaN(input)) {
        alert("Plesase Enter valid input!");
        return;
      }
      mySeconds = input;
      console.log("mySeconds", mySeconds); //
      intervalHandler = setInterval(timerFunction, 1000);
    }
  
    //main
    $("#startButton").onclick = startCounter();
  });
  