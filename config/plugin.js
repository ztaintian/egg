// 'use strict';

// /** @type Egg.EggPlugin */
// exports.mysql = {
//   enable: true,
//   package: 'egg-mysql',
// };
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  }
};