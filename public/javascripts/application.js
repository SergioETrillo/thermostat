$(document).ready(function(){
  var t = new Thermostat();
  updateTemp();
  $('#temperature-up').click(function(){
    t.up();
    updateTemp();
  });

  $('#temperature-down').click(function(){
    t.down();
    updateTemp();
  });

  $('#temperature-reset').click(function(){
    t.reset();
    updateTemp();
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

function updateTemp() {
  $('#temperature').text(t.getCurrentTemperature());
};

});