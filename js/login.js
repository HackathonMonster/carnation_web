var Login = function() {
  var util = {};

  var storage = window.sessionStorage;

  util.saveItemToStorage = function(key, val) {
    storage.setItem(key, val);
  };

  var getItemFromStorage = function(key) {
    var item = storage.getItem(key);
    if (item)
      return item;
  };

  var removeItemFromStorage = function(key) {
    storage.removeItem(key);
  };

  var removeAllItemStorage = function() {
    storage.clear();
  };

  util.isLogin = function() {
    if (getItemFromStorage('token'))
      return true;
    return false;
  };

  util.login = function(username, password) {
    if (!username || !password)
      return false;
    var data = {
      'grant_type': 'password',
      'username': username,
      'password': password
    };
    var url = '//carnation.azurewebsites.net/token';
    return $.ajax({
      url: url,
      type: 'POST',
      data: data
    });
  };

  util.register = function(name, email, password, confirmPassword, birthday) {
    if (!name || !email || password !== confirmPassword || !birthday) {
      $('#signup_dialog').effect('shake');
      return false;
    }
    var data = {
      'name': name,
      'email': email,
      'password': password,
      'confirmPassword': confirmPassword,
      'birthday': birthday
    };
    var url = '//carnation.azurewebsites.net/api/Account/Register';
    return $.ajax({
      url: url,
      type: 'POST',
      data: data
    });
  };

  if (typeof storage === 'undefined')
    return null;
  else
    return util;
};
