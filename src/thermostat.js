var Thermostat = function(){
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.currentTemp = this.DEFAULT_TEMP;
  this.powerSave = true;
  this.displayColour = 'Yellow';
};

Thermostat.prototype.upButton = function() {
  error = "Temperature cannot rise above max temperature";
  if (this.currentTemp === this.MAX_TEMP) throw new Error(error);
  this.currentTemp++;
  this.tempCheck();
};

Thermostat.prototype.downButton = function() {
  error = 'Temperature cannot fall below 10';
  if (this.currentTemp === this.MIN_TEMP) throw new Error(error);
  this.currentTemp--;
  this.tempCheck();
};

Thermostat.prototype.resetButton = function() {
  this.currentTemp = this.DEFAULT_TEMP;
  this.tempCheck();
};

Thermostat.prototype.powerSaveButton = function(){
  this.powerSave = !this.powerSave;
  if (this.powerSave)
    { this.MAX_TEMP = 25; }
    if(this.currentTemp > this.MAX_TEMP)
      {this.currentTemp = this.MAX_TEMP;}
  else
    { this.MAX_TEMP = 32; }
};

Thermostat.prototype.tempCheck = function(){
  if(this.currentTemp < 18)
   {this.displayColour = 'Green';}
  else if(this.currentTemp >= 18 && this.currentTemp < 25)
    {this.displayColour = 'Yellow';}
  else
    {this.displayColour = 'Red';}
};
