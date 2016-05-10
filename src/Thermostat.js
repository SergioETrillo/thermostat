function Thermostat() {
  this.temperature = 20;
}
  Thermostat.prototype.up = function(number) {
    return this.temperature = this.temperature + number;
  }

  Thermostat.prototype.down = function(number) {
    if (this.temperature - number < 10) {
      throw new Error ('Minimum temperature has been reached');
    } else {
      return this.temperature = this.temperature - number;
    }
  }
  // currentTemperature = function() {
  //   return this.temperature;
  // }
