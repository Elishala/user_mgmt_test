//implement a user class- has 3 properties, firstName, lastName, email.
//user constructor should take a spec w/ the above properties.
//if user is passed an invalid spec, throw an exception indicating which property
//is invalid like so: throw { message: 'firstName is required', field:'firstName'}
//user needs the following methods: fullname()- returns the first & last name as a single string value.
//& equal(otherUser) - returns true if the user's email matches otherUser's email.

//making variables to pass through the initial user entering info phase.
var firstName = document.querySelector(".firstName");
var lastName = document.querySelector(".lastName");
var email = document.querySelector(".email");
var form = document.querySelector(".user-info");
var userStore = ObjectStore();
var


//eventListener listening for submit, & preventing it from bubbling up
form.addEventListener("submit",function(e) {
  e.preventDefault();
  e.stopPropagation();
  transferringUser();
});


//now writing a function to pass through the constructor function to create
//an object out of the info that's placed into the form, bc the submit button
//is being heard.
function transferringUser() {
  var newUser;
  newUser = User({firstName: firstName.value, lastName: lastName.value, email: email.value});

  if (!userStore.add(newUser)) {
    alert('user already exists');
  }

}








//
