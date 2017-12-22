//keys.js
if(process.env.NODE_ENV === 'production')
{
//prod evvironemnt

module.exports = require('./prod');


}
else {
  //dev environment
  module.exports = require('./dev');
}
