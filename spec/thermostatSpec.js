describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('#temp', function(){
    it('should have an initial temperature of 20', function(){
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('#upButton', function() {
    it('should increase the temperature by 1', function() {
      thermostat.upButton();
      expect(thermostat.temp).toEqual(21);
    });
  });

});
