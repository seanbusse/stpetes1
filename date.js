const today = new Date();


exports.getYear = function () {
const object = {
  year: 'numeric'
};
return today.toLocaleDateString('en-US', object);
};
