'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('initialization, ', function (){

    it('getCurrentTemperature starts at 20 degrees', function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('powersaving mode is ON', function(){
      expect(thermostat.powerSaving()).toBe(true);
    });
  });

  describe('temperature changes, ',function(){
    it('temperature can be increased', function(){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('temperature can be decreased', function(){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
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
  });

  describe('minimum temperature is ', function(){
    beforeEach(function(){
      while(thermostat.getCurrentTemperature() > 10) {
        thermostat.down();
      }
    });

    it('10 degrees', function(){
      thermostat.down()
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('maximum getCurrentTemperature is ', function(){
    it('25 degrees with power saving ON', function(){
      while(thermostat.getCurrentTemperature() < 25) {
        thermostat.up();
      }
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });


    xit('32 degrees with power saving OFF', function(){
      while(thermostat.getCurrentTemperature() < 32) {
        thermostat.up();
      }
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

describe('when reset, ', function(){
    it('getCurrentTemperature is back to 20', function(){
      expect(thermostat.reset()).toEqual(20);
    });

    it('powersaving is ON', function(){
      expect(thermostat.powerSaving()).toBe(true);
    });
});



});
