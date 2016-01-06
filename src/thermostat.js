var Thermostat = function(){
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.currentTemp = this.DEFAULT_TEMP;
  this.powerSave = true;
};

Thermostat.prototype.upButton = function() {
   this.currentTemp++;
};

Thermostat.prototype.downButton = function() {
  error = 'Temperature cannot fall below 10';
  if (this.currentTemp === this.MIN_TEMP) throw new Error(error);
  this.currentTemp--;
};

Thermostat.prototype.powerSaveSwitch = function(){
  this.powerSave = !this.powerSave;
  if (this.powerSave)
    { this.MAX_TEMP = 25; }
  else
    { this.MAX_TEMP = 32; }
};
