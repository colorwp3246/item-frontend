
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  BASE_TABLE:'"http://www.zq100.com/api/items"',
  // BASE_TABLE:'"http://192.168.1.253:8020"',
  // BASE_TABLE:'"http://192.168.1.145:8085"',
  // BASE_STATE:'"http://192.168.1.185:8080"',
  ITEM_BASE_TABLE:`"http://192.168.1.253:8085"`,
  // ITEM_BASE_TABLE:'"http://192.168.1.145:8085"',
  BASE_SERVE:'"http://www.zq100.com/api/basic"',
  // BASE_SERVE:'"http://192.168.1.50:8050"',
  TEST_YEAR:'"http://www.zq100.com/api/examine"',
  //TEST_YEAR:'"http://192.168.1.116:8020"'
  //TEST_YEAR:'"http://192.168.1.108:8020"',
  BASE_GATE:'"http://www.zq100.com/api/basic"',
  BASE_LOGIN:'"http://www.zq100.com/api"',
  EXAM_URL:'"http://api.zq.com:8082"',
  BASE_GATEWAY:'"http://www.zq100.com"',
  PICTURE_SERVE:'"http://www.zq100.com/api/files"',
  BASE_ARTICLE:'"http://192.168.1.50:8050"',
  BASE_UPLOADFILE:'"http://www.zq100.com/api/files"',
  BASE_MESSAGE:'"http://www.zq100.com/api/msg"'
})
