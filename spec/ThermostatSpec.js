'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('initialization, ', function (){

    it('temperature starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20);
    });

    it('powersaving mode is ON', function(){
      expect(thermostat.powerSaving()).toBe(true);
    });
  });

  describe('temperature changes, ',function(){
    it('temperature can be increased', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature()).toEqual(21);
    });

    it('temperature can be decreased', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature()).toEqual(19);
    });
  });

  describe('Power Saving mode, ',function(){
    it('if ON, can be switched to OFF', function(){
      thermostat.switchPowerSaving();
      expect(thermostat.powerSaving()).toBe(false);
    });

    it('if OFF, can be switched to ON', function(){
      thermostat.switchPowerSaving();
      thermostat.switchPowerSaving();
      expect(thermostat.powerSaving()).toBe(true);
    });

    it('if ON, MAX_TEMP is 25', function(){
      expect(thermostat._MAXIMUM.toBe(true);;
    });
  });

  // describe('minimum temperature is ', function(){
  //   beforeEach(function(){
  //     while(thermostat.temperature() > 10) {
  //       thermostat.decreaseTemperature();
  //     }
  //   });

  //   it('10 degrees', function(){
  //     thermostat.decreaseTemperature()
  //     expect(thermostat.temperature()).toEqual(10);
  //   });
  // });

  // describe('maximum temperature is ', function(){
  //   it('25 degrees with power saving ON', function(){
  //     while(thermostat.temperature() < 25) {
  //       thermostat.increaseTemperature();
  //     }
  //     thermostat.increaseTemperature()
  //     expect(thermostat.temperature()).toEqual(25);
  //   });


  //   xit('32 degrees with power saving OFF', function(){
  //     while(thermostat.temperature() < 32) {
  //       thermostat.increaseTemperature();
  //     }
  //     thermostat.increaseTemperature()
  //     expect(thermostat.temperature()).toEqual(32);
  //   });
  // });
});

