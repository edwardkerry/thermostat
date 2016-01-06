describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    describe('#DEFAULT_TEMP', function(){
      it('should have an initial temperature of 20', function(){
        expect(thermostat.DEFAULT_TEMP).toEqual(20);
      });
    });

    describe('#currentTemp', function(){
      it('should initialize as DEFAULT_TEMP', function(){
        expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT_TEMP);
      });
    });

    describe('#MIN_TEMP', function() {
      it('has a minimum temperature of 10', function(){
        expect(thermostat.MIN_TEMP).toEqual(10);
      });

      it('does not allow temperature to fall below MIN_TEMP', function(){
        for(i = 0; i < 10; i++) { thermostat.downButton(); }
        error = 'Temperature cannot fall below 10';
        expect(function() { thermostat.downButton(); }).toThrowError(error);
      });
    });
  });

  describe('#upButton', function() {
    it('should increase the current temperature by 1', function() {
      thermostat.upButton();
      expect(thermostat.currentTemp).toEqual(21);
    });
  });

  describe('#downButton', function(){
    it('should decrease the current temperature by 1', function(){
      thermostat.downButton();
      expect(thermostat.currentTemp).toEqual(19);
    });
  });

});
