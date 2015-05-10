var Board = function(token) {
  var width = 1040,
    height = 700;

  var svg = d3.select('#board')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  var applicationHubProxy = $.connection.applicationHub;
  $.connection.hub.start()
    .done(function() {
      console.log('Now connected, connection ID=' + $.connection.hub.id);

      var id = '2f4723eb-c11f-4f91-82a1-9e7e709026b7';
      applicationHubProxy.server.openBoard(id);
      applicationHubProxy.server.readItems(id)
        .done(function(data) {
          console.log(data);
          data.forEach(function(item) {
            if (item) {

            }
          });
        });
    })
    .fail(function() {
      console.log('Could not Connect!');
    });

  $.signalR.ajaxDefaults.headers = {
    Authorization: "Bearer " + token
  };
  applicationHubProxy.client.onCreateSuccess = function(item) {
    console.log(item);
  };
  applicationHubProxy.client.onUpdateSuccess = function(message) {
    console.log(item);
  };
  applicationHubProxy.client.onError = function(message) {
    console.log(item);
  };
};
