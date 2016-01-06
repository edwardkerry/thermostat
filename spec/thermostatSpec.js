describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    describe('#DEFAULT_TEMP', function(){
      it('is 20', function(){
        expect(thermostat.DEFAULT_TEMP).toEqual(20);
      });
    });

    describe('#MIN_TEMP', function() {
      it('is 10', function(){
        expect(thermostat.MIN_TEMP).toEqual(10);
      });

      it('does not allow temperature to fall below MIN_TEMP', function(){
        for(i = 0; i < 10; i++) { thermostat.downButton(); }
        error = 'Temperature cannot fall below 10';
        expect(function() { thermostat.downButton(); }).toThrowError(error);
      });
    });

    describe('#currentTemp', function(){
      it('should initialize as DEFAULT_TEMP', function(){
        expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT_TEMP);
      });
    });
  });

  describe('power save mode', function(){
    it('should be on by default', function(){
      expect(thermostat.powerSave).toEqual(true);
    });

    describe('#powerSaveSWitch', function(){
      it('turns power save on and off', function(){
        thermostat.powerSaveSwitch();
        expect(thermostat.powerSave).toEqual(false);
        thermostat.powerSaveSwitch();
        expect(thermostat.powerSave).toEqual(true);
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

  describe('power save mode is on', function(){
    it('should have a max temp of 25', function(){
      expect(thermostat.MAX_TEMP).toEqual(25);
    });
  });

  describe('power save mode is off', function(){
    it('should have a max temp of 32', function(){
      thermostat.powerSaveSwitch();
      expect(thermostat.MAX_TEMP).toEqual(32);
    });
  });

});
