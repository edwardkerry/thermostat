var Thermostat = function(){
  this.temp = 20;
};

Thermostat.prototype.upButton = function() {
  return this.temp++;
};
