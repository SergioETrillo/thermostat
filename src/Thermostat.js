'use strict';

function Thermostat(){
  this._DEFAULT_TEMP = 20;
  this._MINIMUM_TEMP = 10;

  this._MAXIMUM_TEMP_ON = 25;
  this._MAXIMUM_TEMP_OFF = 32;

  this._maximum_temp = 25;
  this._temp = this._DEFAULT_TEMP;



  this._powermode = true;
}

Thermostat.prototype.getCurrentTemperature = function(){ return this._temp; };

Thermostat.prototype.powerSaving = function() {
  return this._powermode;
};

Thermostat.prototype.switchPowerSaving = function() {
  if (this._powermode){
    this._maximum_temp = this._MAXIMUM_TEMP_OFF;
  } else {
    this._maximum_temp = this._MAXIMUM_TEMP_ON;
  }
  return this._powermode = !this._powermode;
};

Thermostat.prototype.up = function () {
  if (this._temp < this._maximum_temp) { return this._temp++; }
};

Thermostat.prototype.down = function () {
  if (this._temp > this._MINIMUM_TEMP) { return this._temp--; }
};

Thermostat.prototype.reset = function() {
  return this.temp = this._DEFAULT_TEMP;
};
