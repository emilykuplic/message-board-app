myApp.controller("MessageController", function ($http){
  var mc=this;
  mc.newMessage = {};

console.log('MessageController');

//gets all the data in database
getMessages();

mc.addMessage = function (){
  console.log('add message', mc.newMessage);
        $http.post('/messageboard', mc.newMessage)
          .then(function(response) {
            console.log('added new message', response);
            getMessages();
          });
};

  function getMessages() {
        $http.get('/messageboard').then(function(response) {
          console.log(response.data);
          mc.messages = response.data;
  });
}
});
