'use strict';

function Thermostat(){
  this._temp = 20;
  this._MINIMUM_TEMP = 10;
  this._powermode = true;
}

Thermostat.prototype.temperature = function(){ return this._temp; };

Thermostat.prototype.powerSaving = function() {
  return this._powermode;
};

Thermostat.prototype.increaseTemperature = function () {
  if (this._temp < 25) { return this._temp++; }
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this._temp > this._MINIMUM_TEMP) { return this._temp--; }
};