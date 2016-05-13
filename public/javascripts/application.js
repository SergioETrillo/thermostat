$(document).ready(function(){
  var t = new Thermostat();
  updateTemp();
  $('#up').click(function(){
    t.up();
    updateTemp();
  });

  $('#down').click(function(){
    t.down();
    updateTemp();
  });

  $('#reset').click(function(){
    t.reset();
    updateTemp();
  });

  $("#PSM").click(function(){
    t.switchPowerSaving();
    updateTemp();
    $("#temperature").html(formatTemperature(t));
    if($(this).attr("src") == "public/images/psm_off.png"){
      $(this).attr("src", "public/images/psm_on.png");
      $("#power-saving-status").text("ON");
    } else {
      $(this).attr("src", "public/images/psm_off.png");
      $("#power-saving-status").text("OFF");
    }
  });

  $('#powersaving-on').click(function(){
    t.switchPowerSavingModeOn();
    updateTemp();
    $('#power-saving-status').text("on");
  });

  $('#powersaving-off').click(function(){
    t.switchPowerSavingModeOff();
    updateTemp();
    $('#power-saving-status').text("off");
  });

  function formatTemperature(){
    var txt = "";
    txt += "<h1>" + t.getCurrentTemperature() + " &#8451;</h1>";
    return txt;
  }

  function updateTemp() {
    $('#temperature').text(t.getCurrentTemperature());
    $('#temperature').attr("class", t.energyUsage());
    $("#temperature").html(formatTemperature(t));
  };

});