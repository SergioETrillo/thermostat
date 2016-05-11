'use strict';

function Thermostat(){
  this._temp = 20;
  this._MINIMUM_TEMP = 10;
  this._MAXIMUM_TEMP = 25;
  this._MAXIMUM_TEMP_ON = 25;
  this._MAXIMUM_TEMP_OFF = 32;

  this._powermode = true;
}

Thermostat.prototype.temperature = function(){ return this._temp; };

Thermostat.prototype.powerSaving = function() {
  return this._powermode;
};

Thermostat.prototype.switchPowerSaving = function() {
  if (this._powermode){
    this._MAXIMUM_TEMP = this._MAXIMUM_TEMP_OFF;
  } else {
    this._MAXIMUM_TEMP = this._MAXIMUM_TEMP_ON;
  }
  return this._powermode = !this._powermode;
};

Thermostat.prototype.increaseTemperature = function () {
  if (this._temp < this._MAXIMUM_TEMP) { return this._temp++; }
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this._temp > this._MINIMUM_TEMP) { return this._temp--; }
};
