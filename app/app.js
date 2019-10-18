/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  var checkIfReset = confirm('This will reset your progress.');
  if (checkIfReset) {
  window.localStorage.clear();
  window.location.href='index.html'

}};

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}


///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
// $(document).ready(function() {
//   $('#nextButton').click(function(event) {
//     event.preventDefault();

//     var currentKey = $("#keyInput").val();
//     var currentValue = $("#valueInput").val();
//     if (keyExists(currentKey)) {
//       confirm('Key already exists, please use "Update" if you wish to overwrite the key with a new value.');
//     } else {
//       createItem(currentKey, currentValue);
//     }
//   });

//   $('#previousButton').click(function(event) {
//     event.preventDefault();

//     var currentKey = $("#keyInput").val();
//     var currentValue = $("#valueInput").val();
//     if (keyExists(currentKey)) {
//       updateItem(currentKey, currentValue);
//     } else {
//       alert('Key does not yet exist, please use "Create" if you wish to create a new key/value pair.')
//     }
//   });
// });
