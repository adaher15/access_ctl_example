const AccessControl = require("accesscontrol");
const fs = require('fs');
let rawdata = fs.readFileSync('server/roles_profile.json');
let _roles = JSON.parse(rawdata);
const ac = new AccessControl(_roles);

exports.roles = (function() {
 console.log('\n_______\n', JSON.stringify(ac.getGrants()));
return ac;
})();