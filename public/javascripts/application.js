$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemp();

  $('#up').click(function(){
    thermostat.up();
    updateTemp();
  });

  $('#down').click(function(){
    thermostat.down();
    updateTemp();
  });

  $('#reset').click(function(){
    thermostat.reset();
    updateTemp();
    updatePSM();
  });

  $("#PSM").click(function(){
    thermostat.switchPowerSaving();
    updateTemp();
    updatePSM();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    updateTemp();
    $('#power-saving-status').text("on");
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    updateTemp();
    $('#power-saving-status').text("off");
  });

  $("#get-status").click(function(){
    getStatus();
  });

  $("#post-status").click(function(){
    postStatus(thermostat.getCurrentTemperature(), thermostat._powermode);
  });


  function formatTemperature(){
    var txt = "";
    txt += "<h1>" + thermostat.getCurrentTemperature() + " &#8451;</h1>";
    return txt;
  }

  function updateTemp() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr("class", thermostat.energyUsage());
    $("#temperature").html(formatTemperature(thermostat));
  };

  function updatePSM(){
    if(thermostat._powermode){
      $("#power-saving-status").text("ON");
      $("#PSM").attr("src", "public/images/psm_on.png");
    } else {
      $("#power-saving-status").text("OFF");
      $("#PSM").attr("src", "public/images/psm_off.png");
    }
  }

  function getStatus(){
    res = $.getJSON('http://localhost:4567/status', function(data){
      res = data
      thermostat._temp = res.temperature;
      thermostat._powermode = res.power;
      updateTemp();
      updatePSM();
    });
  }

  function postStatus(temperature, power){
    $.ajax
    ({
      type: "POST",
      url: 'http://localhost:4567/status',
      dataType: 'json',
      data: JSON.stringify({"temperature":temperature,"power":power}),
      success: function () {
        console.log("data sent to server");
      }
    })

  }

});