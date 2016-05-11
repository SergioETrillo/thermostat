'use strict';

function Thermostat() {
  this._temperature = 20;
  this._MINIMUM_TEMP = 10;
  this._power_mode = true;
  this._MAXIMUM_TEMP = 25;
  this._MAXIMUM_TEMP_OFF = 32;
  this._MAXIMUM_TEMP_ON = 25;
  this._DEFAULT_TEMP = 20;
  this._colour;
}

  Thermostat.prototype.powerMode = function() {
    return this._power_mode;
  };

  Thermostat.prototype.temperature = function() {
    return this._temperature;
  };

  Thermostat.prototype.switchPowerMode = function() {
    this._power_mode = !this._power_mode;
    if (this._power_mode) {
      this._MAXIMUM_TEMP = this._MAXIMUM_TEMP_ON;
    } else {
      this._MAXIMUM_TEMP = this._MAXIMUM_TEMP_OFF;
    }
    return this._power_mode;
  };

  Thermostat.prototype.up = function(number) {
    if (this._temperature + number < this._MAXIMUM_TEMP)  {
      return this._temperature = this._temperature + number;
    }
    return this._temperature = this._MAXIMUM_TEMP;
  };

  Thermostat.prototype.down = function(number) {
    if (this._temperature - number < this._MINIMUM_TEMP) {
      throw new Error ('Minimum temperature has been reached');
    } else {
      return this._temperature = this._temperature - number;
    }
  };

  Thermostat.prototype.reset = function() {
    this._temperature = this._DEFAULT_TEMP;
  };

  Thermostat.prototype.colour = function() {
    if (this._temperature < 18) {
      return this._colour = 'green';
    } else if (this._temperature < 25) {
      return this._colour = 'yellow';
    } else {
      return this._colour = 'red';
    }
  };
