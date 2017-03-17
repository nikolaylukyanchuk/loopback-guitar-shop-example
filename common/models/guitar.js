'use strict';

module.exports = function(Guitar) {
  Guitar.findUnderPrice = function(value, cb){
    Guitar.find({
      where: {
        price: {
          lt: value
        }
      }
    }, cb);
  };


  Guitar.remoteMethod('findUnderPrice', {
    accepts: {
      arg: "price",
      type: "number"
    },
    returns: {
      arg: "guitars",
      type: "array"
    },
    http: {
      path: "/under-price",
      verb: "get"
    }
  });
};
