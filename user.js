function User(spec) {
  if (!spec.firstName || spec.firstName.trim() === '') {
    throw 'First name is required';
  }

  var self = {
    firstName: spec.firstName,
    lastName: spec.lastName,
    email: spec.email,

    equal: function (otherUser) {
      return self.email === otherUser.email;
    },

    fullName: function() {
      return self.firstName + " " + self.lastName;
    }

  };

   return self;
}

//don't need to touch
