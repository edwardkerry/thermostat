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

});
