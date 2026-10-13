require('datejs');
function combineUsers(...args) {
const combinedObject = {
 users: []
};

  
for (const userArray of args) {
  combinedObject.users = [...combinedObject.users, ...userArray]
};
combinedObject.merge_date = Date.today().toString('10/13/2026');
return combinedObject;
};

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
