var Thermostat = function(){
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.currentTemp = this.DEFAULT_TEMP;
};

Thermostat.prototype.upButton = function() {
  return this.currentTemp++;
};

Thermostat.prototype.downButton = function() {
  error = 'Temperature cannot fall below 10';
  if (this.currentTemp === this.MIN_TEMP) throw new Error(error);
  return this.currentTemp--;
};
