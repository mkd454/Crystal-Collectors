$(document).ready(function() {
 
  // Generate random number
  var randomNum = Math.floor((Math.random() * (120-19+1))+19);
  $("#randomNum").text(randomNum);

  var blueRandom;
  var ombreRandom;
  var purpleRandom;
  var yellowRandom;

  // Assign random values to the four crystals
  var random = function () {
    randomNum = Math.floor((Math.random() * (120-19+1))+19);
    $("#randomNum").text(randomNum);
    blueRandom = Math.floor((Math.random() * 12)+1);
    ombreRandom = Math.floor((Math.random() * 12)+1);
    purpleRandom = Math.floor((Math.random() * 12)+1);
    yellowRandom = Math.floor((Math.random() * 12)+1);
    console.log("`````````");
    console.log(blueRandom);
    console.log(ombreRandom);
    console.log(purpleRandom);
    console.log(yellowRandom);
  };

  // Link totals and score to HTML
  var sumClicks = 0;
  var win = 0;
  var lose = 0;
  $("#sumClicks").text(sumClicks);
  $("#userWin").text(win);
  $("#userLose").text(lose);

  random();
  // When crystal images are clicked, add the value of the clicked crystal to the total
  $("#blueCrystal").on("click", function() {
    sumClicks += parseInt(blueRandom);
    $("#sumClicks").text(sumClicks);
    winlose();
  });
  $("#ombreCrystal").on("click", function() {
    sumClicks += parseInt(ombreRandom);
    $("#sumClicks").text(sumClicks);
    winlose();
  });
  $("#purpleCrystal").on("click", function() {
    sumClicks += parseInt(purpleRandom);
    $("#sumClicks").text(sumClicks);
    winlose();
  });
  $("#yellowCrystal").on("click", function() {
    sumClicks += parseInt(yellowRandom);
    $("#sumClicks").text(sumClicks);
    winlose();
  });

  var winlose = function() {
    // If the total equals the random number, player wins
    if (sumClicks === randomNum) {
      win++;
      $("#userWin").text(win);
      reset();
    } 
    // If the total goes over the random number, player loses
    else if (sumClicks > randomNum) {
      lose++;
      $("#userLose").text(lose);
      reset();
    }
  }

  // Reset game with diff values
  var reset = function() {
    sumClicks = 0;
    $("#sumClicks").text(sumClicks);
    random();
  }

});