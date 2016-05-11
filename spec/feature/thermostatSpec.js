'use strict';

describe("Thermostat", function(){
var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20)
  });

  it('starts with power mode on', function() {
    expect(thermostat.powerMode()).toBe(true)
  });

  it('I can switch power mode from on to off', function() {
    expect(thermostat.switchPowerMode()).toBe(false)
  });

  it('when power mode on maximum temperature is 25', function() {
    thermostat.up(10);
    expect(thermostat.temperature()).toEqual(25)
  });

  it('when power mode off maximum temperature is 32', function() {
    thermostat.switchPowerMode();
    thermostat.up(15);
    expect(thermostat.temperature()).toEqual(32)
  });

  it('temperature increases with up button', function() {
    thermostat.up(5);
    expect(thermostat.temperature()).toEqual(25);
  });

  it('throws error when temperature is below 10', function() {
    expect(function(){thermostat.down(15);}).toThrowError('Minimum temperature has been reached');
  });

  it('temperature decreases with down button', function() {
    thermostat.down(5);
    expect(thermostat.temperature()).toEqual(15);
  });

  it('I can reset the temperature with the reset button', function() {
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20);
  });

  it('displays temperature in green if temperature < 18', function() {
    thermostat.down(5);
    expect(thermostat.colour()).toEqual('green');
  });

  it('displays temperature in yellow if temperature < 25', function() {
    thermostat.up(4);
    expect(thermostat.colour()).toEqual('yellow');
  });

  it('displays temperature in red if temperature 25 or more ', function() {
    thermostat.up(6);
    expect(thermostat.colour()).toEqual('red');
  });

});
