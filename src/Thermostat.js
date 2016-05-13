'use strict';

function Thermostat(){
  this._DEFAULT_TEMP = 20;
  this._MINIMUM_TEMP = 10;

  this._LIMIT_TEMP_SAVING_ON= 25;
  this._LIMIT_TEMP_SAVING_OFF = 32;

  this._LIMIT_LOW_USAGE = 18;
  this._LIMIT_MEDIUM_USAGE = 25;

  this._maximum_temp = 25;
  this._temp = this._DEFAULT_TEMP;



  this._powermode = true;
}

Thermostat.prototype.getCurrentTemperature = function(){ return this._temp; };

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._powermode;
};

// Thermostat.prototype.switchPowerSavingModeOff = function() {
//   this._powermode = false;
//   this._maximum_temp = this._LIMIT_TEMP_SAVING_OFF;
// };

// Thermostat.prototype.switchPowerSavingModeOn = function() {
//   this._maximum_temp = this._LIMIT_TEMP_SAVING_ON;
//   this._powermode = true;
//   if (this._temp > this._LIMIT_TEMP_SAVING_ON) {
//     this._temp = this._LIMIT_TEMP_SAVING_ON;
//   }
// };

Thermostat.prototype.switchPowerSaving = function() {
  this._powermode = !this._powermode;
  if (this._powermode){
    this._maximum_temp = this._LIMIT_TEMP_SAVING_ON;
  } else {
    this._maximum_temp = this._LIMIT_TEMP_SAVING_OFF;
  }

  if (this._powermode && this._temp > this._LIMIT_TEMP_SAVING_ON) {
    this._temp = this._LIMIT_TEMP_SAVING_ON;
  }
  return this._powermode;
};

Thermostat.prototype.up = function () {
  if (this._temp < this._maximum_temp) { return ++this._temp; }
};

Thermostat.prototype.down = function () {
  if (this._temp > this._MINIMUM_TEMP) { return --this._temp; }
};

Thermostat.prototype.reset = function() {
  this.switchPowerSavingModeOn()
  return this._temp = this._DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temp < this._LIMIT_LOW_USAGE) {
    return 'low-usage';
  } else if (this._temp < this._LIMIT_MEDIUM_USAGE) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};