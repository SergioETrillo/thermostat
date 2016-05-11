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

  describe('minimum temperature is ', function(){
    beforeEach(function(){
      while(thermostat.temperature() > 10) {
        thermostat.decreaseTemperature();
      }
    });

    it('10 degrees', function(){
      thermostat.decreaseTemperature()
      expect(thermostat.temperature()).toEqual(10);
    });
  });

  describe('maximum temperature is ', function(){
    it('25 degrees with power saving on', function(){
      while(thermostat.temperature() < 25) {
        thermostat.increaseTemperature();
      }
      thermostat.increaseTemperature()
      expect(thermostat.temperature()).toEqual(25);
    });
  });


});

