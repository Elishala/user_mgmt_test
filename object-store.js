//this passes a test

/*square bracket notation to access properties which are defined
as objects in the page */

function ObjectStore() {
  var collection = [];

  var self = {
    exists: function (obj) {
      return collection.some(function (item) {
        return obj.equal(item);
      });
    },

    add: function (obj) {
      if (!self.exists(obj)) {
        collection.push(obj);
        return true;
      }
        return false;
    },

    query: function () {
      return collection;
    },

    remove: function (obj) {
      collection = collection.filter(function (item) {
      return !obj.equal(item);
      });
    }
  };

  return self;
}

//don't need to change
