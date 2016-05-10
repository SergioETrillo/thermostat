'use strict';

describe("Thermostat", function(){
var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('temperature increases with up button', function() {
    thermostat.up(10);
    expect(thermostat.temperature).toEqual(30);
  });

  it('throws error when temperature is below 10', function() {
    expect(function(){thermostat.down(15);}).toThrowError('Minimum temperature has been reached');
  });

  it('temperature decreases with down button', function() {
    thermostat.down(5);
    expect(thermostat.temperature).toEqual(15);
  });
});
