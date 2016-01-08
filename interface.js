$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();
  powerMonitor();
  getWeather();


  $('#up-button').click(function(){
    thermostat.upButton();
    updateTemperature();
  });

  $('#down-button').click(function(){
    thermostat.downButton();
    updateTemperature();
  });

  $('#reset-button').click(function(){
    thermostat.resetButton();
    updateTemperature();
  });

  $('#power-save-button').click(function(){
    thermostat.powerSaveButton();
    updateTemperature();
    powerMonitor();
  });

  function updateTemperature() {
    $('#current-temperature').text(thermostat.getCurrentTemp());
    $('#current-temperature').attr('class', thermostat.getEnergyUse());
  }

  function powerMonitor(){
    $('#power-monitor').attr('class', thermostat.getPowerSaveMode());
    $('#power-monitor').text(thermostat.getPowerSaveMode());
  }

  function getWeather() {
    $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=5d24feaa9b01c3e76763d1de227881dd", function(data){
      console.log(data);
      $('#live-temp').text(data.main.temp);
      $('#live-city').text(data.name);
    });
  }

  $("#city_select").submit(function(event){
    event.preventDefault();
    var city = $("#current_city").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=5d24feaa9b01c3e76763d1de227881dd", function(data){
      $('#live-city').text(data.name);
      $('#live-temp').text(data.main.temp);
    });
  });

});
