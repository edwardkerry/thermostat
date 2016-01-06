'use strict()';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('Temperature', function(){
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

    describe('#MAX_TEMP', function(){
      it('does not allow temperature to rise above MAX_TEMP', function(){
        for(i = 0; i < 5; i++) { thermostat.upButton(); }
        error = 'Temperature cannot rise above max temperature';
        expect(function() { thermostat.upButton(); }).toThrowError(error);
      });

      describe('#getMaxTemp', function(){
        it('should show the max temp', function(){
          expect(thermostat.getMaxTemp()).toEqual(thermostat.MAX_TEMP);
        });
      });
    });
  });

  describe('#currentTemp', function(){
    it('should initialize at 20', function(){
      expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT_TEMP);
    });

    describe('#getCurrentTemp', function(){
      it('should show the current temp', function(){
        expect(thermostat.getCurrentTemp()).toEqual(thermostat.DEFAULT_TEMP);
      });
    });
  });

  describe('Power save mode', function(){
    it('should be on by default', function(){
      expect(thermostat.powerSave).toEqual(true);
    });

    describe('power save mode is on', function(){
      it('should have a max temp of 25', function(){
        expect(thermostat.MAX_TEMP).toEqual(25);
      });
    });

    describe('power save mode is off', function(){
      it('should have a max temp of 32', function(){
        thermostat.powerSaveButton();
        expect(thermostat.MAX_TEMP).toEqual(32);
      });
    });
  });

  describe('Buttons', function(){
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

    describe('#resetButton', function(){
      it('should reset the temperature to the default temperature', function(){
        thermostat.downButton();
        thermostat.resetButton();
        expect(thermostat.currentTemp).toEqual(20);
      });
    });

    describe('#powerSaveButton', function(){
      it('turns power save on and off', function(){
        thermostat.powerSaveButton();
        expect(thermostat.powerSave).toEqual(false);
        thermostat.powerSaveButton();
        expect(thermostat.powerSave).toEqual(true);
      });

      it ('if current temp > 25, power save sets it to 25', function(){
        thermostat.powerSaveButton();
        for(i = 0; i < 9; i++) { thermostat.upButton(); }
        thermostat.powerSaveButton();
        expect(thermostat.currentTemp).toEqual(25);
      });
    });
  });

  describe('Display', function(){
    it('is yellow is temperature is >= 18 and < 25', function(){
      expect(thermostat.displayColour).toEqual('Medium');
    });

    it('is green if temperature is < 18', function(){
      thermostat.downButton();
      thermostat.downButton();
      thermostat.downButton();
      expect(thermostat.displayColour).toEqual('Low');
    });

    it('is red if temperature is >= 25', function(){
      thermostat.powerSaveButton();
      for (i = 0; i < 8; i++){ thermostat.upButton();}
      expect(thermostat.displayColour).toEqual('High');
    });
  });

});
