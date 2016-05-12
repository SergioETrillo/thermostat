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
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
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
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('if OFF, can be switched to ON', function(){
      thermostat.switchPowerSaving();
      thermostat.switchPowerSaving();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch PSM off, directly', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
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


    it('32 degrees with power saving OFF', function(){
      thermostat.switchPowerSavingModeOff();
      for (var i=0; i<32; i++) {
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
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('power saving OFF, then reset, power saving is on', function(){
      thermostat.switchPowerSavingModeOff();
      thermostat.reset();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
});

describe('power usage is:  ', function(){
    it('low when Temp < 18', function(){
      for(var i=0; i <3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toBe('low-usage');
    });

    it('medium when 18 <= Temp < 25', function(){
      for(var i=0; i < 4; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toBe('medium-usage');
    });

    it('high when Temp >= 25', function(){
      for(var i=0; i < 10; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toBe('high-usage');
    });
});



});
