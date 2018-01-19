var list = [];

var storeNumber = function(number) {
  list.push(number);
  return list;
}

var sortList = function() {
  list.sort(function(a, b) {
    return a - b;
  });
  return list;
}

module.exports.storeNumber = storeNumber;

module.exports.sortList = sortList;

